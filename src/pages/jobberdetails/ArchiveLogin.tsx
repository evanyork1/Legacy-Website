import { useEffect, useState, FormEvent } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, ShieldCheck, Lock } from "lucide-react";
import { useArchive, useNoIndex } from "./archiveSession";

function Shell({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm border border-slate-800 bg-slate-900 p-8">
        <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-widest mb-6">
          <Lock className="h-3.5 w-3.5" /> Private archive
        </div>
        <h1 className="text-2xl font-semibold text-slate-50 mb-1">{title}</h1>
        {subtitle && <p className="text-sm text-slate-400 mb-6">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}

function PasswordStep() {
  const { refresh } = useArchive();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true); setErr(null);
    try {
      const { data, error } = await supabase.functions.invoke("archive-login", {
        body: { action: "login", email, password },
      });
      if (error) {
        let msg = "Sign-in failed";
        try { msg = (await (error as any).context.json()).error || msg; } catch { /* ignore */ }
        throw new Error(msg);
      }
      await supabase.auth.setSession({ access_token: data.access_token, refresh_token: data.refresh_token });
      await refresh();
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Shell title="Sign in" subtitle="Authorized team members only.">
      <form onSubmit={submit} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-slate-300">Email</Label>
          <Input id="email" type="email" autoComplete="username" required value={email} onChange={(e) => setEmail(e.target.value)} className="bg-slate-950 border-slate-700 text-slate-50" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="password" className="text-slate-300">Password</Label>
          <Input id="password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="bg-slate-950 border-slate-700 text-slate-50" />
        </div>
        {err && <p className="text-sm text-red-400">{err}</p>}
        <Button type="submit" disabled={busy} className="w-full rounded-none">
          {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : "Continue"}
        </Button>
      </form>
    </Shell>
  );
}

function CodeInput({ onSubmit, busy }: { onSubmit: (code: string) => void; busy: boolean }) {
  const [code, setCode] = useState("");
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(code); }} className="space-y-4">
      <Input inputMode="numeric" autoComplete="one-time-code" maxLength={6} placeholder="6-digit code" value={code}
        onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
        className="bg-slate-950 border-slate-700 text-slate-50 text-center text-xl tracking-[0.5em]" autoFocus />
      <Button type="submit" disabled={busy || code.length !== 6} className="w-full rounded-none">
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : "Verify"}
      </Button>
    </form>
  );
}

async function logMfa() {
  await supabase.functions.invoke("archive-login", { body: { action: "log_mfa" } }).catch(() => {});
}

function EnrollStep() {
  const { refresh, signOut } = useArchive();
  const [factor, setFactor] = useState<{ id: string; qr: string; secret: string } | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data: list } = await supabase.auth.mfa.listFactors();
      for (const f of list?.all ?? []) {
        if (f.status !== "verified") await supabase.auth.mfa.unenroll({ factorId: f.id });
      }
      const { data, error } = await supabase.auth.mfa.enroll({ factorType: "totp", friendlyName: `Archive ${Date.now()}` });
      if (error) { setErr(error.message); return; }
      setFactor({ id: data.id, qr: data.totp.qr_code, secret: data.totp.secret });
    })();
  }, []);

  const verify = async (code: string) => {
    if (!factor) return;
    setBusy(true); setErr(null);
    const { error } = await supabase.auth.mfa.challengeAndVerify({ factorId: factor.id, code });
    setBusy(false);
    if (error) { setErr("Code didn't match. Try the newest code."); return; }
    await logMfa();
    await refresh();
  };

  return (
    <Shell title="Set up authenticator" subtitle="Scan with Google Authenticator, 1Password, Authy or similar. Required for every user.">
      {factor ? (
        <div className="space-y-4">
          <div className="bg-slate-50 p-3 flex justify-center"><img src={factor.qr} alt="Authenticator QR code" className="h-44 w-44" /></div>
          <p className="text-xs text-slate-400 break-all">Manual key: <span className="font-mono text-slate-300">{factor.secret}</span></p>
          <CodeInput onSubmit={verify} busy={busy} />
        </div>
      ) : !err && <Loader2 className="h-5 w-5 animate-spin text-slate-400" />}
      {err && <p className="text-sm text-red-400 mt-3">{err}</p>}
      <button onClick={() => signOut()} className="mt-6 text-xs text-slate-500 hover:text-slate-300">Sign out</button>
    </Shell>
  );
}

