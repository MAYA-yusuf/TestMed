import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, House, Search, Stethoscope, X } from "lucide-react";
import { SignIn } from "@/components/sign-in";
import { searchTopics } from "@/content";
import { cn } from "@/lib/cn";
import { hydrateProgress, useProgress } from "@/lib/progress";

const nav = [
  { to: "/", label: "Hall", icon: House },
  { to: "/cards", label: "Cards", icon: BookOpen },
  { to: "/progress", label: "Scores", icon: Stethoscope },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const signedIn = useProgress((state) => state.signedIn);
  const firstName = useProgress((state) => state.firstName);
  const signOut = useProgress((state) => state.signOut);
  const [ready, setReady] = useState(false);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const hits = searchTopics(query);

  useEffect(() => {
    hydrateProgress();
    setReady(true);
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "/" && !(event.target instanceof HTMLInputElement) && !(event.target instanceof HTMLTextAreaElement)) {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!ready) return <main className="min-h-screen bg-paper" />;
  if (!signedIn) return <SignIn />;

  return (
    <div className="min-h-screen bg-paper text-ink">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r border-line bg-card px-4 py-6 md:flex">
        <Link to="/" className="px-2">
          <p className="font-display text-2xl">Clinicfolio</p>
          <p className="text-sm text-muted">Test hall · {firstName}</p>
        </Link>
        <nav className="mt-8 flex flex-col gap-1">
          {nav.map((item) => {
            const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex min-h-11 items-center gap-3 rounded-md px-3 text-sm font-medium",
                  active ? "bg-teal text-card" : "text-ink hover:bg-paper",
                )}
              >
                <Icon className="size-4" aria-hidden />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button type="button" onClick={() => signOut()} className="mt-auto min-h-11 px-3 text-left text-sm text-muted">
          Sign out
        </button>
      </aside>

      <div className="md:pl-60">
        <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-line bg-paper/95 px-4 py-3 backdrop-blur md:px-8">
          <Link to="/" className="font-display text-xl md:hidden">
            Clinicfolio
          </Link>
          <p className="hidden text-sm text-muted md:block">Medicine · Physiotherapy · Pharmacy · 100–500</p>
          <p className="text-sm font-medium md:hidden">{firstName}</p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-card px-3 text-sm shadow-card"
          >
            <Search className="size-4" aria-hidden />
            Search
          </button>
        </header>
        <main className="px-4 pb-28 pt-6 md:px-8 md:pb-16 md:pt-8">{children}</main>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-30 flex border-t border-line bg-card md:hidden">
        {nav.map((item) => {
          const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "flex min-h-14 flex-1 flex-col items-center justify-center gap-0.5 text-xs font-medium",
                active ? "text-teal" : "text-muted",
              )}
            >
              <Icon className="size-5" aria-hidden />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {open ? (
        <div className="fixed inset-0 z-40 bg-ink/40 p-4" onClick={() => setOpen(false)}>
          <div
            className="mx-auto mt-12 max-w-lg rounded-lg bg-card p-4 shadow-card"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-label="Search topics"
          >
            <div className="flex items-center gap-2">
              <Search className="size-4 text-muted" aria-hidden />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Topic, code, or term"
                className="min-h-11 flex-1 bg-transparent text-base outline-none"
              />
              <button type="button" onClick={() => setOpen(false)} className="min-h-11 min-w-11" aria-label="Close search">
                <X className="mx-auto size-4" />
              </button>
            </div>
            <ul className="mt-3 max-h-80 space-y-1 overflow-auto">
              {query.trim() && hits.length === 0 ? <li className="px-2 py-3 text-sm text-muted">Nothing matches yet.</li> : null}
              {hits.map((item) => (
                <li key={item.id}>
                  <Link
                    to="/topic/$topicId"
                    params={{ topicId: item.id }}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-3 hover:bg-paper"
                  >
                    <span className="block font-medium">
                      {item.code} · {item.title}
                    </span>
                    <span className="block text-sm text-muted">
                      {item.level} level
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
