import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { CheckCircle2, AlertTriangle, Loader2, Play, RotateCw, Square } from "lucide-react";

type EntityState = { cursor: string | null; done: boolean; fetched: number; total: number | null };
type Run = { id: string; status: string; started_by: string; entity_state: Record<string, EntityState>; current_entity: string | null; last_error: string | null; started_at: string; finished_at: string | null; heartbeat_at: string };
type SyncErr = { id: string; entity: string; record_id: string; message: string; attempts: number; updated_at: string; context: any };
type Status = { run: Run | null; alive: boolean; counts: Record<string, number>; errors: SyncErr[] };

const ENTITIES: { key: string; label: string; count: string }[] = [
  { key: "clients", label: "Clients (incl. leads & archived)", count: "clients" },
  { key: "properties", label: "Properties", count: "properties" },
  { key: "requests", label: "Requests", count: "requests" },
  { key: "quotes", label: "Quotes", count: "quotes" },
  { key: "jobs", label: "Jobs", count: "jobs" },
  { key: "visits", label: "Visits", count: "visits" },
  { key: "invoices", label: "Invoices", count: "invoices" },
  { key: "payments", label: "Payment records", count: "payments" },
];

async function call<T>(body: Record<string, unknown>): Promise<T> {
  const { data, error } = await supabase.functions.invoke("jobber-archive-sync", { body });
  if (error) {
    let msg = error.message;
    try { msg = (await (error as any).context.json()).error ?? msg; } catch { /* keep */ }
    throw new Error(msg);
  }
  return data as T;
}

const fmt = (d?: string | null) => (d ? new Date(d).toLocaleString() : "—");

