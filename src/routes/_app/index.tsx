import { createFileRoute, Link } from "@tanstack/react-router";
import { programmes, topics } from "@/content";
import { greeting, useProgress } from "@/lib/progress";

export const Route = createFileRoute("/_app/")({
  head: () => ({ meta: [{ title: "Test hall · Clinicfolio" }] }),
  component: HallHome,
});

function HallHome() {
  const name = useProgress((state) => state.firstName);
  const attempts = useProgress((state) => state.attempts);

  return (
    <div className="mx-auto max-w-5xl">
      <p className="text-sm text-muted">Lagos State University · College of Medicine</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">{greeting(name)}</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        Pick a programme. Read the summary, then sit the test. After you choose an option, the answer and the
        reason appear — even when you are right.
      </p>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        Revision map for LASUCOM, Ikeja, and the Faculty of Pharmacy, 100 to 500 level. Study labels, not a
        reprint of the official handbook.
      </p>
      <p className="mt-2 text-sm tabular-nums text-muted">
        {topics.length} topics · {topics.reduce((sum, item) => sum + item.questions.length, 0)} questions ·{" "}
        {attempts.length} papers sat
      </p>
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {programmes.map((programme) => {
          const count = topics.filter((item) => item.programme === programme.id).length;
          return (
            <Link
              key={programme.id}
              to="/hall/$programme"
              params={{ programme: programme.id }}
              className="overflow-hidden rounded-lg bg-card shadow-card"
            >
              <img src={programme.image} alt={programme.imageAlt} className="aspect-video w-full object-cover" />
              <div className="p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-clay">{programme.campus}</p>
                <h2 className="mt-1 font-display text-2xl">{programme.title}</h2>
                <p className="mt-2 text-sm text-muted">{programme.blurb}</p>
                <p className="mt-3 text-sm tabular-nums">{count} topics · 100 to 500 level</p>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
