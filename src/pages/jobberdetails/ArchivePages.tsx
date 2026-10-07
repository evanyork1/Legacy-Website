import { useEffect, useState, FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle2, XCircle, Loader2, RefreshCw, Plug } from "lucide-react";
import { archiveCall, useArchive } from "./archiveSession";

const fmt = (d?: string | null) => (d ? new Date(d).toLocaleString() : "—");

function Panel({ title, children, action }: { title: string; children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <section className="bg-background border border-border mb-6">
      <div className="flex items-center justify-between px-5 py-3 border-b border-border">
        <h2 className="font-semibold text-foreground">{title}</h2>{action}
      </div>
      <div className="p-5">{children}</div>
    </section>
  );
}

export function ArchiveDashboard() {
  const { role, email } = useArchive();
  return (
    <>
      <h1 className="text-2xl font-semibold text-foreground mb-1">Jobber Archive</h1>
      <p className="text-muted-foreground mb-8">Signed in as {email} ({role}).</p>
      <Panel title="Status">
        <p className="text-sm text-muted-foreground">
          Security, sign-in and the Jobber data export are live{role === "admin" ? " — run it from the Sync page" : ""}. Search (Phase 3) hasn't been built yet.
        </p>
      </Panel>
    </>
  );
}

type JStatus = { state: "connected" | "expired" | "disconnected"; expires_at?: string; last_refreshed?: string; connected_at?: string };
type Scope = Record<string, { ok: boolean; detail?: string; count?: number }>;

export function ArchiveJobberSettings() {
  const [params, setParams] = useSearchParams();
  const [status, setStatus] = useState<JStatus | null>(null);
  const [scopes, setScopes] = useState<Scope | null>(null);
  const [checking, setChecking] = useState(false);

  const load = async () => {
    try { setStatus(await archiveCall<JStatus>({ action: "jobber_status" })); }
    catch (e: any) { toast.error(e.message); }
  };

  const checkScopes = async () => {
    setChecking(true);
    try { setScopes((await archiveCall<{ results: Scope }>({ action: "jobber_scope_check" })).results); }
    catch (e: any) { toast.error(e.message); }
    finally { setChecking(false); }
  };

  useEffect(() => {
    if (params.get("connected") === "true") { toast.success("Jobber connected"); setParams({}, { replace: true }); }
    else if (params.get("error")) { toast.error(`Jobber: ${params.get("error")}`); setParams({}, { replace: true }); }
    load();
  }, []);

  const connect = async () => {
    try { const { url } = await archiveCall<{ url: string }>({ action: "jobber_connect_url" }); window.location.href = url; }
    catch (e: any) { toast.error(e.message); }
  };

  const badge = status?.state === "connected" ? <Badge className="rounded-none">Connected</Badge>
    : status?.state === "expired" ? <Badge variant="destructive" className="rounded-none">Expired</Badge>
    : status ? <Badge variant="secondary" className="rounded-none">Not connected</Badge> : null;

  const missing = scopes ? Object.entries(scopes).filter(([, v]) => !v.ok).map(([k]) => k) : [];

  return (
    <>
      <h1 className="text-2xl font-semibold text-foreground mb-6">Jobber connection</h1>
      <Panel title="Connection" action={badge}>
        {!status ? <Loader2 className="h-4 w-4 animate-spin" /> : (
          <dl className="grid sm:grid-cols-3 gap-4 text-sm mb-5">
            <div><dt className="text-muted-foreground">Connected</dt><dd>{fmt(status.connected_at)}</dd></div>
            <div><dt className="text-muted-foreground">Last refreshed</dt><dd>{fmt(status.last_refreshed)}</dd></div>
            <div><dt className="text-muted-foreground">Access token expires</dt><dd>{fmt(status.expires_at)}</dd></div>
          </dl>
        )}
        <div className="flex flex-wrap gap-2">
          <Button onClick={connect} className="rounded-none"><Plug className="h-4 w-4 mr-2" />{status?.state === "connected" ? "Reconnect Jobber" : "Connect Jobber"}</Button>
          <Button variant="outline" onClick={load} className="rounded-none"><RefreshCw className="h-4 w-4 mr-2" />Refresh status</Button>
        </div>
      </Panel>

      <Panel title="Read access check" action={
        <Button size="sm" variant="outline" disabled={checking || status?.state !== "connected"} onClick={checkScopes} className="rounded-none">
          {checking ? <Loader2 className="h-4 w-4 animate-spin" /> : "Run check"}
        </Button>}>
        {!scopes ? <p className="text-sm text-muted-foreground">Runs a small read against each data type to confirm Jobber gave us access.</p> : (
          <>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm mb-4">
              {Object.entries(scopes).map(([k, v]) => (
                <li key={k} className="flex items-start gap-2">
                  {v.ok ? <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> : <XCircle className="h-4 w-4 text-destructive mt-0.5" />}
                  <span className="capitalize font-medium">{k}</span>
                  <span className="text-muted-foreground">{v.ok ? (v.count != null ? `${v.count.toLocaleString()} records` : "OK") : v.detail}</span>
                </li>
              ))}
            </ul>
            {missing.length > 0 && (
              <p className="text-sm text-destructive">Missing: {missing.join(", ")}. Add these read scopes to the app in the Jobber Developer Center, then click Reconnect.</p>
            )}
          </>
        )}
      </Panel>
    </>
  );
}

