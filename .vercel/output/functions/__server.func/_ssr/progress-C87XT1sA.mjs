import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-C87XT1sA.js
var empty = {
	signedIn: false,
	firstName: "",
	attempts: [],
	cards: {}
};
var useProgress = create()((set) => ({
	...empty,
	signIn: (name) => {
		const first = name.trim().split(/\s+/)[0] ?? "";
		if (!first) return;
		const tidy = first.slice(0, 24);
		set({
			firstName: tidy.charAt(0).toUpperCase() + tidy.slice(1),
			signedIn: true
		});
	},
	signOut: () => set({
		firstName: "",
		signedIn: false
	}),
	recordAttempt: (attempt) => set((state) => ({ attempts: [attempt, ...state.attempts].slice(0, 120) })),
	gradeCard: (id, knew) => set((state) => {
		const prev = state.cards[id] ?? {
			box: 0,
			due: 0
		};
		const box = knew ? Math.min(3, prev.box + 1) : 0;
		const days = [
			0,
			1,
			3,
			7
		][box] ?? 0;
		return { cards: {
			...state.cards,
			[id]: {
				box,
				due: Date.now() + days * 864e5
			}
		} };
	}),
	resetScores: () => set({
		attempts: [],
		cards: {}
	})
}));
var STORAGE_KEY = "clinicfolio-progress";
var canSave = false;
function hydrateProgress() {
	if (typeof window === "undefined" || canSave) return;
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (raw) {
			const data = JSON.parse(raw);
			useProgress.setState({
				signedIn: data.signedIn === true,
				firstName: data.signedIn === true && typeof data.firstName === "string" ? data.firstName : "",
				attempts: Array.isArray(data.attempts) ? data.attempts : [],
				cards: data.cards ?? {}
			});
		}
	} catch {}
	canSave = true;
}
if (typeof window !== "undefined") useProgress.subscribe((state) => {
	if (!canSave) return;
	const { signedIn, firstName, attempts, cards } = state;
	window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
		signedIn,
		firstName,
		attempts,
		cards
	}));
});
function dayKey(ts = Date.now()) {
	const date = new Date(ts);
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${date.getFullYear()}-${month}-${day}`;
}
function streakFrom(days) {
	if (!days.length) return 0;
	const set = new Set(days);
	const cursor = /* @__PURE__ */ new Date();
	const today = dayKey(cursor.getTime());
	cursor.setDate(cursor.getDate() - 1);
	const yesterday = dayKey(cursor.getTime());
	if (!set.has(today) && !set.has(yesterday)) return 0;
	let count = 0;
	const walker = /* @__PURE__ */ new Date();
	if (!set.has(today)) walker.setDate(walker.getDate() - 1);
	while (set.has(dayKey(walker.getTime()))) {
		count += 1;
		walker.setDate(walker.getDate() - 1);
	}
	return count;
}
function bestAttempt(attempts, assessId) {
	const rows = attempts.filter((item) => item.assessId === assessId);
	if (!rows.length) return null;
	return rows.reduce((best, item) => item.score / item.total > best.score / best.total ? item : best);
}
function greeting(name, date = /* @__PURE__ */ new Date()) {
	const hour = date.getHours();
	return `${hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening"}, ${name}.`;
}
//#endregion
export { streakFrom as a, hydrateProgress as i, dayKey as n, useProgress as o, greeting as r, bestAttempt as t };
