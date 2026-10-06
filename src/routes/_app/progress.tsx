import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { programmes, topicMap, topics, topicsFor } from "@/content";
import { OWNER } from "@/content/owner";
import { bestAttempt, dayKey, streakFrom, useProgress } from "@/lib/progress";

export const Route = createFileRoute("/_app/progress")({
  head: () => ({ meta: [{ title: "Scores · Clinicfolio" }] }),
  component: ProgressPage,
});

function ProgressPage() {
  const firstName = useProgress((state) => state.firstName);
  const attempts = useProgress((state) => state.attempts);
  const signOut = useProgress((state) => state.signOut);
  const resetScores = useProgress((state) => state.resetScores);
  const [armed, setArmed] = useState(false);
  const streak = streakFrom(attempts.map((attempt) => dayKey(attempt.at)));
  const sat = new Set(attempts.map((attempt) => attempt.assessId)).size;

  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-sm text-muted">Signed in as</p>
      <h1 className="mt-1 font-display text-4xl">{firstName}</h1>
      <p className="mt-2 text-muted">Scores stay in this browser. Clearing the browser clears the desk.</p>

      <p className="mt-6 text-sm text-muted">
        Streak <span className="font-medium tabular-nums text-ink">{streak}</span> day{streak === 1 ? "" : "s"}
        {" · "}
        <span className="font-medium tabular-nums text-ink">{sat}</span> topics sat
        {" · "}
        <span className="font-medium tabular-nums text-ink">{attempts.length}</span> papers
      </p>

      <div className="mt-4 space-y-4">
        {programmes.map((programme) => {
          const list = topicsFor(programme.id);
          const done = list.filter((topic) => attempts.some((attempt) => attempt.assessId === topic.id)).length;
          return (
            <div key={programme.id} className="rounded-lg bg-card p-4 shadow-card">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-display text-2xl">{programme.title}</h2>
                <span className="tabular-nums text-sm">
                  {done}/{list.length}
                </span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-paper-2">
                <div className="h-full bg-teal" style={{ width: `${list.length ? (done / list.length) * 100 : 0}%` }} />
              </div>
              <ul className="mt-3 space-y-1">
                {list
                  .map((topic) => ({ topic, best: bestAttempt(attempts, topic.id) }))
                  .filter((row) => row.best)
                  .slice(0, 4)
                  .map((row) => (
                    <li key={row.topic.id} className="flex items-center justify-between gap-3 text-sm">
                      <Link to="/topic/$topicId" params={{ topicId: row.topic.id }} className="text-teal">
                        {row.topic.code} {row.topic.title}
                      </Link>
                      <span className="tabular-nums">
                        {row.best!.score}/{row.best!.total}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          );
        })}
      </div>

      <section className="mt-8">
        <h2 className="font-display text-2xl">Recent papers</h2>
        {attempts.length === 0 ? (
          <p className="mt-2 text-sm text-muted">No papers yet. Open a topic, read the summary, then sit the test.</p>
        ) : (
          <ul className="mt-3 divide-y divide-line rounded-lg bg-card shadow-card">
            {attempts.slice(0, 8).map((attempt) => {
              const topic = topicMap.get(attempt.assessId);
              return (
                <li key={`${attempt.assessId}-${attempt.at}`} className="flex items-center justify-between gap-3 px-4 py-3 text-sm">
                  {topic ? (
                    <Link to="/topic/$topicId" params={{ topicId: topic.id }}>
                      {topic.code} · {topic.title}
                    </Link>
                  ) : (
                    <span>{attempt.assessId}</span>
                  )}
                  <span className="tabular-nums">
                    {attempt.score}/{attempt.total}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      <a
        href={OWNER.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-8 flex items-center gap-3 rounded-lg bg-card p-4 shadow-card"
      >
        <img src={OWNER.avatar} alt="" className="size-12 rounded-full object-cover" />
        <span>
          <span className="block text-sm text-muted">GitHub linked to this hall</span>
          <span className="block font-medium">{OWNER.github}</span>
        </span>
      </a>

      <p className="mt-4 text-sm text-muted">{topics.length} topics on the revision map.</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <button type="button" onClick={() => signOut()} className="min-h-11 rounded-md bg-ink px-4 text-sm font-medium text-card">
          Sign out
        </button>
        {armed ? (
          <>
            <button
              type="button"
              onClick={() => {
                resetScores();
                setArmed(false);
              }}
              className="min-h-11 rounded-md bg-clay px-4 text-sm font-medium text-card"
            >
              Yes, clear scores
            </button>
            <button type="button" onClick={() => setArmed(false)} className="min-h-11 rounded-md bg-paper-2 px-4 text-sm">
              Keep scores
            </button>
          </>
        ) : (
          <button type="button" onClick={() => setArmed(true)} className="min-h-11 text-sm text-muted">
            Clear scores on this device
          </button>
        )}
      </div>
    </div>
  );
}
