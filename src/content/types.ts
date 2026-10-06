export type ProgrammeId = "medicine" | "physiotherapy" | "pharmacy";

export type Level = 100 | 200 | 300 | 400 | 500;

export type Question = {
  prompt: string;
  choices: string[];
  answer: number;
  why: string;
};

export type Card = {
  term: string;
  meaning: string;
};

export type Topic = {
  id: string;
  programme: ProgrammeId;
  level: Level;
  code: string;
  title: string;
  summary: string[];
  points: string[];
  cards: Card[];
  questions: Question[];
};

export type Programme = {
  id: ProgrammeId;
  title: string;
  campus: string;
  blurb: string;
  image: string;
  imageAlt: string;
};
