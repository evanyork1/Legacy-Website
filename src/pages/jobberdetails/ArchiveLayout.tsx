import { Navigate, NavLink, Outlet } from "react-router-dom";
import { Loader2, LogOut, Lock } from "lucide-react";
import { useArchive, useNoIndex } from "./archiveSession";

export default function ArchiveLayout() {
  useNoIndex();
  const { stage, role, email, signOut } = useArchive();

  if (stage === "loading") {
    return <div className="min-h-screen bg-slate-950 flex items-center justify-center"><Loader2 className="h-6 w-6 animate-spin text-slate-400" /></div>;
  }
  if (stage !== "ready") return <Navigate to="/jobberdetails" replace />;

  const links = [
    { to: "/jobberdetails/dashboard", label: "Dashboard" },
    ...(role === "admin"
      ? [
          { to: "/jobberdetails/settings", label: "Jobber" },
          { to: "/jobberdetails/users", label: "Users" },
          { to: "/jobberdetails/audit", label: "Audit log" },
        ]
      : []),
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-slate-950 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-6">
          <div className="flex items-center gap-2 text-slate-50 font-semibold text-sm whitespace-nowrap">
            <Lock className="h-4 w-4" /> Jobber Archive
          </div>
          <nav className="flex gap-1 overflow-x-auto flex-1">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to}
                className={({ isActive }) => `px-3 py-1.5 text-sm whitespace-nowrap ${isActive ? "bg-slate-800 text-slate-50" : "text-slate-400 hover:text-slate-100"}`}>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <span className="hidden md:inline text-xs text-slate-500">{email} · {role}</span>
          <button onClick={() => signOut()} aria-label="Sign out" className="text-slate-400 hover:text-slate-50"><LogOut className="h-4 w-4" /></button>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8"><Outlet /></main>
    </div>
  );
}

export function AdminOnly({ children }: { children: React.ReactNode }) {
  const { role } = useArchive();
  if (role !== "admin") return <Navigate to="/jobberdetails/dashboard" replace />;
  return <>{children}</>;
}
