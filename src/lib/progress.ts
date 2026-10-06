import { create } from "zustand";

export type Attempt = {
  assessId: string;
  score: number;
  total: number;
  at: number;
  kind: "quiz" | "test" | "exam";
};

export type CardState = {
  box: number;
  due: number;
};

type ProgressState = {
  signedIn: boolean;
  firstName: string;
  attempts: Attempt[];
  cards: Record<string, CardState>;
  signIn: (name: string) => void;
  signOut: () => void;
  recordAttempt: (attempt: Attempt) => void;
  gradeCard: (id: string, knew: boolean) => void;
  resetScores: () => void;
};

const empty = {
  signedIn: false,
  firstName: "",
  attempts: [] as Attempt[],
  cards: {} as Record<string, CardState>,
};

export const useProgress = create<ProgressState>()((set) => ({
  ...empty,
  signIn: (name) => {
    const first = name.trim().split(/\s+/)[0] ?? "";
    if (!first) return;
    const tidy = first.slice(0, 24);
    const pretty = tidy.charAt(0).toUpperCase() + tidy.slice(1);
    set({ firstName: pretty, signedIn: true });
  },
  signOut: () => set({ firstName: "", signedIn: false }),
  recordAttempt: (attempt) => set((state) => ({ attempts: [attempt, ...state.attempts].slice(0, 120) })),
  gradeCard: (id, knew) =>
    set((state) => {
      const prev = state.cards[id] ?? { box: 0, due: 0 };
      const box = knew ? Math.min(3, prev.box + 1) : 0;
      const days = [0, 1, 3, 7][box] ?? 0;
      return {
        cards: {
          ...state.cards,
          [id]: { box, due: Date.now() + days * 86_400_000 },
        },
      };
    }),
  resetScores: () => set({ attempts: [], cards: {} }),
}));

const STORAGE_KEY = "clinicfolio-progress";
let canSave = false;

export function hydrateProgress() {
  if (typeof window === "undefined" || canSave) return;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw) as Partial<typeof empty>;
      useProgress.setState({
        signedIn: data.signedIn === true,
        firstName: data.signedIn === true && typeof data.firstName === "string" ? data.firstName : "",
        attempts: Array.isArray(data.attempts) ? data.attempts : [],
        cards: data.cards ?? {},
      });
    }
  } catch {
    // Ignore a damaged save and keep the fresh desk.
  }
  canSave = true;
}

if (typeof window !== "undefined") {
  useProgress.subscribe((state) => {
    if (!canSave) return;
    const { signedIn, firstName, attempts, cards } = state;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ signedIn, firstName, attempts, cards }));
  });
}

export function dayKey(ts = Date.now()): string {
  const date = new Date(ts);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

export function streakFrom(days: string[]): number {
  if (!days.length) return 0;
  const set = new Set(days);
  const cursor = new Date();
  const today = dayKey(cursor.getTime());
  cursor.setDate(cursor.getDate() - 1);
  const yesterday = dayKey(cursor.getTime());
  if (!set.has(today) && !set.has(yesterday)) return 0;
  let count = 0;
  const walker = new Date();
  if (!set.has(today)) walker.setDate(walker.getDate() - 1);
  while (set.has(dayKey(walker.getTime()))) {
    count += 1;
    walker.setDate(walker.getDate() - 1);
  }
  return count;
}

export function bestAttempt(attempts: Attempt[], assessId: string): Attempt | null {
  const rows = attempts.filter((item) => item.assessId === assessId);
  if (!rows.length) return null;
  return rows.reduce((best, item) => (item.score / item.total > best.score / best.total ? item : best));
}

export function greeting(name: string, date = new Date()): string {
  const hour = date.getHours();
  const hello = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  return `${hello}, ${name}.`;
}
