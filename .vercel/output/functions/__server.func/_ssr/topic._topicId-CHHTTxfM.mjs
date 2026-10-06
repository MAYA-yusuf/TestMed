import { i as __toESM } from "../_runtime.mjs";
import { o as topicMap, r as programmeById } from "./content-DxJ1Vlga.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useProgress } from "./progress-C87XT1sA.mjs";
import { t as cn } from "./cn-Ccejyh36.mjs";
import { n as Route } from "./router-7IiXhOa3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/topic._topicId-CHHTTxfM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TopicPage() {
	const { topicId } = Route.useParams();
	const topic = topicMap.get(topicId);
	const [mode, setMode] = (0, import_react.useState)("read");
	if (!topic) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-4xl",
		children: "That topic is not on the list."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		className: "mt-4 inline-flex text-teal",
		children: "Back to the hall"
	})] });
	const programme = programmeById(topic.programme);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/hall/$programme",
					params: { programme: topic.programme },
					className: "hover:underline",
					children: programme?.title
				}), ` · ${topic.level} level · ${topic.code}`]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl",
				children: topic.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm tabular-nums text-muted",
				children: [
					topic.questions.length,
					" questions · ",
					topic.cards.length,
					" cards"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
						active: mode === "read",
						label: "Summary",
						onClick: () => setMode("read")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
						active: mode === "test",
						label: "Test",
						onClick: () => setMode("test")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
						active: mode === "cards",
						label: "Cards",
						onClick: () => setMode("cards")
					})
				]
			}),
			mode === "read" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Summary, {
				topicId: topic.id,
				onStart: () => setMode("test")
			}) : null,
			mode === "test" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Test, { topicId: topic.id }, topic.id) : null,
			mode === "cards" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cards, { topicId: topic.id }) : null
		]
	});
}
function Tab({ active, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("min-h-11 rounded-full px-4 text-sm font-medium", active ? "bg-teal text-card" : "bg-card shadow-card"),
		children: label
	});
}
function Summary({ topicId, onStart }) {
	const topic = topicMap.get(topicId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6",
		children: [
			topic.summary.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 leading-relaxed",
				children: paragraph
			}, paragraph.slice(0, 48))),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 list-disc space-y-1 pl-5 text-sm",
				children: topic.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: point }, point))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onStart,
				className: "mt-6 min-h-12 rounded-md bg-teal px-5 font-medium text-card",
				children: "I have read it. Start the test"
			})
		]
	});
}
function Test({ topicId }) {
	const topic = topicMap.get(topicId);
	const recordAttempt = useProgress((state) => state.recordAttempt);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [picks, setPicks] = (0, import_react.useState)([]);
	const [correctCount, setCorrectCount] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const question = topic.questions[index];
	if (done || !question) {
		const missed = topic.questions.map((item, itemIndex) => ({
			item,
			pick: picks[itemIndex]
		})).filter((row) => row.pick !== row.item.answer);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl",
					children: [
						correctCount,
						" / ",
						topic.questions.length
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: "Saved on this device. The reason was shown on every question, right or wrong."
				}),
				missed.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: missed.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg bg-card p-4 text-sm shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: row.item.prompt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-clay",
								children: ["Answer: ", row.item.choices[row.item.answer]]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1",
								children: row.item.why
							})
						]
					}, row.item.prompt))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm",
					children: "Clean paper. Sit it again if you want the reasons to stick."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-4 min-h-11 rounded-md bg-ink px-4 text-sm font-medium text-card",
					onClick: () => {
						setIndex(0);
						setPicked(null);
						setPicks([]);
						setCorrectCount(0);
						setDone(false);
					},
					children: "Sit it again"
				})
			]
		});
	}
	const revealed = picked !== null;
	const right = picked === question.answer;
	function choose(choice) {
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
				kind: "test"
			});
			setDone(true);
			return;
		}
		setIndex((value) => value + 1);
		setPicked(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm tabular-nums text-muted",
				children: [
					"Question ",
					index + 1,
					" of ",
					topic.questions.length
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 h-1.5 overflow-hidden rounded-full bg-paper-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-teal",
					style: { width: `${index / topic.questions.length * 100}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-3xl",
				children: question.prompt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-2",
				children: question.choices.map((choice, choiceIndex) => {
					const selected = picked === choiceIndex;
					const isAnswer = choiceIndex === question.answer;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => choose(choiceIndex),
						className: cn("flex min-h-12 w-full items-start gap-3 rounded-md px-4 py-3 text-left", !revealed && "bg-card shadow-card", revealed && isAnswer && "bg-teal text-card", revealed && selected && !isAnswer && "bg-clay text-card", revealed && !selected && !isAnswer && "bg-card text-muted shadow-card"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-sm opacity-70",
							children: choiceIndex + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: choice })]
					}, choice);
				})
			}),
			revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-lg bg-card p-4 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("text-sm font-medium", right ? "text-teal-deep" : "text-clay"),
						children: right ? "Correct." : `Not this one. The answer is: ${question.choices[question.answer]}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs font-medium uppercase tracking-wide text-muted",
						children: "Reason"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm",
						children: question.why
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: next,
						className: "mt-4 min-h-11 rounded-md bg-ink px-4 text-sm font-medium text-card",
						children: index + 1 === topic.questions.length ? "See score" : "Next question"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Choose an option. The reason shows after you choose, even if you are right."
			})
		]
	});
}
function Cards({ topicId }) {
	const topic = topicMap.get(topicId);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [show, setShow] = (0, import_react.useState)(false);
	const card = topic.cards[index];
	if (!card) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm tabular-nums text-muted",
				children: [
					"Card ",
					index + 1,
					" of ",
					topic.cards.length
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setShow((value) => !value),
				className: "mt-3 min-h-48 w-full rounded-lg bg-card p-6 text-left shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wide text-clay",
					children: show ? "Meaning" : "Term"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-display text-3xl",
					children: show ? card.meaning : card.term
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 rounded-md bg-paper-2 px-4 text-sm",
					onClick: () => {
						setShow(false);
						setIndex((value) => (value + topic.cards.length - 1) % topic.cards.length);
					},
					children: "Previous"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 rounded-md bg-teal px-4 text-sm font-medium text-card",
					onClick: () => {
						setShow(false);
						setIndex((value) => (value + 1) % topic.cards.length);
					},
					children: "Next card"
				})]
			})
		]
	});
}
//#endregion
export { TopicPage as component };
