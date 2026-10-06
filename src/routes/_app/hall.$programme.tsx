import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { levels, programmeById, topicsFor, type Level, type ProgrammeId } from "@/content";
import { cn } from "@/lib/cn";
import { bestAttempt, useProgress } from "@/lib/progress";

export const Route = createFileRoute("/_app/hall/$programme")({
  head: ({ params }) => ({
    meta: [{ title: `${programmeById(params.programme)?.title ?? "Programme"} · Clinicfolio` }],
  }),
  component: HallPage,
});

function isProgramme(value: string): value is ProgrammeId {
  return value === "medicine" || value === "physiotherapy" || value === "pharmacy";
}

function HallPage() {
  const { programme } = Route.useParams();
  const attempts = useProgress((state) => state.attempts);
  const [level, setLevel] = useState<Level>(100);

  if (!isProgramme(programme)) {
    return (
      <div>
        <h1 className="font-display text-4xl">That programme is not in the hall.</h1>
        <Link to="/" className="mt-4 inline-flex text-teal">
          Back
        </Link>
      </div>
    );
  }

  const info = programmeById(programme)!;
  const list = topicsFor(programme, level);

  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-sm text-muted">{info.campus}</p>
      <h1 className="mt-1 font-display text-4xl">{info.title}</h1>
      <p className="mt-2 text-muted">{info.blurb}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {levels.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setLevel(item)}
            className={cn(
              "min-h-11 rounded-full px-4 text-sm font-medium tabular-nums",
              level === item ? "bg-ink text-card" : "bg-card shadow-card",
            )}
          >
            {item} level
          </button>
        ))}
      </div>
      <ul className="mt-6 divide-y divide-line rounded-lg bg-card shadow-card">
        {list.map((topic) => {
          const best = bestAttempt(attempts, topic.id);
          return (
            <li key={topic.id}>
              <Link to="/topic/$topicId" params={{ topicId: topic.id }} className="flex min-h-16 items-center justify-between gap-3 px-4 py-3">
                <span>
                  <span className="block text-xs font-medium text-clay">{topic.code}</span>
                  <span className="block font-medium">{topic.title}</span>
                  <span className="block text-sm text-muted">
                    {topic.questions.length} questions · {topic.cards.length} cards
                    {best ? ` · best ${best.score}/${best.total}` : ""}
                  </span>
                </span>
                <span className="text-sm font-medium text-teal">Open</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
