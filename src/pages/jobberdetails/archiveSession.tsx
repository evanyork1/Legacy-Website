import { createContext, useCallback, useContext, useEffect, useRef, useState, ReactNode } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export type ArchiveRole = "admin" | "viewer";
export type ArchiveStage = "loading" | "signed_out" | "needs_enroll" | "needs_verify" | "denied" | "ready";

interface Ctx {
  stage: ArchiveStage;
  session: Session | null;
  role: ArchiveRole | null;
  email: string | null;
  refresh: () => Promise<void>;
  signOut: (reason?: "logout" | "idle_logout") => Promise<void>;
}

const ArchiveCtx = createContext<Ctx | null>(null);
const IDLE_MS = 30 * 60 * 1000;

export async function archiveCall<T = any>(body: Record<string, unknown>): Promise<T> {
  const { data, error } = await supabase.functions.invoke("archive-admin", { body });
  if (error) {
    let msg = error.message;
    try {
      const ctx = (error as any).context;
      if (ctx?.json) msg = (await ctx.json()).error || msg;
    } catch { /* ignore */ }
    throw new Error(msg);
  }
  return data as T;
}

export function useNoIndex() {
  useEffect(() => {
    const removed = Array.from(document.querySelectorAll('meta[name="robots"]'));
    removed.forEach((m) => m.parentNode?.removeChild(m));
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    const prevTitle = document.title;
    document.title = "Jobber Archive";
    return () => {
      meta.remove();
      removed.forEach((m) => document.head.appendChild(m));
      document.title = prevTitle;
    };
  }, []);
}

export function ArchiveSessionProvider({ children }: { children: ReactNode }) {
  const [stage, setStage] = useState<ArchiveStage>("loading");
  const [session, setSession] = useState<Session | null>(null);
  const [role, setRole] = useState<ArchiveRole | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const evaluating = useRef(false);

  const evaluate = useCallback(async (s: Session | null) => {
    setSession(s);
    if (!s) { setStage("signed_out"); setRole(null); return; }
    if (evaluating.current) return;
    evaluating.current = true;
    try {
      const { data: aal } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
      if (aal?.currentLevel !== "aal2") {
        const { data: factors } = await supabase.auth.mfa.listFactors();
        const verified = factors?.totp?.filter((f) => f.status === "verified") ?? [];
        setStage(verified.length ? "needs_verify" : "needs_enroll");
        return;
      }
      try {
        const me = await archiveCall<{ role: ArchiveRole; email: string }>({ action: "whoami" });
        setRole(me.role); setEmail(me.email); setStage("ready");
      } catch {
        setStage("denied");
      }
    } finally {
      evaluating.current = false;
    }
  }, []);

  const refresh = useCallback(async () => {
    const { data } = await supabase.auth.getSession();
    await evaluate(data.session);
  }, [evaluate]);

  const signOut = useCallback(async (reason: "logout" | "idle_logout" = "logout") => {
    try { if (stage === "ready") await archiveCall({ action: "log", event: reason }); } catch { /* ignore */ }
    await supabase.auth.signOut();
    setStage("signed_out"); setRole(null); setSession(null);
  }, [stage]);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((event, s) => {
      if (event === "SIGNED_OUT") { setSession(null); setStage("signed_out"); setRole(null); }
      else if (event === "TOKEN_REFRESHED") setSession(s);
    });
    refresh();
    return () => sub.subscription.unsubscribe();
  }, [refresh]);

  // Auto sign-out after 30 min idle (shared across tabs via localStorage)
  useEffect(() => {
    if (!session) return;
    const KEY = "jobber_archive_last_activity";
    const bump = () => localStorage.setItem(KEY, String(Date.now()));
    bump();
    const events = ["pointerdown", "keydown", "scroll", "touchstart", "mousemove"];
    let last = 0;
    const onAct = () => { const n = Date.now(); if (n - last > 15000) { last = n; bump(); } };
    events.forEach((e) => window.addEventListener(e, onAct, { passive: true }));
    const iv = setInterval(() => {
      const t = Number(localStorage.getItem(KEY) || Date.now());
      if (Date.now() - t > IDLE_MS) signOut("idle_logout");
    }, 30000);
    return () => { events.forEach((e) => window.removeEventListener(e, onAct)); clearInterval(iv); };
  }, [session, signOut]);

  return (
    <ArchiveCtx.Provider value={{ stage, session, role, email, refresh, signOut }}>
      {children}
    </ArchiveCtx.Provider>
  );
}

export function useArchive() {
  const c = useContext(ArchiveCtx);
  if (!c) throw new Error("useArchive outside provider");
  return c;
}
