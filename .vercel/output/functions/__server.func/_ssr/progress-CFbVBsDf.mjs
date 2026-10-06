import { i as __toESM } from "../_runtime.mjs";
import { c as topicsFor, i as programmes, o as topicMap, s as topics } from "./content-DxJ1Vlga.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as streakFrom, n as dayKey, o as useProgress, t as bestAttempt } from "./progress-C87XT1sA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-CFbVBsDf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var OWNER = {
	github: "Nouveau0Digital",
	githubUrl: "https://github.com/Nouveau0Digital",
	avatar: "/art/owner.png"
};
function ProgressPage() {
	const firstName = useProgress((state) => state.firstName);
	const attempts = useProgress((state) => state.attempts);
	const signOut = useProgress((state) => state.signOut);
	const resetScores = useProgress((state) => state.resetScores);
	const [armed, setArmed] = (0, import_react.useState)(false);
	const streak = streakFrom(attempts.map((attempt) => dayKey(attempt.at)));
	const sat = new Set(attempts.map((attempt) => attempt.assessId)).size;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Signed in as"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-4xl",
				children: firstName
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "Scores stay in this browser. Clearing the browser clears the desk."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-muted",
				children: [
					"Streak ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium tabular-nums text-ink",
						children: streak
					}),
					" day",
					streak === 1 ? "" : "s",
					" · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium tabular-nums text-ink",
						children: sat
					}),
					" topics sat",
					" · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium tabular-nums text-ink",
						children: attempts.length
					}),
					" papers"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-4",
				children: programmes.map((programme) => {
					const list = topicsFor(programme.id);
					const done = list.filter((topic) => attempts.some((attempt) => attempt.assessId === topic.id)).length;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-card p-4 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl",
									children: programme.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums text-sm",
									children: [
										done,
										"/",
										list.length
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 h-1.5 overflow-hidden rounded-full bg-paper-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-teal",
									style: { width: `${list.length ? done / list.length * 100 : 0}%` }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-1",
								children: list.map((topic) => ({
									topic,
									best: bestAttempt(attempts, topic.id)
								})).filter((row) => row.best).slice(0, 4).map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center justify-between gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/topic/$topicId",
										params: { topicId: row.topic.id },
										className: "text-teal",
										children: [
											row.topic.code,
											" ",
											row.topic.title
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums",
										children: [
											row.best.score,
											"/",
											row.best.total
										]
									})]
								}, row.topic.id))
							})
						]
					}, programme.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Recent papers"
				}), attempts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "No papers yet. Open a topic, read the summary, then sit the test."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 divide-y divide-line rounded-lg bg-card shadow-card",
					children: attempts.slice(0, 8).map((attempt) => {
						const topic = topicMap.get(attempt.assessId);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between gap-3 px-4 py-3 text-sm",
							children: [topic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/topic/$topicId",
								params: { topicId: topic.id },
								children: [
									topic.code,
									" · ",
									topic.title
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: attempt.assessId }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums",
								children: [
									attempt.score,
									"/",
									attempt.total
								]
							})]
						}, `${attempt.assessId}-${attempt.at}`);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: OWNER.githubUrl,
				target: "_blank",
				rel: "noreferrer",
				className: "mt-8 flex items-center gap-3 rounded-lg bg-card p-4 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: OWNER.avatar,
					alt: "",
					className: "size-12 rounded-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-sm text-muted",
					children: "GitHub linked to this hall"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-medium",
					children: OWNER.github
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-muted",
				children: [topics.length, " topics on the revision map."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => signOut(),
					className: "min-h-11 rounded-md bg-ink px-4 text-sm font-medium text-card",
					children: "Sign out"
				}), armed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						resetScores();
						setArmed(false);
					},
					className: "min-h-11 rounded-md bg-clay px-4 text-sm font-medium text-card",
					children: "Yes, clear scores"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setArmed(false),
					className: "min-h-11 rounded-md bg-paper-2 px-4 text-sm",
					children: "Keep scores"
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setArmed(true),
					className: "min-h-11 text-sm text-muted",
					children: "Clear scores on this device"
				})]
			})
		]
	});
}
//#endregion
export { ProgressPage as component };
