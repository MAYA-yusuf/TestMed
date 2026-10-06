import { i as __toESM } from "../_runtime.mjs";
import { a as searchTopics } from "./content-DxJ1Vlga.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link, g as Outlet, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as hydrateProgress, o as useProgress } from "./progress-C87XT1sA.mjs";
import { t as cn } from "./cn-Ccejyh36.mjs";
import { a as House, i as Search, o as BookOpen, r as Stethoscope, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-CsNj5fTk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SignIn() {
	const signIn = useProgress((state) => state.signIn);
	const [name, setName] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	function submit(event) {
		event.preventDefault();
		const first = name.trim().split(/\s+/)[0] ?? "";
		if (!first) {
			setError("Type your first name to enter.");
			return;
		}
		signIn(first);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "flex min-h-screen items-center justify-center bg-paper px-4 py-10 text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-teal",
					children: "Lagos State University · College of Medicine"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl",
					children: "Clinicfolio test hall"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: "Medicine, physiotherapy, and pharmacy, 100 to 500 level. The first name you type is the name on the desk. It stays on this device only."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "mt-6 rounded-lg bg-card p-5 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "first-name",
							className: "text-sm font-medium",
							children: "First name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "first-name",
							autoComplete: "given-name",
							value: name,
							onChange: (event) => {
								setName(event.target.value);
								setError("");
							},
							placeholder: "Type your first name",
							className: "mt-2 min-h-12 w-full rounded-md border border-line bg-paper px-3"
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-clay",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "mt-4 min-h-12 w-full rounded-md bg-teal font-medium text-card",
							children: "Enter the hall"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted",
					children: "A revision hall for study, not an official LASU paper and not medical advice. Do not use it to treat anyone."
				})
			]
		})
	});
}
var nav = [
	{
		to: "/",
		label: "Hall",
		icon: House
	},
	{
		to: "/cards",
		label: "Cards",
		icon: BookOpen
	},
	{
		to: "/progress",
		label: "Scores",
		icon: Stethoscope
	}
];
function Shell({ children }) {
	const path = useRouterState({ select: (state) => state.location.pathname });
	const signedIn = useProgress((state) => state.signedIn);
	const firstName = useProgress((state) => state.firstName);
	const signOut = useProgress((state) => state.signOut);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const hits = searchTopics(query);
	(0, import_react.useEffect)(() => {
		hydrateProgress();
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		function onKey(event) {
			if (event.key === "/" && !(event.target instanceof HTMLInputElement) && !(event.target instanceof HTMLTextAreaElement)) {
				event.preventDefault();
				setOpen(true);
			}
			if (event.key === "Escape") setOpen(false);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { className: "min-h-screen bg-paper" });
	if (!signedIn) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignIn, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r border-line bg-card px-4 py-6 md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "px-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl",
							children: "Clinicfolio"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: ["Test hall · ", firstName]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-8 flex flex-col gap-1",
						children: nav.map((item) => {
							const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
							const Icon = item.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: cn("flex min-h-11 items-center gap-3 rounded-md px-3 text-sm font-medium", active ? "bg-teal text-card" : "text-ink hover:bg-paper"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-4",
									"aria-hidden": true
								}), item.label]
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => signOut(),
						className: "mt-auto min-h-11 px-3 text-left text-sm text-muted",
						children: "Sign out"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:pl-60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-line bg-paper/95 px-4 py-3 backdrop-blur md:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "font-display text-xl md:hidden",
							children: "Clinicfolio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden text-sm text-muted md:block",
							children: "Medicine · Physiotherapy · Pharmacy · 100–500"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium md:hidden",
							children: firstName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpen(true),
							className: "inline-flex min-h-11 items-center gap-2 rounded-md bg-card px-3 text-sm shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								className: "size-4",
								"aria-hidden": true
							}), "Search"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "px-4 pb-28 pt-6 md:px-8 md:pb-16 md:pt-8",
					children
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-30 flex border-t border-line bg-card md:hidden",
				children: nav.map((item) => {
					const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
					const Icon = item.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						className: cn("flex min-h-14 flex-1 flex-col items-center justify-center gap-0.5 text-xs font-medium", active ? "text-teal" : "text-muted"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-5",
							"aria-hidden": true
						}), item.label]
					}, item.to);
				})
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-40 bg-ink/40 p-4",
				onClick: () => setOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-12 max-w-lg rounded-lg bg-card p-4 shadow-card",
					onClick: (event) => event.stopPropagation(),
					role: "dialog",
					"aria-label": "Search topics",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								className: "size-4 text-muted",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								autoFocus: true,
								value: query,
								onChange: (event) => setQuery(event.target.value),
								placeholder: "Topic, code, or term",
								className: "min-h-11 flex-1 bg-transparent text-base outline-none"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setOpen(false),
								className: "min-h-11 min-w-11",
								"aria-label": "Close search",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mx-auto size-4" })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 max-h-80 space-y-1 overflow-auto",
						children: [query.trim() && hits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "px-2 py-3 text-sm text-muted",
							children: "Nothing matches yet."
						}) : null, hits.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/topic/$topicId",
							params: { topicId: item.id },
							onClick: () => setOpen(false),
							className: "block rounded-md px-2 py-3 hover:bg-paper",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block font-medium",
								children: [
									item.code,
									" · ",
									item.title
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-sm text-muted",
								children: [item.level, " level"]
							})]
						}) }, item.id))]
					})]
				})
			}) : null
		]
	});
}
var SplitComponent = function AppLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
};
//#endregion
export { SplitComponent as component };
