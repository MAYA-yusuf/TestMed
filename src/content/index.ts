import { medicineTopics } from "./medicine";
import { extras } from "./more";
import { pharmacyTopics } from "./pharmacy";
import { physioTopics } from "./physio";
import type { Level, Programme, ProgrammeId, Question, Topic } from "./types";

export type { Card, Level, Programme, ProgrammeId, Question, Topic } from "./types";

export const levels: Level[] = [100, 200, 300, 400, 500];

export const programmes: Programme[] = [
  {
    id: "medicine",
    title: "Medicine and Surgery",
    campus: "LASUCOM, Ikeja",
    blurb: "From 100-level science to 500-level clinical thinking.",
    image: "/art/medicine.jpg",
    imageAlt: "A stethoscope, a blank chart, and a small ceramic heart on a study desk.",
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    campus: "College of Medicine, Ikeja",
    blurb: "Movement, assessment, and rehabilitation from 100 to 500 level.",
    image: "/art/physio.jpg",
    imageAlt: "A physiotherapy corner with a mat, a band, and a wooden arm model.",
  },
  {
    id: "pharmacy",
    title: "Pharmacy",
    campus: "Faculty of Pharmacy, LASU",
    blurb: "Forms, calculations, medicines, and practice from 100 to 500 level.",
    image: "/art/pharmacy.jpg",
    imageAlt: "A pharmacy bench with a mortar, amber bottles, and a glass measure.",
  },
];

function expand(list: Topic[]): Topic[] {
  return list.map((item) => {
    const extra = extras[item.id];
    if (!extra) throw new Error(`Missing extra questions for ${item.id}`);
    const questions: Question[] = [
      ...item.questions,
      ...extra.questions.map(([prompt, choices, answer, why]) => ({ prompt, choices, answer, why })),
    ];
    return {
      ...item,
      summary: [...item.summary, extra.note],
      cards: [...item.cards, ...extra.cards.map(([term, meaning]) => ({ term, meaning }))],
      questions,
    };
  });
}

export const topics: Topic[] = expand([...medicineTopics, ...physioTopics, ...pharmacyTopics]);

const seen = new Set<string>();
for (const item of topics) {
  if (seen.has(item.id)) throw new Error(`Duplicate topic ${item.id}`);
  seen.add(item.id);
  if (item.summary.length < 4) throw new Error(`Thin summary in ${item.id}`);
  if (item.questions.length < 10) throw new Error(`Too few questions in ${item.id}`);
  if (item.cards.length < 10) throw new Error(`Too few cards in ${item.id}`);
  const terms = new Set<string>();
  for (const card of item.cards) {
    if (terms.has(card.term)) throw new Error(`Duplicate card ${card.term} in ${item.id}`);
    terms.add(card.term);
  }
  item.questions.forEach((question, index) => {
    if (question.choices.length < 4) throw new Error(`Short choices on ${item.id} question ${index}`);
    if (new Set(question.choices).size !== question.choices.length) {
      throw new Error(`Duplicate choice on ${item.id} question ${index}`);
    }
    if (question.answer < 0 || question.answer >= question.choices.length) {
      throw new Error(`Bad answer on ${item.id} question ${index}`);
    }
    if (!question.why.trim()) throw new Error(`Missing reason on ${item.id} question ${index}`);
  });
}

export const topicMap = new Map(topics.map((item) => [item.id, item]));

export function programmeById(id: string): Programme | undefined {
  return programmes.find((item) => item.id === id);
}

export function topicsFor(programme: ProgrammeId, level?: Level): Topic[] {
  return topics.filter((item) => item.programme === programme && (level === undefined || item.level === level));
}

export function searchTopics(query: string): Topic[] {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];
  return topics
    .filter((item) =>
      [item.title, item.code, item.summary.join(" "), ...item.cards.map((card) => card.term)]
        .join(" ")
        .toLowerCase()
        .includes(needle),
    )
    .slice(0, 12);
}

export type FlashCard = {
  id: string;
  term: string;
  meaning: string;
  topicId: string;
  topicTitle: string;
  programme: ProgrammeId;
  level: Level;
};

export const flashcards: FlashCard[] = topics.flatMap((item) =>
  item.cards.map((card) => ({
    id: `${item.id}:${card.term}`,
    term: card.term,
    meaning: card.meaning,
    topicId: item.id,
    topicTitle: item.title,
    programme: item.programme,
    level: item.level,
  })),
);
