import type { Level, ProgrammeId, Question, Topic } from "./types";

type Q = [string, string[], number, string];

export function topic(
  programme: ProgrammeId,
  level: Level,
  code: string,
  title: string,
  summary: string[],
  points: string[],
  cards: [string, string][],
  questions: Q[],
): Topic {
  const slug = code.toLowerCase().replace(/\s+/g, "-");
  return {
    id: `${programme}-${slug}`,
    programme,
    level,
    code,
    title,
    summary,
    points,
    cards: cards.map(([term, meaning]) => ({ term, meaning })),
    questions: questions.map(
      ([prompt, choices, answer, why]): Question => ({ prompt, choices, answer, why }),
    ),
  };
}
