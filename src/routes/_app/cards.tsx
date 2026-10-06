import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { flashcards, levels, programmes, type Level, type ProgrammeId } from "@/content";
import { cn } from "@/lib/cn";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/_app/cards")({
  head: () => ({ meta: [{ title: "Cards · Clinicfolio" }] }),
  component: CardsPage,
});

function CardsPage() {
  const [programme, setProgramme] = useState<ProgrammeId | "all">("all");
  const [level, setLevel] = useState<Level | "all">("all");
  const [cursor, setCursor] = useState(0);
  const [show, setShow] = useState(false);
  const cardState = useProgress((state) => state.cards);
  const gradeCard = useProgress((state) => state.gradeCard);

  const queue = useMemo(() => {
    const now = Date.now();
    const pool = flashcards.filter(
      (card) =>
        (programme === "all" || card.programme === programme) && (level === "all" || card.level === level),
    );
    const due = pool.filter((card) => cardState[card.id] && cardState[card.id]!.due <= now);
    const fresh = pool.filter((card) => !cardState[card.id]);
    const pile = due.length ? due : fresh.length ? fresh : pool;
    return pile.slice(0, 24);
  }, [programme, level, cardState]);

  const card = queue[cursor] ?? queue[0];

  function grade(knew: boolean) {
    if (!card) return;
    gradeCard(card.id, knew);
    setShow(false);
    setCursor(0);
  }

  function pickProgramme(next: ProgrammeId | "all") {
    setProgramme(next);
    setCursor(0);
    setShow(false);
  }

  function pickLevel(next: Level | "all") {
    setLevel(next);
    setCursor(0);
    setShow(false);
  }

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="font-display text-4xl">Flash cards</h1>
      <p className="mt-2 text-muted">
        Tap a card to turn it. Knew it waits longer. Again comes back now. Every topic in the hall has its own
        pile.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Chip active={programme === "all"} label="All programmes" onClick={() => pickProgramme("all")} />
        {programmes.map((item) => (
          <Chip
            key={item.id}
            active={programme === item.id}
            label={item.title}
            onClick={() => pickProgramme(item.id)}
          />
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <Chip active={level === "all"} label="All levels" onClick={() => pickLevel("all")} />
        {levels.map((item) => (
          <Chip key={item} active={level === item} label={`${item}`} onClick={() => pickLevel(item)} />
        ))}
      </div>
      {card ? (
        <>
          <button
            type="button"
            onClick={() => setShow((value) => !value)}
            className="mt-6 min-h-64 w-full rounded-lg bg-card p-6 text-left shadow-card"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-clay">
              {show ? "Meaning" : `${card.level} · ${card.topicTitle}`}
            </p>
            <p className="mt-3 font-display text-3xl">{show ? card.meaning : card.term}</p>
            <p className="mt-6 text-sm text-muted">{show ? "Tap to see the term" : "Tap to show the meaning"}</p>
          </button>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button type="button" onClick={() => grade(false)} className="min-h-12 rounded-md bg-clay text-sm font-medium text-card">
              Again
            </button>
            <button type="button" onClick={() => grade(true)} className="min-h-12 rounded-md bg-teal text-sm font-medium text-card">
              Knew it
            </button>
          </div>
          <p className="mt-3 text-sm tabular-nums text-muted">{queue.length} in this pile</p>
          <Link to="/topic/$topicId" params={{ topicId: card.topicId }} className="mt-4 inline-flex text-sm font-medium text-teal">
            Open this topic
          </Link>
        </>
      ) : (
        <p className="mt-6">No cards in this filter.</p>
      )}
    </div>
  );
}

function Chip({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn("min-h-11 rounded-full px-4 text-sm font-medium", active ? "bg-ink text-card" : "bg-card shadow-card")}
    >
      {label}
    </button>
  );
}
