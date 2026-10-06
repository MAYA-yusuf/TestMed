import { i as __toESM } from "../_runtime.mjs";
import { c as topicsFor, n as levels, r as programmeById } from "./content-DxJ1Vlga.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useProgress, t as bestAttempt } from "./progress-C87XT1sA.mjs";
import { t as cn } from "./cn-Ccejyh36.mjs";
import { r as Route$1 } from "./router-7IiXhOa3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hall._programme-BAijc3Fy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function isProgramme(value) {
	return value === "medicine" || value === "physiotherapy" || value === "pharmacy";
}
function HallPage() {
	const { programme } = Route$1.useParams();
	const attempts = useProgress((state) => state.attempts);
	const [level, setLevel] = (0, import_react.useState)(100);
	if (!isProgramme(programme)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-4xl",
		children: "That programme is not in the hall."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		className: "mt-4 inline-flex text-teal",
		children: "Back"
	})] });
	const info = programmeById(programme);
	const list = topicsFor(programme, level);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: info.campus
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-4xl",
				children: info.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: info.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: levels.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setLevel(item),
					className: cn("min-h-11 rounded-full px-4 text-sm font-medium tabular-nums", level === item ? "bg-ink text-card" : "bg-card shadow-card"),
					children: [item, " level"]
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 divide-y divide-line rounded-lg bg-card shadow-card",
				children: list.map((topic) => {
					const best = bestAttempt(attempts, topic.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/topic/$topicId",
						params: { topicId: topic.id },
						className: "flex min-h-16 items-center justify-between gap-3 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs font-medium text-clay",
								children: topic.code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium",
								children: topic.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-sm text-muted",
								children: [
									topic.questions.length,
									" questions · ",
									topic.cards.length,
									" cards",
									best ? ` · best ${best.score}/${best.total}` : ""
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium text-teal",
							children: "Open"
						})]
					}) }, topic.id);
				})
			})
		]
	});
}
//#endregion
export { HallPage as component };
