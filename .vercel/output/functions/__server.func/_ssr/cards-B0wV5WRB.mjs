import { i as __toESM } from "../_runtime.mjs";
import { i as programmes, n as levels, t as flashcards } from "./content-DxJ1Vlga.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useProgress } from "./progress-C87XT1sA.mjs";
import { t as cn } from "./cn-Ccejyh36.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cards-B0wV5WRB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CardsPage() {
	const [programme, setProgramme] = (0, import_react.useState)("all");
	const [level, setLevel] = (0, import_react.useState)("all");
	const [cursor, setCursor] = (0, import_react.useState)(0);
	const [show, setShow] = (0, import_react.useState)(false);
	const cardState = useProgress((state) => state.cards);
	const gradeCard = useProgress((state) => state.gradeCard);
	const queue = (0, import_react.useMemo)(() => {
		const now = Date.now();
		const pool = flashcards.filter((card) => (programme === "all" || card.programme === programme) && (level === "all" || card.level === level));
		const due = pool.filter((card) => cardState[card.id] && cardState[card.id].due <= now);
		const fresh = pool.filter((card) => !cardState[card.id]);
		return (due.length ? due : fresh.length ? fresh : pool).slice(0, 24);
	}, [
		programme,
		level,
		cardState
	]);
	const card = queue[cursor] ?? queue[0];
	function grade(knew) {
		if (!card) return;
		gradeCard(card.id, knew);
		setShow(false);
		setCursor(0);
	}
	function pickProgramme(next) {
		setProgramme(next);
		setCursor(0);
		setShow(false);
	}
	function pickLevel(next) {
		setLevel(next);
		setCursor(0);
		setShow(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Flash cards"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "Tap a card to turn it. Knew it waits longer. Again comes back now. Every topic in the hall has its own pile."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: programme === "all",
					label: "All programmes",
					onClick: () => pickProgramme("all")
				}), programmes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: programme === item.id,
					label: item.title,
					onClick: () => pickProgramme(item.id)
				}, item.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: level === "all",
					label: "All levels",
					onClick: () => pickLevel("all")
				}), levels.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: level === item,
					label: `${item}`,
					onClick: () => pickLevel(item)
				}, item))]
			}),
			card ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setShow((value) => !value),
					className: "mt-6 min-h-64 w-full rounded-lg bg-card p-6 text-left shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-wide text-clay",
							children: show ? "Meaning" : `${card.level} · ${card.topicTitle}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-3xl",
							children: show ? card.meaning : card.term
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm text-muted",
							children: show ? "Tap to see the term" : "Tap to show the meaning"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => grade(false),
						className: "min-h-12 rounded-md bg-clay text-sm font-medium text-card",
						children: "Again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => grade(true),
						className: "min-h-12 rounded-md bg-teal text-sm font-medium text-card",
						children: "Knew it"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm tabular-nums text-muted",
					children: [queue.length, " in this pile"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/topic/$topicId",
					params: { topicId: card.topicId },
					className: "mt-4 inline-flex text-sm font-medium text-teal",
					children: "Open this topic"
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6",
				children: "No cards in this filter."
			})
		]
	});
}
function Chip({ active, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("min-h-11 rounded-full px-4 text-sm font-medium", active ? "bg-ink text-card" : "bg-card shadow-card"),
		children: label
	});
}
//#endregion
export { CardsPage as component };
