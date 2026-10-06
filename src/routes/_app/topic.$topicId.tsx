import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { programmeById, topicMap } from "@/content";
import { cn } from "@/lib/cn";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/_app/topic/$topicId")({
  head: ({ params }) => ({
    meta: [{ title: `${topicMap.get(params.topicId)?.title ?? "Topic"} · Clinicfolio` }],
  }),
  component: TopicPage,
});

function TopicPage() {
  const { topicId } = Route.useParams();
  const topic = topicMap.get(topicId);
  const [mode, setMode] = useState<"read" | "test" | "cards">("read");

  if (!topic) {
    return (
      <div>
        <h1 className="font-display text-4xl">That topic is not on the list.</h1>
        <Link to="/" className="mt-4 inline-flex text-teal">
          Back to the hall
        </Link>
      </div>
    );
  }

  const programme = programmeById(topic.programme);

  return (
    <article className="mx-auto max-w-3xl">
      <p className="text-sm text-muted">
        <Link to="/hall/$programme" params={{ programme: topic.programme }} className="hover:underline">
          {programme?.title}
        </Link>
        {` · ${topic.level} level · ${topic.code}`}
      </p>
      <h1 className="mt-2 font-display text-4xl">{topic.title}</h1>
      <p className="mt-2 text-sm tabular-nums text-muted">
        {topic.questions.length} questions · {topic.cards.length} cards
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Tab active={mode === "read"} label="Summary" onClick={() => setMode("read")} />
        <Tab active={mode === "test"} label="Test" onClick={() => setMode("test")} />
        <Tab active={mode === "cards"} label="Cards" onClick={() => setMode("cards")} />
      </div>
      {mode === "read" ? <Summary topicId={topic.id} onStart={() => setMode("test")} /> : null}
      {mode === "test" ? <Test key={topic.id} topicId={topic.id} /> : null}
      {mode === "cards" ? <Cards topicId={topic.id} /> : null}
    </article>
  );
}

function Tab({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn("min-h-11 rounded-full px-4 text-sm font-medium", active ? "bg-teal text-card" : "bg-card shadow-card")}
    >
      {label}
    </button>
  );
}

function Summary({ topicId, onStart }: { topicId: string; onStart: () => void }) {
  const topic = topicMap.get(topicId)!;
  return (
    <div className="mt-6">
      {topic.summary.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="mt-3 leading-relaxed">
          {paragraph}
        </p>
      ))}
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
        {topic.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <button type="button" onClick={onStart} className="mt-6 min-h-12 rounded-md bg-teal px-5 font-medium text-card">
        I have read it. Start the test
      </button>
    </div>
  );
}