function VerifyStep() {
  const { refresh, signOut } = useArchive();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const verify = async (code: string) => {
    setBusy(true); setErr(null);
    const { data } = await supabase.auth.mfa.listFactors();
    const f = data?.totp?.find((x) => x.status === "verified");
    if (!f) { setBusy(false); setErr("No authenticator found"); return; }
    const { error } = await supabase.auth.mfa.challengeAndVerify({ factorId: f.id, code });
    setBusy(false);
    if (error) { setErr("Code didn't match. Try the newest code."); return; }
    await logMfa();
    await refresh();
  };

  return (
    <Shell title="Two-step verification" subtitle="Enter the 6-digit code from your authenticator app.">
      <CodeInput onSubmit={verify} busy={busy} />
      {err && <p className="text-sm text-red-400 mt-3">{err}</p>}
      <button onClick={() => signOut()} className="mt-6 text-xs text-slate-500 hover:text-slate-300">Sign out</button>
    </Shell>
  );
}

export default function ArchiveLogin() {
  useNoIndex();
  const { stage, signOut } = useArchive();
  if (stage === "loading") return <div className="min-h-screen bg-slate-950 flex items-center justify-center"><Loader2 className="h-6 w-6 animate-spin text-slate-400" /></div>;
  if (stage === "ready") return <Navigate to="/jobberdetails/dashboard" replace />;
  if (stage === "needs_enroll") return <EnrollStep />;
  if (stage === "needs_verify") return <VerifyStep />;
  if (stage === "denied") return (
    <Shell title="No access" subtitle="This account isn't authorized for the archive. Ask an admin to invite you.">
      <Button onClick={() => signOut()} variant="outline" className="w-full rounded-none">Sign out</Button>
    </Shell>
  );
  return <PasswordStep />;
}

export function SetPassword() {
  useNoIndex();
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [hasSession, setHasSession] = useState<boolean | null>(null);

  useEffect(() => {
    const t = setTimeout(async () => {
      const { data } = await supabase.auth.getSession();
      setHasSession(!!data.session);
    }, 800);
    return () => clearTimeout(t);
  }, []);

  const save = async (e: FormEvent) => {
    e.preventDefault();
    if (pw.length < 12) return setMsg("Use at least 12 characters.");
    if (pw !== pw2) return setMsg("Passwords don't match.");
    const { error } = await supabase.auth.updateUser({ password: pw });
    if (error) return setMsg(error.message);
    await supabase.auth.signOut();
    setDone(true);
  };

  if (done) return <Shell title="Password set" subtitle="Sign in to finish setting up your authenticator."><Button asChild className="w-full rounded-none"><a href="/jobberdetails">Go to sign in</a></Button></Shell>;
  if (hasSession === false) return <Shell title="Link expired" subtitle="Ask an admin to resend your invite." ><span /></Shell>;

  return (
    <Shell title="Create your password" subtitle="Minimum 12 characters.">
      <form onSubmit={save} className="space-y-4">
        <Input type="password" autoComplete="new-password" placeholder="New password" value={pw} onChange={(e) => setPw(e.target.value)} className="bg-slate-950 border-slate-700 text-slate-50" />
        <Input type="password" autoComplete="new-password" placeholder="Confirm password" value={pw2} onChange={(e) => setPw2(e.target.value)} className="bg-slate-950 border-slate-700 text-slate-50" />
        {msg && <p className="text-sm text-red-400">{msg}</p>}
        <Button type="submit" className="w-full rounded-none"><ShieldCheck className="h-4 w-4 mr-2" />Save password</Button>
      </form>
    </Shell>
  );
}