type AUser = { user_id: string; email: string; role: "admin" | "viewer"; active: boolean; created_at: string };

export function ArchiveUsers() {
  const [users, setUsers] = useState<AUser[] | null>(null);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"admin" | "viewer">("viewer");
  const [busy, setBusy] = useState(false);

  const load = async () => {
    try { setUsers((await archiveCall<{ users: AUser[] }>({ action: "list_users" })).users); }
    catch (e: any) { toast.error(e.message); }
  };
  useEffect(() => { load(); }, []);

  const invite = async (e: FormEvent) => {
    e.preventDefault(); setBusy(true);
    try {
      const r = await archiveCall<{ existing: boolean }>({ action: "invite_user", email, role });
      toast.success(r.existing ? "Existing account given access" : "Invite email sent");
      setEmail(""); load();
    } catch (e: any) { toast.error(e.message); }
    finally { setBusy(false); }
  };

  const update = async (user_id: string, patch: Partial<AUser>) => {
    try { await archiveCall({ action: "update_user", user_id, ...patch }); load(); }
    catch (e: any) { toast.error(e.message); }
  };

  return (
    <>
      <h1 className="text-2xl font-semibold text-foreground mb-6">Users</h1>
      <Panel title="Invite">
        <form onSubmit={invite} className="flex flex-col sm:flex-row gap-2">
          <Input type="email" required placeholder="name@licoat.com" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-none" />
          <Select value={role} onValueChange={(v) => setRole(v as any)}>
            <SelectTrigger className="sm:w-36 rounded-none"><SelectValue /></SelectTrigger>
            <SelectContent><SelectItem value="viewer">Viewer</SelectItem><SelectItem value="admin">Admin</SelectItem></SelectContent>
          </Select>
          <Button type="submit" disabled={busy} className="rounded-none">{busy ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send invite"}</Button>
        </form>
        <p className="text-xs text-muted-foreground mt-2">Viewers can't see any prices or totals. Everyone must set up an authenticator app.</p>
      </Panel>
      <Panel title="Team">
        {!users ? <Loader2 className="h-4 w-4 animate-spin" /> : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader><TableRow><TableHead>Email</TableHead><TableHead>Role</TableHead><TableHead>Status</TableHead><TableHead /></TableRow></TableHeader>
              <TableBody>
                {users.map((u) => (
                  <TableRow key={u.user_id}>
                    <TableCell>{u.email}</TableCell>
                    <TableCell>
                      <Select value={u.role} onValueChange={(v) => update(u.user_id, { role: v as any })}>
                        <SelectTrigger className="w-28 h-8 rounded-none"><SelectValue /></SelectTrigger>
                        <SelectContent><SelectItem value="viewer">Viewer</SelectItem><SelectItem value="admin">Admin</SelectItem></SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>{u.active ? <Badge className="rounded-none">Active</Badge> : <Badge variant="secondary" className="rounded-none">Deactivated</Badge>}</TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="outline" className="rounded-none" onClick={() => update(u.user_id, { active: !u.active })}>
                        {u.active ? "Deactivate" : "Reactivate"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </Panel>
    </>
  );
}

type Log = { id: string; created_at: string; user_email: string | null; action: string; record_type: string | null; record_id: string | null; ip: string | null };

export function ArchiveAudit() {
  const [rows, setRows] = useState<Log[] | null>(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    (async () => {
      const { data, error } = await (supabase as any).from("audit_log").select("*").order("created_at", { ascending: false }).limit(500);
      if (error) toast.error(error.message);
      setRows(data ?? []);
    })();
  }, []);

  const shown = (rows ?? []).filter((r) => !filter || `${r.user_email} ${r.action} ${r.record_id}`.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <h1 className="text-2xl font-semibold text-foreground mb-6">Audit log</h1>
      <Input placeholder="Filter by user, action or record" value={filter} onChange={(e) => setFilter(e.target.value)} className="mb-4 rounded-none max-w-sm" />
      <div className="bg-background border border-border overflow-x-auto">
        {!rows ? <div className="p-5"><Loader2 className="h-4 w-4 animate-spin" /></div> : (
          <Table>
            <TableHeader><TableRow><TableHead>When</TableHead><TableHead>User</TableHead><TableHead>Action</TableHead><TableHead>Record</TableHead><TableHead>IP</TableHead></TableRow></TableHeader>
            <TableBody>
              {shown.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="whitespace-nowrap">{fmt(r.created_at)}</TableCell>
                  <TableCell>{r.user_email ?? "—"}</TableCell>
                  <TableCell><span className="font-mono text-xs">{r.action}</span></TableCell>
                  <TableCell className="text-xs">{r.record_type ? `${r.record_type}: ${r.record_id}` : "—"}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{r.ip ?? "—"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </>
  );
}