export default function ArchiveSync() {
  const [s, setS] = useState<Status | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const timer = useRef<number>();

  const load = async () => {
    try { setS(await call<Status>({ action: "status" })); } catch (e: any) { toast.error(e.message); }
  };

  useEffect(() => {
    load();
    timer.current = window.setInterval(load, 5000);
    return () => window.clearInterval(timer.current);
  }, []);

  const act = async (action: string, extra: Record<string, unknown> = {}) => {
    setBusy(action);
    try {
      const r: any = await call({ action, ...extra });
      if (action === "retry_errors") toast.success(`Retried ${r.tried}, fixed ${r.fixed}`);
      await load();
    } catch (e: any) { toast.error(e.message); }
    finally { setBusy(null); }
  };

  const run = s?.run;
  const st = run?.entity_state ?? {};
  const running = run?.status === "running" && s?.alive;
  const c = s?.counts ?? {};
  const allDone = run?.status === "completed";

  const statusBadge = !run ? <Badge variant="secondary" className="rounded-none">Never run</Badge>
    : running ? <Badge className="rounded-none">Running</Badge>
    : run.status === "completed" ? <Badge className="rounded-none">Completed</Badge>
    : <Badge variant="destructive" className="rounded-none">{run.status === "running" ? "Stalled" : "Paused"}</Badge>;

  const verifyRows = ENTITIES.map((e) => {
    const total = st[e.key]?.total ?? null;
    const have = c[e.count] ?? 0;
    return { ...e, total, have, ok: total != null && have >= total };
  });
  const filesOk = (c.attachments ?? 0) > 0 ? c.attachments_downloaded === c.attachments : allDone;

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Data export</h1>
        <div className="flex flex-wrap gap-2">
          <Button className="rounded-none" disabled={!!busy || running} onClick={() => { if (confirm("Start a full export from the beginning? Existing records are updated, never duplicated.")) act("start"); }}>
            {busy === "start" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4 mr-2" />}Start full sync
          </Button>
          <Button variant="outline" className="rounded-none" disabled={!!busy || running || !run || allDone} onClick={() => act("resume")}>
            <RotateCw className="h-4 w-4 mr-2" />Resume
          </Button>
          <Button variant="outline" className="rounded-none" disabled={!!busy || !running} onClick={() => act("stop")}>
            <Square className="h-4 w-4 mr-2" />Pause
          </Button>
        </div>
      </div>

      <section className="bg-background border border-border mb-6">
        <div className="flex items-center justify-between px-5 py-3 border-b border-border">
          <h2 className="font-semibold text-foreground">Progress</h2>{statusBadge}
        </div>
        <div className="p-5">
          {!s ? <Loader2 className="h-4 w-4 animate-spin" /> : (
            <>
              {run && (
                <p className="text-sm text-muted-foreground mb-4">
                  Started {fmt(run.started_at)} by {run.started_by}. Last activity {fmt(run.heartbeat_at)}.
                  {run.finished_at && ` Finished ${fmt(run.finished_at)}.`}
                </p>
              )}
              {run?.last_error && (run.status === "running"
                ? <p className="text-sm text-muted-foreground mb-4">{run.last_error}</p>
                : <p className="text-sm text-destructive mb-4">Stopped: {run.last_error}. Click Resume to continue from the last checkpoint.</p>)}
              <div className="space-y-3">
                {ENTITIES.map((e) => {
                  const x = st[e.key];
                  const pct = x?.done ? 100 : x?.total ? Math.min(99, (x.fetched / x.total) * 100) : 0;
                  return (
                    <div key={e.key}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className={run?.current_entity === e.key && running ? "font-semibold text-foreground" : "text-foreground"}>{e.label}</span>
                        <span className="text-muted-foreground">{x ? `${x.fetched.toLocaleString()} / ${x.total?.toLocaleString() ?? "?"}` : "waiting"}</span>
                      </div>
                      <Progress value={pct} className="h-1.5 rounded-none" />
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-muted-foreground mt-4">Notes, line items and photos are pulled along with each client, request, quote and job. The export runs on the server — you can close this page.</p>
            </>
          )}
        </div>
      </section>

      <section className="bg-background border border-border mb-6">
        <div className="px-5 py-3 border-b border-border"><h2 className="font-semibold text-foreground">Verification</h2></div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader><TableRow><TableHead>Record type</TableHead><TableHead className="text-right">In Jobber</TableHead><TableHead className="text-right">In archive</TableHead><TableHead /></TableRow></TableHeader>
            <TableBody>
              {verifyRows.map((r) => (
                <TableRow key={r.key}>
                  <TableCell>{r.label}</TableCell>
                  <TableCell className="text-right tabular-nums">{r.total?.toLocaleString() ?? "—"}</TableCell>
                  <TableCell className="text-right tabular-nums">{r.have.toLocaleString()}</TableCell>
                  <TableCell>{r.total == null ? null : r.ok ? <CheckCircle2 className="h-4 w-4 text-primary" /> : <AlertTriangle className="h-4 w-4 text-destructive" />}</TableCell>
                </TableRow>
              ))}
              <TableRow><TableCell>Notes</TableCell><TableCell className="text-right">—</TableCell><TableCell className="text-right tabular-nums">{(c.notes ?? 0).toLocaleString()}</TableCell><TableCell /></TableRow>
              <TableRow><TableCell>Line items</TableCell><TableCell className="text-right">—</TableCell><TableCell className="text-right tabular-nums">{(c.line_items ?? 0).toLocaleString()}</TableCell><TableCell /></TableRow>
              <TableRow><TableCell>Videos (skipped on purpose)</TableCell><TableCell className="text-right">—</TableCell><TableCell className="text-right tabular-nums">{(c.videos_skipped ?? 0).toLocaleString()}</TableCell><TableCell /></TableRow>
              <TableRow>
                <TableCell>Photos &amp; files (downloaded / found)</TableCell>
                <TableCell className="text-right tabular-nums">{(c.attachments ?? 0).toLocaleString()}</TableCell>
                <TableCell className="text-right tabular-nums">{(c.attachments_downloaded ?? 0).toLocaleString()}</TableCell>
                <TableCell>{filesOk ? <CheckCircle2 className="h-4 w-4 text-primary" /> : <AlertTriangle className="h-4 w-4 text-destructive" />}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p className="text-xs text-muted-foreground px-5 py-3 border-t border-border">
          The export is complete when every row shows a check and there are no open problems below.
        </p>
      </section>

      <section className="bg-background border border-border mb-6">
        <div className="flex items-center justify-between px-5 py-3 border-b border-border">
          <h2 className="font-semibold text-foreground">Problems ({c.open_errors ?? 0})</h2>
          <Button size="sm" variant="outline" className="rounded-none" disabled={!!busy || !(s?.errors.length)} onClick={() => act("retry_errors")}>
            {busy === "retry_errors" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Retry all"}
          </Button>
        </div>
        {!s?.errors.length ? <p className="p-5 text-sm text-muted-foreground">No open problems.</p> : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader><TableRow><TableHead>Type</TableHead><TableHead>Record</TableHead><TableHead>Problem</TableHead><TableHead>Tries</TableHead><TableHead /></TableRow></TableHeader>
              <TableBody>
                {s.errors.map((e) => (
                  <TableRow key={e.id}>
                    <TableCell className="text-xs font-mono">{e.entity}</TableCell>
                    <TableCell className="text-xs">{e.context?.file_name ?? e.record_id}</TableCell>
                    <TableCell className="text-xs max-w-md">{e.message}</TableCell>
                    <TableCell className="text-xs">{e.attempts}</TableCell>
                    <TableCell><Button size="sm" variant="outline" className="rounded-none h-7" disabled={!!busy} onClick={() => act("retry_errors", { ids: [e.id] })}>Retry</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </section>
    </>
  );
}