function Test({ topicId }: { topicId: string }) {
  const topic = topicMap.get(topicId)!;
  const recordAttempt = useProgress((state) => state.recordAttempt);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [picks, setPicks] = useState<number[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [done, setDone] = useState(false);
  const question = topic.questions[index];

  if (done || !question) {
    const missed = topic.questions
      .map((item, itemIndex) => ({ item, pick: picks[itemIndex] }))
      .filter((row) => row.pick !== row.item.answer);
    return (
      <section className="mt-6">
        <h2 className="font-display text-3xl">
          {correctCount} / {topic.questions.length}
        </h2>
        <p className="mt-2 text-muted">Saved on this device. The reason was shown on every question, right or wrong.</p>
        {missed.length ? (
          <ul className="mt-4 space-y-3">
            {missed.map((row) => (
              <li key={row.item.prompt} className="rounded-lg bg-card p-4 text-sm shadow-card">
                <p className="font-medium">{row.item.prompt}</p>
                <p className="mt-2 text-clay">Answer: {row.item.choices[row.item.answer]}</p>
                <p className="mt-1">{row.item.why}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm">Clean paper. Sit it again if you want the reasons to stick.</p>
        )}
        <button
          type="button"
          className="mt-4 min-h-11 rounded-md bg-ink px-4 text-sm font-medium text-card"
          onClick={() => {
            setIndex(0);
            setPicked(null);
            setPicks([]);
            setCorrectCount(0);
            setDone(false);
          }}
        >
          Sit it again
        </button>
      </section>
    );
  }

  const revealed = picked !== null;
  const right = picked === question.answer;

  function choose(choice: number) {
    if (revealed) return;
    setPicked(choice);
    setPicks((previous) => [...previous, choice]);
    if (choice === question.answer) setCorrectCount((value) => value + 1);
  }

  function next() {
    if (index + 1 >= topic.questions.length) {
      recordAttempt({
        assessId: topic.id,
        score: correctCount,
        total: topic.questions.length,
        at: Date.now(),
        kind: "test",
      });
      setDone(true);
      return;
    }
    setIndex((value) => value + 1);
    setPicked(null);
  }

  return (
    <section className="mt-6">
      <p className="text-sm tabular-nums text-muted">
        Question {index + 1} of {topic.questions.length}
      </p>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-paper-2">
        <div className="h-full bg-teal" style={{ width: `${(index / topic.questions.length) * 100}%` }} />
      </div>
      <h2 className="mt-4 font-display text-3xl">{question.prompt}</h2>
      <div className="mt-4 space-y-2">
        {question.choices.map((choice, choiceIndex) => {
          const selected = picked === choiceIndex;
          const isAnswer = choiceIndex === question.answer;
          return (
            <button
              key={choice}
              type="button"
              onClick={() => choose(choiceIndex)}
              className={cn(
                "flex min-h-12 w-full items-start gap-3 rounded-md px-4 py-3 text-left",
                !revealed && "bg-card shadow-card",
                revealed && isAnswer && "bg-teal text-card",
                revealed && selected && !isAnswer && "bg-clay text-card",
                revealed && !selected && !isAnswer && "bg-card text-muted shadow-card",
              )}
            >
              <span className="tabular-nums text-sm opacity-70">{choiceIndex + 1}</span>
              <span>{choice}</span>
            </button>
          );
        })}
      </div>
      {revealed ? (
        <div className="mt-4 rounded-lg bg-card p-4 shadow-card">
          <p className={cn("text-sm font-medium", right ? "text-teal-deep" : "text-clay")}>
            {right ? "Correct." : `Not this one. The answer is: ${question.choices[question.answer]}`}
          </p>
          <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted">Reason</p>
          <p className="mt-1 text-sm">{question.why}</p>
          <button type="button" onClick={next} className="mt-4 min-h-11 rounded-md bg-ink px-4 text-sm font-medium text-card">
            {index + 1 === topic.questions.length ? "See score" : "Next question"}
          </button>
        </div>
      ) : (
        <p className="mt-3 text-sm text-muted">Choose an option. The reason shows after you choose, even if you are right.</p>
      )}
    </section>
  );
}

function Cards({ topicId }: { topicId: string }) {
  const topic = topicMap.get(topicId)!;
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const card = topic.cards[index];
  if (!card) return null;
  return (
    <div className="mt-6">
      <p className="text-sm tabular-nums text-muted">
        Card {index + 1} of {topic.cards.length}
      </p>
      <button
        type="button"
        onClick={() => setShow((value) => !value)}
        className="mt-3 min-h-48 w-full rounded-lg bg-card p-6 text-left shadow-card"
      >
        <p className="text-xs font-medium uppercase tracking-wide text-clay">{show ? "Meaning" : "Term"}</p>
        <p className="mt-3 font-display text-3xl">{show ? card.meaning : card.term}</p>
      </button>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="min-h-11 rounded-md bg-paper-2 px-4 text-sm"
          onClick={() => {
            setShow(false);
            setIndex((value) => (value + topic.cards.length - 1) % topic.cards.length);
          }}
        >
          Previous
        </button>
        <button
          type="button"
          className="min-h-11 rounded-md bg-teal px-4 text-sm font-medium text-card"
          onClick={() => {
            setShow(false);
            setIndex((value) => (value + 1) % topic.cards.length);
          }}
        >
          Next card
        </button>
      </div>
    </div>
  );
}
