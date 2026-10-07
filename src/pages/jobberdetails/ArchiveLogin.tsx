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

export default function ArchiveLogin() {
  useNoIndex();
  const { stage, signOut } = useArchive();
  if (stage === "loading") return <div className="min-h-screen bg-slate-950 flex items-center justify-center"><Loader2 className="h-6 w-6 animate-spin text-slate-400" /></div>;
  if (stage === "ready") return <Navigate to="/jobberdetails/dashboard" replace />;
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

  if (done) return <Shell title="Password set" subtitle="You can now sign in."><Button asChild className="w-full rounded-none"><a href="/jobberdetails">Go to sign in</a></Button></Shell>;
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
