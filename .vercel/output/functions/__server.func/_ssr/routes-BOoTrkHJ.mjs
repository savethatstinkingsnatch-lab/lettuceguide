import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Leaf, r as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BOoTrkHJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var chapters = [
	{
		id: "start",
		num: "00",
		title: "Start here"
	},
	{
		id: "plant",
		num: "01",
		title: "The plant"
	},
	{
		id: "kinds",
		num: "02",
		title: "Six kinds"
	},
	{
		id: "zones",
		num: "03",
		title: "Zones"
	},
	{
		id: "sowing",
		num: "04",
		title: "Sowing"
	},
	{
		id: "tending",
		num: "05",
		title: "In the bed"
	},
	{
		id: "kitchen",
		num: "06",
		title: "The kitchen cut"
	},
	{
		id: "seed",
		num: "07",
		title: "Saving seed"
	},
	{
		id: "companions",
		num: "08",
		title: "Companions"
	},
	{
		id: "year",
		num: "09",
		title: "Your year"
	},
	{
		id: "glossary",
		num: "10",
		title: "Glossary"
	},
	{
		id: "about",
		num: "11",
		title: "About"
	}
];
var monthNames = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
var toneLabel = {
	cold: "Too cold outdoors",
	sow: "Sow",
	pick: "Harvest",
	both: "Sow and harvest",
	hot: "Too hot for quality",
	gap: "Between seasons"
};
var zones = [
	{
		id: "3",
		label: "Zone 3",
		climate: "Long winter, a short cool summer",
		lastFrost: "Late May to early June",
		firstFrost: "Early September",
		springSow: "Indoors, late March through mid-April",
		springSet: "Harden off and transplant in late May, once the soil can be worked",
		springPick: "June into early July",
		fallSow: "Indoors in mid-July; transplant in early August",
		fallPick: "September, until a hard freeze",
		summer: "Skip crisphead. Leaf and butterhead are the whole season.",
		seedCrop: "Save seed from the spring plants as they bolt in July. The fall crop rarely ripens seed before frost.",
		prefer: "Fast leaf lettuces and small butterheads. A cold frame is what turns one crop into two.",
		months: [
			"cold",
			"cold",
			"cold",
			"sow",
			"sow",
			"pick",
			"hot",
			"sow",
			"pick",
			"cold",
			"cold",
			"cold"
		]
	},
	{
		id: "4",
		label: "Zone 4",
		climate: "Cold winter, a usable but brief lettuce spring",
		lastFrost: "Mid to late May",
		firstFrost: "Mid to late September",
		springSow: "Indoors in early April, or outdoors under cover in late April",
		springSet: "Transplant around mid-May",
		springPick: "Late May through June",
		fallSow: "Late July, indoors if the soil is baked",
		fallPick: "September into October",
		summer: "July is the end of quality. Do not start a new sowing then except for the fall crop under shade.",
		seedCrop: "Let spring plants bolt and ripen seed in August. Dry it indoors before fall rains.",
		prefer: "Leaf, butterhead, and mini romaine. Crisphead only if your summer stays oddly cool.",
		months: [
			"cold",
			"cold",
			"cold",
			"sow",
			"sow",
			"pick",
			"hot",
			"sow",
			"pick",
			"pick",
			"cold",
			"cold"
		]
	},
	{
		id: "5",
		label: "Zone 5",
		climate: "A classic two-season lettuce year",
		lastFrost: "Late April to mid-May",
		firstFrost: "Early to mid-October",
		springSow: "Direct sow two to four weeks before the last frost, or start indoors in mid-March",
		springSet: "Transplant from mid-April, after a week of hardening off",
		springPick: "May and June",
		fallSow: "Late July to mid-August. Count days to maturity, then add two weeks — autumn days shorten and growth slows.",
		fallPick: "September and October, later under a row cover",
		summer: "Stop spring sowings about a month before days settle above 80°F (27°C).",
		seedCrop: "Spring plants are the seed crop. They flower in early summer and dry in July.",
		prefer: "All types in spring. For fall, leaf and romaine are more forgiving than a big crisphead.",
		months: [
			"cold",
			"cold",
			"sow",
			"sow",
			"pick",
			"pick",
			"hot",
			"sow",
			"pick",
			"pick",
			"cold",
			"cold"
		]
	},
	{
		id: "6",
		label: "Zone 6",
		climate: "Two full seasons, with a hot middle",
		lastFrost: "Early to mid-April",
		firstFrost: "Mid to late October",
		springSow: "March through mid-April, a fresh sowing every ten to fourteen days",
		springSet: "Indoor starts from late February can go out in early April",
		springPick: "Late April through June",
		fallSow: "Early through late August",
		fallPick: "September into November",
		summer: "July is a pause, not a failure. Shade cloth will not make iceberg taste like October.",
		seedCrop: "Bolting spring plants set seed in June and July. The fall crop is for the table.",
		prefer: "Everything in its month. Hold crisphead for the coolest six weeks.",
		months: [
			"cold",
			"sow",
			"sow",
			"both",
			"pick",
			"pick",
			"hot",
			"sow",
			"pick",
			"pick",
			"pick",
			"cold"
		]
	},
	{
		id: "7",
		label: "Zone 7",
		climate: "An early spring, a long hot summer, a generous fall",
		lastFrost: "Late March to early April",
		firstFrost: "Early to mid-November",
		springSow: "February and March. The last useful spring sowing of leaf lettuce is often early April.",
		springSet: "Transplant in March. Do not wait for frost to be a distant memory — heat arrives first.",
		springPick: "April and May",
		fallSow: "Mid-August through September. If the soil is still hot, start seed indoors or sow at dusk and keep the row wet.",
		fallPick: "October into December",
		summer: "June through August is the gap. Only the slowest-bolting summer crisps are worth trying, and only under 30 to 40 percent shade.",
		seedCrop: "Take seed from the spring generation in June, before humidity and storms. Fall plants rarely finish a dry seed crop.",
		prefer: "Leaf, butterhead, romaine, and summer crisp. Treat iceberg as optional.",
		months: [
			"cold",
			"sow",
			"sow",
			"pick",
			"pick",
			"hot",
			"hot",
			"sow",
			"sow",
			"pick",
			"pick",
			"pick"
		]
	},
	{
		id: "8",
		label: "Zone 8",
		climate: "Winter is part of the lettuce year",
		lastFrost: "Early to mid-March, if frost comes at all",
		firstFrost: "Late November, often light",
		springSow: "January through early March",
		springSet: "Set transplants in February in a mild year",
		springPick: "March through May",
		fallSow: "September and October",
		fallPick: "November through January, with cover on the coldest nights",
		summer: "Stop by late spring. Coastal gardens and fog belts can cheat; inland heat will not negotiate.",
		seedCrop: "Spring plants bolt in May and June. Cut seed heads before summer rain and finish the drying indoors.",
		prefer: "Romaine and butterhead love this winter. Summer crisp earns its place at either end of the hot months.",
		months: [
			"both",
			"sow",
			"both",
			"pick",
			"pick",
			"hot",
			"hot",
			"gap",
			"sow",
			"sow",
			"pick",
			"pick"
		]
	},
	{
		id: "9",
		label: "Zone 9",
		climate: "Lettuce is a winter crop",
		lastFrost: "Late February in colder pockets; many gardens barely freeze",
		firstFrost: "Rare, or a brief December chill",
		springSow: "January and February, then stop",
		springSet: "A January transplant is often the last one before heat",
		springPick: "March and April",
		fallSow: "Late September through December, in succession",
		fallPick: "November through March",
		summer: "May through September is off the calendar except in fog, at elevation, or under serious shade — and even then, expect bitterness.",
		seedCrop: "The winter crop bolts as days lengthen, often March to May. That is your seed crop. Collect it before heat and humidity mold the fluff.",
		prefer: "Leaf and summer crisp first. Romaine where nights stay cool. Crisphead is a poor bet.",
		months: [
			"both",
			"both",
			"pick",
			"pick",
			"hot",
			"hot",
			"hot",
			"hot",
			"sow",
			"sow",
			"both",
			"both"
		]
	},
	{
		id: "10",
		label: "Zone 10",
		climate: "A frost-free lowland winter garden",
		lastFrost: "Frost is rare; a January chill is the usual worst",
		firstFrost: "Rare",
		springSow: "A last sowing in January or early February only",
		springSet: "Prefer direct sowing. Transplants stall if they meet a hot spell.",
		springPick: "Through April near the coast; earlier inland",
		fallSow: "October through December",
		fallPick: "December through March",
		summer: "Inland summers are a hard stop. Do not baby a bitter plant — pull it and wait for October.",
		seedCrop: "Let the best winter plants bolt in spring and harvest seed by early summer, drying it out of the rain.",
		prefer: "Heat-tolerant leaf and summer crisp. Mini romaine over full-size heads.",
		months: [
			"both",
			"both",
			"pick",
			"pick",
			"hot",
			"hot",
			"hot",
			"hot",
			"gap",
			"sow",
			"sow",
			"both"
		]
	},
	{
		id: "11",
		label: "Zone 11",
		climate: "Tropics and hot subtropics — only the coolest weeks",
		lastFrost: "Frost-free at sea level",
		firstFrost: "Frost-free",
		springSow: "If nights are still mild in January, that sowing is already the end",
		springSet: "Direct sow. A checked transplant will bolt as soon as it roots.",
		springPick: "A short window, often January and February",
		fallSow: "Begin when nights reliably drop, often November or December. Elevation changes everything: at a few thousand feet, follow zone 9 or 10 instead.",
		fallPick: "The coolest months only",
		summer: "Most of the year is too hot. Shade and water keep plants alive; they do not keep them sweet.",
		seedCrop: "Save seed as the cool season ends and dry it indoors with moving air. Seed left on the stalk in wet heat molds.",
		prefer: "The slowest-bolting leaf lettuces and summer crisps. Skip crisphead.",
		months: [
			"both",
			"pick",
			"hot",
			"hot",
			"hot",
			"hot",
			"hot",
			"hot",
			"hot",
			"gap",
			"sow",
			"sow"
		]
	}
];
var groupLabel = {
	leaf: "Looseleaf",
	butter: "Butterhead",
	romaine: "Romaine",
	crisp: "Crisphead",
	summer: "Summer crisp"
};
var varieties = [
	{
		name: "Black Seeded Simpson",
		group: "leaf",
		days: "45–55",
		heat: "low",
		note: "The old early benchmark. Pale, mild, and fast. It bolts before modern leaf types, so sow it first and eat it young."
	},
	{
		name: "Salad Bowl",
		group: "leaf",
		days: "45–55",
		heat: "fair",
		note: "Lobed oakleaf for cut-and-come-again. Holds a bit longer into warmth than Simpson, and a few plants fill a bowl."
	},
	{
		name: "Red Sails",
		group: "leaf",
		days: "45–55",
		heat: "fair",
		note: "Bronze-red and ruffled. Color deepens in cool light. Useful where you want a spring crop that does not rush to flower."
	},
	{
		name: "Buttercrunch",
		group: "butter",
		days: "55–65",
		heat: "fair",
		note: "A small dense butterhead with a thick midrib. The standard for flavor, and more patient in a warming May than Bibb."
	},
	{
		name: "Tom Thumb",
		group: "butter",
		days: "50–60",
		heat: "low",
		note: "A tennis-ball head for pots and cold frames. One plant is a salad for one person. It wants cool weather."
	},
	{
		name: "Merveille des Quatre Saisons",
		group: "butter",
		days: "55–65",
		heat: "low",
		note: "Red French butterhead, sweetest in cool spring and fall. The name promises four seasons; the plant prefers two."
	},
	{
		name: "Parris Island Cos",
		group: "romaine",
		days: "65–75",
		heat: "fair",
		note: "A full upright romaine with a pale heart. Give it room and steady water or the outer leaves turn leathery."
	},
	{
		name: "Little Gem",
		group: "romaine",
		days: "50–60",
		heat: "fair",
		note: "A mini romaine that finishes weeks before the large cos types. The right romaine where the cool window is short."
	},
	{
		name: "Rouge d'Hiver",
		group: "romaine",
		days: "60–70",
		heat: "low",
		note: "A red winter romaine, handsome and cold-hardy. Sow it for the fall bed in zones 6 to 8."
	},
	{
		name: "Great Lakes",
		group: "crisp",
		days: "75–90",
		heat: "low",
		note: "An older open-pollinated crisphead. It needs a long, genuinely cool stretch. Wrong plant for zones 9 and warmer."
	},
	{
		name: "Nevada",
		group: "summer",
		days: "55–65",
		heat: "high",
		note: "A batavia that stays open, then thickens, and resists bitterness longer than most. Plant it at the hot edge of your season."
	},
	{
		name: "Muir",
		group: "summer",
		days: "50–60",
		heat: "high",
		note: "Bred to be slow to bolt. The one to sow last in spring and first when a hot fall soil finally cools at night."
	}
];
var companions = [
	{
		id: "alyssum",
		name: "Sweet alyssum",
		role: "Best documented",
		help: "Flowering alyssum is a serious insectary, not folklore. Hoverflies lay eggs where the flowers are, and their larvae eat aphids. University work in commercial lettuce has used it for that reason.",
		how: "Sow a ribbon along the bed, or a plant every two or three feet. It stays low and will not swallow the lettuce."
	},
	{
		id: "calendula",
		name: "Calendula",
		role: "Beneficials, and you can eat it",
		help: "The flowers bring the same useful flies and wasps, and the petals go into the salad you grew them beside. Evidence is softer than for alyssum, and the habit is old because it works well enough.",
		how: "A few plants at the corners. Deadhead if you want more bloom and fewer calendula volunteers."
	},
	{
		id: "chives",
		name: "Chives and bunching onions",
		role: "A upright neighbor",
		help: "They take almost no horizontal room, and the pungent leaves are thought to muddle aphids. Treat that as a bonus. The real gift is a second crop that does not fight lettuce for space.",
		how: "A single line down one side, not a mat. Garlic chives work the same way."
	},
	{
		id: "radish",
		name: "Radishes",
		role: "A timing companion",
		help: "Radishes are up in a few days, mark the row, and are pulled in about a month — just as lettuce needs the inches. This is choreography, not pest control.",
		how: "Sow them in the lettuce row the same day. Pull on time. A forgotten radish becomes a shady bully."
	},
	{
		id: "carrot",
		name: "Carrots",
		role: "Two depths, one bed",
		help: "Lettuce shades the soil while slow carrot seed germinates. Later the carrots use deeper ground. They are compatible, not magical.",
		how: "Sow carrots a little thinner than usual and harvest the lettuce before the roots need the whole bed."
	},
	{
		id: "peas",
		name: "Peas",
		role: "Spring shade and a little nitrogen",
		help: "A low trellis on the west side of a spring bed throws afternoon shade as the weather warms, and the roots leave nitrogen behind. Peas and lettuce share a cool season, then leave together.",
		how: "Keep the trellis from blocking morning sun. Bush peas can sit at the edge without a fence."
	},
	{
		id: "cilantro",
		name: "Cilantro or dill",
		role: "Flowers at the end of the bed",
		help: "Umbels feed hoverflies and parasitic wasps. Both herbs bolt in the same heat that ends the lettuce, which is convenient if you meant to save nothing but seed and flowers.",
		how: "Let two or three plants flower at the south or west end. Do not let dill self-sow into a thicket."
	},
	{
		id: "shade",
		name: "A shade edge",
		role: "The companion that extends the season",
		help: "Afternoon shade is the most reliable way to keep lettuce sweet an extra week or two. A row of sunflowers, corn, or trellised beans on the west side does it. So does 30 to 40 percent shade cloth, which is more predictable.",
		how: "Put the tall crop or the cloth on the west. Morning sun should still reach the leaves."
	},
	{
		id: "nasturtium",
		name: "Nasturtium",
		role: "A trap, if you watch it",
		help: "Aphids often settle on nasturtium first. That only helps if you notice. A neglected plant is an aphid nursery that spills onto the lettuce.",
		how: "Plant it at the path end of the bed, not in the row. Knock aphids off or pull the plant if they win."
	}
];
var avoidList = [
	{
		name: "Fennel",
		why: "It inhibits a long list of neighbors, lettuce included. Give it a pot or a far corner of the garden."
	},
	{
		name: "A second lettuce crop in sick soil",
		why: "If you had lettuce drop, bottom rot, or a bad run of downy mildew, do not follow lettuce with lettuce. Rotate two to three years."
	},
	{
		name: "A huge, thirsty summer crop overhead",
		why: "Mature tomatoes, potatoes, and squash steal water and rain disease onto the leaves. The seasons usually separate you. Do not force them together."
	},
	{
		name: "Mint in the ground",
		why: "The scent is pleasant and the roots are a takeover. Pot it, or do not plant it."
	}
];
var seedChecks = [
	{
		id: "op",
		label: "Packet is open-pollinated or heirloom, not an F1 hybrid"
	},
	{
		id: "plants",
		label: "Marked six to twelve slow, true-to-type plants and stopped cutting them"
	},
	{
		id: "space",
		label: "Varieties stand at least 10 to 20 feet apart, and wild prickly lettuce is not flowering nearby"
	},
	{
		id: "cut",
		label: "Cut stalks when most heads are fluffy and dry, before wind takes the first seed"
	},
	{
		id: "dry",
		label: "Dried crisp indoors, then winnowed, before the jar was sealed"
	},
	{
		id: "label",
		label: "Labeled with variety, year, and which bed it came from"
	},
	{
		id: "store",
		label: "Stored airtight, cool, dark, and dry — jar warmed to room temperature before opening"
	}
];
function zoneById(id) {
	return zones.find((z) => z.id === id) ?? zones[3];
}
var KEY = "from-seed-to-seed";
var defaultCompanions = [
	"alyssum",
	"chives",
	"radish"
];
var defaultGarden = {
	zone: "6",
	checks: [],
	companions: defaultCompanions
};
var state = defaultGarden;
var hydrated = false;
var listeners = /* @__PURE__ */ new Set();
function emit() {
	if (typeof window !== "undefined" && hydrated) window.localStorage.setItem(KEY, JSON.stringify(state));
	listeners.forEach((listener) => listener());
}
function subscribe(listener) {
	listeners.add(listener);
	return () => listeners.delete(listener);
}
function snapshot() {
	return hydrated ? state : defaultGarden;
}
function useGarden() {
	const value = (0, import_react.useSyncExternalStore)(subscribe, snapshot, () => defaultGarden);
	(0, import_react.useEffect)(() => {
		if (hydrated) return;
		try {
			const raw = window.localStorage.getItem(KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				state = {
					zone: parsed.zone ?? defaultGarden.zone,
					checks: Array.isArray(parsed.checks) ? parsed.checks : [],
					companions: Array.isArray(parsed.companions) ? parsed.companions : defaultCompanions
				};
			}
		} catch {
			state = defaultGarden;
		}
		hydrated = true;
		emit();
	}, []);
	const setZone = (0, import_react.useCallback)((zone) => {
		state = {
			...state,
			zone
		};
		emit();
	}, []);
	const toggleCheck = (0, import_react.useCallback)((id) => {
		const checks = state.checks.includes(id) ? state.checks.filter((item) => item !== id) : [...state.checks, id];
		state = {
			...state,
			checks
		};
		emit();
	}, []);
	const toggleCompanion = (0, import_react.useCallback)((id) => {
		const companions = state.companions.includes(id) ? state.companions.filter((item) => item !== id) : [...state.companions, id];
		state = {
			...state,
			companions
		};
		emit();
	}, []);
	return {
		...value,
		setZone,
		toggleCheck,
		toggleCompanion
	};
}
var toneClass = {
	cold: "bg-field text-muted",
	sow: "bg-leaf text-paper",
	pick: "bg-clay text-paper",
	both: "bg-leaf text-paper border-b-4 border-clay",
	hot: "bg-clay-soft text-clay",
	gap: "bg-paper text-muted border border-line"
};
var toneShort = {
	cold: "Cold",
	sow: "Sow",
	pick: "Pick",
	both: "Both",
	hot: "Hot",
	gap: "Rest"
};
function Plate({ src, alt, caption }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "print-block my-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "w-full rounded-sheet object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-3 text-sm text-muted",
			children: caption
		})]
	});
}
function Chapter({ id, num, title, lede, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		"aria-labelledby": `${id}-title`,
		className: "scroll-mt-24 border-t border-line py-14 md:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: num
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: `${id}-title`,
				className: "mt-3 max-w-xl font-display text-4xl text-ink md:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "chapter-lead mt-6 max-w-2xl text-lg text-ink",
				children: lede
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 max-w-2xl space-y-5 text-ink",
				children
			})
		]
	});
}
function Book() {
	const garden = useGarden();
	const zone = zoneById(garden.zone);
	const [current, setCurrent] = (0, import_react.useState)("cover");
	const [openNav, setOpenNav] = (0, import_react.useState)(false);
	const [group, setGroup] = (0, import_react.useState)("all");
	(0, import_react.useEffect)(() => {
		const ids = ["cover", ...chapters.map((chapter) => chapter.id)];
		const onScroll = () => {
			const line = 128;
			let next = "cover";
			for (const id of ids) {
				const node = document.getElementById(id);
				if (!node) continue;
				if (node.getBoundingClientRect().top <= line) next = id;
			}
			setCurrent(next);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	function go(id) {
		setOpenNav(false);
		setCurrent(id);
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
	const shown = varieties.filter((variety) => group === "all" || variety.group === group);
	const hotZone = Number(garden.zone) >= 7;
	const picked = new Set(garden.companions);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-field text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "no-print sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "grid size-11 place-items-center rounded-full border border-line bg-paper lg:hidden",
						"aria-expanded": openNav,
						"aria-controls": "contents",
						onClick: () => setOpenNav((value) => !value),
						children: [openNav ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-5",
							"aria-hidden": "true"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							className: "size-5",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Contents"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#cover",
						className: "flex min-w-0 items-center gap-2",
						onClick: (event) => {
							event.preventDefault();
							go("cover");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
							className: "size-5 shrink-0 text-leaf",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate font-display text-lg",
							children: "Lettuce"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "ml-auto flex items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-muted sm:inline",
							children: "Your zone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							"aria-label": "USDA hardiness zone",
							className: "h-11 rounded-full border border-line bg-paper px-3 font-display text-ink",
							value: garden.zone,
							onChange: (event) => garden.setZone(event.target.value),
							children: zones.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: item.id,
								children: ["Zone ", item.id]
							}, item.id))
						})]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl lg:grid-cols-[15rem_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				id: "contents",
				"aria-label": "Contents",
				className: `no-print border-line bg-field px-4 py-4 lg:sticky lg:top-16 lg:block lg:h-[calc(100vh-4rem)] lg:overflow-auto lg:border-r lg:px-0 lg:py-8 ${openNav ? "block border-b" : "hidden"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker px-4",
					children: "Contents"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-4 space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => go("cover"),
						className: `flex min-h-11 w-full items-center px-4 text-left ${current === "cover" ? "bg-leaf-soft text-leaf" : "text-ink"}`,
						children: "Cover"
					}) }), chapters.map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => go(chapter.id),
						className: `flex min-h-11 w-full items-baseline gap-3 px-4 text-left ${current === chapter.id ? "bg-leaf-soft text-leaf" : "text-ink"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-6 font-display text-sm text-muted",
							children: chapter.num
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: chapter.title })]
					}) }, chapter.id))]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "min-w-0 bg-paper px-5 pb-24 sm:px-8 lg:px-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						id: "cover",
						className: "scroll-mt-24 grid items-end gap-8 py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:py-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/book/cover.jpg",
							alt: "Butterhead, romaine, and red oakleaf lettuce with a few seeds on a linen cloth",
							className: "aspect-[3/4] w-full rounded-sheet object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "A grower's book of lettuce"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 font-display text-5xl text-ink md:text-6xl",
								children: "Lettuce"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-xl",
								children: "by Blue and the Awesome Dudes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm",
								children: "The Education Revolution Pocket Guide, Volume 20: Lettuce"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-md text-lg text-muted",
								children: "How to sow it, how long your zone will let you keep it, when to cut for the bowl, and how to bring the best plants back as seed."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-8 grid grid-cols-2 gap-4 border-t border-line pt-6 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Reading for"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "font-display text-2xl",
									children: ["Zone ", zone.id]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Last spring frost"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-display text-xl leading-snug",
									children: zone.lastFrost
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => go("plant"),
								className: "mt-8 inline-flex min-h-11 items-center bg-leaf px-5 text-paper",
								children: "Begin with the plant"
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chapter, {
						id: "start",
						num: "00",
						title: "Start here",
						lede: "New to lettuce?",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "list-decimal space-y-3 pl-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Set your zone at the top." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sow in cool weather, spring and fall." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Press the seed onto the surface, barely covered, and keep it moist." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Thin so the plants have room." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Water evenly and give afternoon shade as it warms." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Harvest in the morning." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "For seed, let your best open-pollinated plants bolt and keep varieties 10 to 20 feet apart." })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
						id: "plant",
						num: "01",
						title: "What lettuce actually is",
						lede: "Lettuce is a cool-season annual, Lactuca sativa, in the daisy family. It wants the same weather you want on a bright day in April: days near 60 to 65°F (16 to 18°C), nights cooler than that, and soil that never quite dries.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Give it that, and a sowing is salad in a month and a half. Give it heat, long days, or a week of drought, and the plant changes jobs. The center rises, a stalk races up, and the leaves turn bitter. That bitterness is real chemistry — milky latex full of compounds like lactucin — and it is the plant spending itself on seed. You cannot talk a bolting lettuce back into a head. You can eat it today, or you can let it become next year's packet." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This book follows both endings. The kitchen cut comes first, because that is why you sowed it. The seed crop comes later, from plants you chose on purpose and then left alone." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
								src: "/book/garden.jpg",
								alt: "Rows of green and red lettuce in a kitchen garden edged with alyssum and calendula",
								caption: "Plate 1. A spring bed in the weather lettuce prefers: cool, bright, and recently watered."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl",
								children: "What the seed needs before it is a plant"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "list-disc space-y-2 pl-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Soil temperature from about 40°F (4°C), slow and grudging, up to a happy 60–68°F (16–20°C), where seed is often up in a few days." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Above roughly 75–80°F (24–27°C), many varieties slip into thermodormancy and simply refuse. Shade, evening sowing, and a few days in the refrigerator can break that refusal. Hot soil plus a dry crust will not." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A cover no deeper than ⅛ inch (3 mm). Lettuce seed sprouts best with some light reaching it, so press it onto the surface and barely cover it. Seed that is buried is seed that is late." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Steady surface moisture until the cotyledons open. After that, deep and even beats a daily sprinkle." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A USDA zone, which you can set at the top of this book, describes the coldest night of winter, not the week your lettuce turns bitter. Seattle and Atlanta can share a zone number and not share a sowing date. Use the calendar in chapter 3 as a map, then believe your soil thermometer and the first week of real heat." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
						id: "kinds",
						num: "02",
						title: "Six kinds, and why the days matter",
						lede: "The packet is a promise about time. A looseleaf can be eaten in 30 days as baby leaves, or as a loose plant in 45. A crisphead may ask for 80 or 90 cool days it will never get. Match the plant to the length of your cool window, not to a picture on a seed rack.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
								src: "/book/types.jpg",
								alt: "Five lettuce types laid in a row: oakleaf, butterhead, romaine, crisphead, and red leaf",
								caption: "Plate 2. Oakleaf, butterhead, romaine, a pale crisphead, and red leaf. Same species, different calendars."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									[
										"Looseleaf",
										"40–55 days",
										"No head to wait for. Cut outer leaves, or shear baby leaves an inch above the crown and let them return."
									],
									[
										"Butterhead",
										"55–65 days",
										"A soft, loose head — Bibb, Boston, Buttercrunch. Sweet, and quicker than romaine. Excellent in a frame."
									],
									[
										"Romaine",
										"60–75 days",
										"Upright, with a pale heart if you give it time. Little Gem finishes earlier than a full cos."
									],
									[
										"Crisphead",
										"75–90 days",
										"The tight pale head. It wants a long, even cool season. In hot zones it is mostly a disappointment."
									],
									[
										"Summer crisp",
										"50–65 days",
										"Batavian types. They stay open, then thicken, and they bolt more slowly when heat arrives early."
									],
									[
										"Stem lettuce",
										"75–90 days",
										"Celtuce, grown for the peeled stalk more than the leaves. Sow it as its own crop, with the same cool-season rules."
									]
								].map(([name, days, copy]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "border border-line bg-paper p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-xl",
											children: name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-leaf",
											children: days
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm",
											children: copy
										})
									]
								}, name))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Days on a packet are from a direct sowing in good weather. A transplant does not shorten the plant's life; it only moves the start indoors. In fall, add ten to fourteen days, because the light is leaving." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2 pt-2",
								role: "group",
								"aria-label": "Filter varieties",
								children: [
									"all",
									"leaf",
									"butter",
									"romaine",
									"crisp",
									"summer"
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-pressed": group === item,
									onClick: () => setGroup(item),
									className: `min-h-11 px-3 text-sm ${group === item ? "bg-leaf text-paper" : "border border-line bg-paper"}`,
									children: item === "all" ? "All kinds" : groupLabel[item]
								}, item))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "divide-y divide-line border-y border-line",
								children: shown.map((variety) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "py-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-baseline justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-xl",
												children: variety.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-sm text-muted",
												children: [
													groupLabel[variety.group],
													" · ",
													variety.days,
													" days"
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2",
											children: variety.note
										}),
										hotZone && variety.heat === "high" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-sm text-leaf",
											children: [
												"A better fit for zone ",
												garden.zone,
												", where heat arrives early."
											]
										}) : null,
										hotZone && variety.heat === "low" && (variety.group === "crisp" || variety.name === "Tom Thumb") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-sm text-clay",
											children: [
												"Needs a cooler window than zone ",
												garden.zone,
												" usually offers."
											]
										}) : null
									]
								}, variety.name))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "These are open-pollinated varieties you can save seed from. If a packet says F1 or hybrid, grow it for the bowl and start from a new packet next time."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
						id: "zones",
						num: "03",
						title: "Zones for planting and picking",
						lede: "Set your zone once. The months below, and the dates in the rest of the book, follow it. Frost dates are typical, not a promise — a valley, a slope, and a courtyard can disagree by two weeks.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-3 gap-2 sm:grid-cols-5",
								role: "radiogroup",
								"aria-label": "Choose a USDA zone",
								children: zones.map((item) => {
									const selected = item.id === garden.zone;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										role: "radio",
										"aria-checked": selected,
										onClick: () => garden.setZone(item.id),
										className: `min-h-11 px-2 text-sm ${selected ? "bg-leaf text-paper" : "border border-line bg-paper"}`,
										children: ["Zone ", item.id]
									}, item.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-line bg-leaf-soft p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "kicker",
										children: ["Zone ", zone.id]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-3xl",
										children: zone.climate
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
										className: "mt-5 grid gap-4 sm:grid-cols-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-sm text-muted",
												children: "Spring sowing"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: zone.springSow })] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-sm text-muted",
												children: "Spring harvest"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: zone.springPick })] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-sm text-muted",
												children: "Fall sowing"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: zone.fallSow })] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-sm text-muted",
												children: "Fall and winter harvest"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: zone.fallPick })] })
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "grid grid-cols-6 gap-1.5 sm:grid-cols-12",
								"aria-label": `Month by month in zone ${zone.id}`,
								children: zone.months.map((tone, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: `flex min-h-16 flex-col items-center justify-center px-1 text-center text-xs ${toneClass[tone]}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-sm",
											children: monthNames[index]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sr-only",
											children: toneLabel[tone]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 leading-tight",
											"aria-hidden": "true",
											children: toneShort[tone]
										})
									]
								}, monthNames[index]))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Green is sowing" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Clay is harvest" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Green with a clay foot is both" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Warm wash is too hot" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Bare is cold or between crops" })
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: zone.summer }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Last spring frost, typically: ",
								zone.lastFrost,
								". First fall frost: ",
								zone.firstFrost,
								". Lettuce laughs at a light frost and dies in a hard freeze unless a cover or a frame is over it. In zones 7 through 10 the winter problem is usually a cold night, not a frozen month. In zones 3 and 4 the winter problem is the winter."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sow a little every ten to fourteen days inside the green months, not a year's seed on the first warm Saturday. Stop while the plants can still finish before heat or before a freeze. The last fall sowing should mature with two extra weeks on the packet's number." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
								src: "/book/seedlings.jpg",
								alt: "Lettuce seedlings in a wooden flat, cotyledons open and first true leaves beginning",
								caption: "Plate 3. First true leaves. This is the age to pot on, not the age to put outdoors unhardened."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
						id: "sowing",
						num: "04",
						title: "From the packet to the bed",
						lede: "Lettuce is easy once the surface of the soil stays moist and the spacing is honest. Most failures are a dry crust, a late thinning, or a transplant set out soft from a warm windowsill into a bright wind.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl",
								children: "Direct sow"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Rake a fine surface. Make a shallow drill, water the drill itself, then sow thinly and dust with ⅛ inch of fine soil or vermiculite. Vermiculite keeps the row visible and the surface from baking. Press, do not stomp. In your zone, the outdoor window is: ",
								zone.springSow.toLowerCase(),
								", and again ",
								zone.fallSow.toLowerCase(),
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Thin in two passes. At the first true leaves, leave an inch. At the fourth, leave the final space and eat the thinnings. Final spacing: looseleaf 4–6 inches (10–15 cm), butterhead 8–10 inches, romaine 10–12 inches, crisphead a full 12 inches. Rows 12–18 inches apart. Crowded lettuce bolts early and rots from the bottom." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl",
								children: "Indoors, when the ground is wrong"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Start seed four weeks before you can plant out — longer and the seedlings stall in the cell. Use a fine mix, barely covered. A bright cool room beats a hot mat; lettuce does not need tropical heat to germinate. Pot them on if roots fill the cell. Harden off for five to seven days: outside in bright shade, then a few hours of sun, then overnight if frost is done." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Set transplants at the same depth they grew. Do not bury the crown. Water them in. ",
								zone.springSet,
								". For the later crop: ",
								zone.fallSow,
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl",
								children: "Soil"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A loose bed with finished compost, pH about 6.0 to 6.8, drains and still holds water. Lettuce is a light feeder with a shallow root. Too much nitrogen grows soft leaves that tipburn and attract aphids. A pale plant can have a small side-dressing three weeks after transplanting. A dark, lush plant needs nothing but water." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "In a pot, use at least 6 inches (15 cm) of potting mix, not garden soil, and choose leaf lettuce or a small butterhead like Tom Thumb. Containers dry out faster than beds. That is the whole extra difficulty." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								className: "border-l-4 border-leaf bg-leaf-soft px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg",
									children: "Hot-soil trick for the fall sowing"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2",
									children: "If the bed is still above 80°F, chill the seed in a sealed bag in the refrigerator for three to five days, sow at dusk, cover the row with a board or a light shade until you see green, and do not let that strip dry once. This matters most in zones 7 and warmer."
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
						id: "tending",
						num: "05",
						title: "Water, heat, and the usual trouble",
						lede: "After thinning, lettuce is a crop of consistency. An inch of water a week, more in a warm wind, delivered in the morning so leaves dry. A wilted afternoon is how you grow bitter salad and brown leaf edges.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Mulch once the plants are big enough not to be lost under it — straw, leaves, or a fine compost. Mulch keeps the soil cool, which is half the battle against bolting, and it keeps heads off the wet dirt that rots them." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl",
								children: "Bolting"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Three things push the stalk: days longer than about fourteen hours, daytime heat much above 75–80°F (24–27°C), and stress, especially drought or crowding. The first sign is a tightening, elongating center, not the flower itself. Taste a leaf. If the bitterness is already there, harvest the bed for cooking or for the neighbors, and leave only the plants you marked for seed." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Shade on the west side, steady water, and a slow-bolting variety give you time. They do not repeal July. In zone ",
								zone.id,
								": ",
								zone.summer
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl",
								children: "What goes wrong, and the useful response"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-lg",
										children: "Aphids."
									}), " A hard spray of water, then flowering alyssum so hoverfly larvae stay on the payroll. Soap if a colony is winning. Broad insecticides also kill the larvae."] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-lg",
										children: "Slugs."
									}), " Evening walks with a bucket, iron phosphate if you must bait, and mulch pulled back from the crowns in a wet climate."] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-lg",
										children: "Tipburn."
									}), " Brown edges on the young inner leaves. It is almost always calcium failing to move into fast growth — uneven water or heat — not a soil that needs another bag of lime."] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-lg",
										children: "Downy mildew."
									}), " Yellow patches, white fuzz underneath, in cool wet weather. Space the plants, water in the morning, pull the worst leaves, and choose resistant varieties next time."] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-lg",
										children: "Lettuce drop and bottom rot."
									}), " A plant collapses at the soil, often with white mold or a slimy base. Remove plant and nearby soil. Do not compost it. Rotate away from lettuce for two or three years."] })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
						id: "kitchen",
						num: "06",
						title: "Cutting for the kitchen",
						lede: "Harvest in the morning, when the leaves are cold and full of water. That single habit matters more than the knife you use. Afternoon lettuce is already tired, and it will be tired in the bowl.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
								src: "/book/harvest.jpg",
								alt: "A wooden trug of freshly cut romaine, red leaf, and butterhead on a garden path",
								caption: "Plate 4. Cut while the dew is gone and the day is still cool. Do not wash it until you are ready to eat."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "list-disc space-y-2 pl-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Baby leaf: 21 to 30 days. Shear an inch above the crown. A good sowing returns two or three times, then tires." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Looseleaf: take outer leaves at 4 to 6 inches, or cut the whole plant when you need the space for the next sowing." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Heads: squeeze gently. You want firm, not splitting, and a center that has not started to rise. Butterhead is often ready around two months, romaine a bit later, crisphead only when the heart has actually filled." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"In zone ",
								zone.id,
								", expect the spring bowl ",
								zone.springPick.toLowerCase(),
								", and the later bowl ",
								zone.fallPick.toLowerCase(),
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Store it unwashed, in a container or perforated bag with a dry towel, as cold and as humid as the refrigerator allows without freezing. Leaf lettuce is a week. Romaine and a sound crisphead can go two. Wash when you eat." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Raw salad can carry germs like E. coli. Wash your hands first. Remove the outer and damaged leaves. Rinse the leaves under cool running water, or swish them in a clean bowl and lift them out. Do not use soap or bleach. Spin or pat dry. Keep cut lettuce cold. Never use fresh manure on a salad bed." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Lettuce is sensitive to ethylene, so keep it off the apples." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A light frost sweetens fall leaves. A hard freeze ruins them. If a real freeze is forecast and you have no cover, harvest and take the loss in the drawer rather than in the bed." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
						id: "seed",
						num: "07",
						title: "Harvesting seed, and keeping it",
						lede: "Lettuce pollinates itself. Each small yellow flower opens for a few hours on a single morning, then closes. Insects still move a little pollen between varieties, and wild prickly lettuce — Lactuca serriola — can join in. Home seed is honest if you give it a little distance and save it from plants worth repeating.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
								src: "/book/bolt.jpg",
								alt: "A bolted lettuce with a tall stalk, small yellow flowers, and white seed heads",
								caption: "Plate 5. The seed parent. Flowers open from the lower branches first, over several weeks."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
								className: "border border-line bg-field p-5",
								"aria-label": "Wild lettuce",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Wild lettuce (prickly lettuce, Lactuca serriola, and bitter lettuce, Lactuca virosa) grows as a roadside weed. It has milky sap, prickly leaf midribs, and small yellow flowers. It can cross with your lettuce, so pull it before it flowers near your seed crop. You may read online that wild lettuce is 'lettuce opium' or a natural sedative. This guide does NOT recommend eating, smoking, or making remedies from wild lettuce. The sap can cause poisoning, and the claims are not proven." })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
								className: "space-y-5 border-l border-line pl-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl",
										children: "Choose the parents before they flower"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1",
										children: "Mark six to twelve plants that look like the variety, taste right, and are among the last to bolt — not the first. Stop cutting their leaves. One plant will fill a jar and slowly narrow the variety. A small group keeps it."
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl",
										children: "Separate varieties"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1",
										children: "Extension guides commonly ask for 10 to 20 feet between lettuce varieties for home seed. Farther, or a simple cage, is better if you care about purity. Do not let wild prickly lettuce flower against the fence."
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl",
										children: "Let the stalk finish"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1",
										children: [
											"The stem runs two to five feet, branches, and bleeds milky sap if you cut it green. Flowers become a tan puff of white down, the pappus, with a firm seed at the base. Green or milky seed is not ready. In zone ",
											zone.id,
											": ",
											zone.seedCrop
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl",
										children: "Cut when most heads are fluffy"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1",
										children: "About two-thirds ripe is the moment. Wait for every head and the wind, and the finches, take the first and best seed. Cut on a dry day after dew is gone. Put the stalks in a paper bag, not plastic. Plastic sweats and the seed molds."
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl",
										children: "Clean the seed"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1",
										children: "Once the stalks are dry in the paper bag, shake and rub the heads inside the bag. Pour through a kitchen strainer, then gently blow or use a fan to lift away the white fluff (the pappus). Dry the clean seed a few more days before you jar it."
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl",
										children: "Dry, rub, winnow"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1",
										children: "Hang the bag or lay the stalks on a sheet indoors, out of direct sun, for one to two weeks, until crisp. Rub the heads. Pour the seed slowly in front of a fan over a tray — chaff blows, seed drops. Screen what remains. Seed may be cream, gray, brown, or black, depending on the variety. Black Seeded Simpson is named for a reason."
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl",
										children: "Dry again, then seal"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1",
										children: "Spread the clean seed in a thin layer until a seed snaps rather than bends. No oven, no hot dashboard. Heat kills the embryo more reliably than it dries it. Then the jar."
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
								src: "/book/seeds.jpg",
								alt: "Lettuce seeds in cream, gray, and black, some still attached to white fluff, beside a dried flower head",
								caption: "Plate 6. Clean seed. The white fluff is the pappus, not the part you sow."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
								src: "/book/pantry.jpg",
								alt: "A glass jar of lettuce seed on a cool pantry shelf with a plain envelope and a dried stalk",
								caption: "Plate 7. Airtight, labeled, and kept where the kitchen does not heat up."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl",
								children: "How to store it"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "An airtight glass jar, with the seed in a paper envelope inside so the label cannot separate from the seed. Variety, year, and bed: “Buttercrunch · west bed · 2026.” Add a dry silica packet in a humid climate, but never seal seed that still feels cool and limp." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Cool, dark, and dry. A closet that stays steady is good. A refrigerator is better if the jar is truly sealed — let the closed jar warm to room temperature before you open it, or damp kitchen air condenses on cold seed and undoes the year. The old rule still holds: temperature in degrees Fahrenheit plus relative humidity should stay under 100. Do not keep the jar in a greenhouse or a shed that bakes." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden border border-line",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full text-left text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
											className: "sr-only",
											children: "How long lettuce seed keeps"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
											className: "bg-field text-ink",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-3 py-3 font-display text-base font-medium",
												children: "Where it lives"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-3 py-3 font-display text-base font-medium",
												children: "Good germination"
											})] })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "border-t border-line",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-3 py-3",
													children: "Paper envelope in a dry room"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-3 py-3",
													children: "About 2–3 years"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "border-t border-line",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-3 py-3",
													children: "Airtight jar, cool and dark"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-3 py-3",
													children: "About 3–5 years"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "border-t border-line",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-3 py-3",
													children: "Airtight jar in the refrigerator, seed fully dry"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-3 py-3",
													children: "Often 5–6 years"
												})]
											})
										] })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Before you trust old seed, test ten seeds on a damp towel in a bag at room temperature. Read it at seven days. Under about seventy percent, sow more thickly or replace the lot. Pelleted seed is best the season it was packed; the clay coat drinks moisture in storage." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								className: "border border-line p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										className: "px-2 font-display text-xl",
										children: "Seed-saving list for this garden"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "px-2 text-sm text-muted",
										children: [
											garden.checks.length,
											" of ",
											seedChecks.length,
											" kept. Stays on this device."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-2",
										children: seedChecks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "border-t border-line",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												"aria-pressed": garden.checks.includes(item.id),
												onClick: () => garden.toggleCheck(item.id),
												className: "flex min-h-11 w-full items-start gap-3 py-3 text-left",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													"aria-hidden": "true",
													className: `mt-0.5 grid size-5 shrink-0 place-items-center border ${garden.checks.includes(item.id) ? "border-leaf bg-leaf text-paper" : "border-line bg-paper"}`,
													children: garden.checks.includes(item.id) ? "✓" : ""
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })]
											})
										}, item.id))
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
						id: "companions",
						num: "08",
						title: "Plants that help the bed",
						lede: "Some companions earn their place with evidence. Sweet alyssum does: its flowers raise hoverflies, and hoverfly larvae eat aphids. Most of the rest earn their place by sharing a season, a root depth, or a patch of afternoon shade. A few old pairings are only stories. Fennel is a genuine problem.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
								src: "/book/companions.jpg",
								alt: "Lettuce growing with chives, radish leaves, white alyssum, and an orange calendula",
								caption: "Plate 8. Lettuce with chives, radish, alyssum, and calendula. The flowers work. The radish is on a timer."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								role: "group",
								"aria-label": "Companions in the sample bed",
								children: companions.map((plant) => {
									const on = picked.has(plant.id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-pressed": on,
										onClick: () => garden.toggleCompanion(plant.id),
										className: `min-h-11 px-3 text-sm ${on ? "bg-leaf text-paper" : "border border-line"}`,
										children: plant.name
									}, plant.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bed, { on: picked }),
							picked.size > 5 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-clay",
								children: "This bed is getting social. Companions should frame the lettuce, not replace it. Five neighbors is already a crowd in a four-by-eight."
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-6",
								children: companions.map((plant) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl",
										children: plant.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-leaf",
										children: plant.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2",
										children: plant.help
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-muted",
										children: plant.how
									})
								] }, plant.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl",
								children: "Keep these apart"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-3",
								children: avoidList.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-lg",
										children: [item.name, "."]
									}),
									" ",
									item.why
								] }, item.name))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "For spinach, kale, arugula, and other greens, see Volume 3: Greens. For peas, see the Peas volume." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
						id: "year",
						num: "09",
						title: `A year in zone ${zone.id}`,
						lede: `${zone.climate}. This is the whole book on one page for the zone you chose. Change the zone at the top and the year changes with it.`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl",
									children: "Start"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									zone.springSow,
									". ",
									zone.springSet,
									"."
								] })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl",
									children: "Eat the spring crop"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [zone.springPick, ". Sow every ten to fourteen days while the chart in chapter 3 is still green, then stop."] })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl",
									children: "Leave the best plants"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: zone.seedCrop })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl",
									children: "Cross the hot middle"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: zone.summer })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl",
									children: "Sow again"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [zone.fallSow, "."] })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl",
									children: "Eat the late crop"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [zone.fallPick, ". Cover what a light frost would otherwise end."] })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl",
									children: "What to grow here"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: zone.prefer })] })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "border-t border-line pt-6 text-muted",
							children: [
								"Frost, as a typical range: last in spring ",
								zone.lastFrost.toLowerCase(),
								"; first in fall ",
								zone.firstFrost.toLowerCase(),
								". If your garden disagrees, believe the garden."
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chapter, {
						id: "glossary",
						num: "10",
						title: "Glossary",
						lede: "The words this book uses when it talks about sowing, heat, and seed.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-display text-xl",
									children: "Bolting"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Sending up a flower stalk; the leaves turn bitter." })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-display text-xl",
									children: "Thermodormancy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Seed refusing to sprout when the soil is too hot." })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-display text-xl",
									children: "Pappus"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "The white fluff attached to lettuce seed." })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-display text-xl",
									children: "Open-pollinated (OP)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Seed that grows true." })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-display text-xl",
									children: "F1 hybrid"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "A cross. Saved seed won't grow true." })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-display text-xl",
									children: "Isolation"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Distance between varieties to prevent crossing." })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-display text-xl",
									children: "Tipburn"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Brown leaf edges from calcium not reaching fast-growing leaves." })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-display text-xl",
									children: "Cut-and-come-again"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Harvesting outer leaves so the plant regrows." })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-display text-xl",
									children: "Succession sowing"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Sowing a little every 1 to 2 weeks." })] })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
						id: "about",
						num: "11",
						title: "About and disclaimer",
						lede: "This pocket guide is for learning.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Check your local county extension office for advice in your area." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Never eat a wild plant you cannot identify for certain." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Blue and the Awesome Dudes are not responsible for illness, injury, or crop loss." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Part of The Education Revolution pocket guide series." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "border-t border-line py-10 text-sm text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Privacy: This guide does not collect your name, email, or any personal information. Your zone choice is saved only on your own device." })
					})
				]
			})]
		})]
	});
}
function Bed({ on }) {
	const cells = [
		on.has("radish") ? "Radish" : "Lettuce",
		on.has("chives") ? "Chives" : "Lettuce",
		"Lettuce",
		on.has("calendula") ? "Calendula" : "Lettuce",
		on.has("carrot") ? "Carrot" : "Lettuce",
		"Lettuce",
		on.has("cilantro") ? "Cilantro" : "Lettuce",
		"Lettuce"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-line bg-leaf-soft p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "A four-by-eight, seen from the south. West is the far edge."
			}),
			(on.has("shade") || on.has("peas")) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 bg-leaf px-3 py-2 text-sm text-paper",
				children: on.has("shade") ? "West edge · sunflower, corn, or 30% shade cloth" : "West edge · a low pea trellis"
			}),
			on.has("alyssum") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-center text-sm text-leaf",
				children: "Sweet alyssum"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid grid-cols-4 gap-2",
				children: cells.map((label, index) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: `grid min-h-14 place-items-center px-1 text-center text-sm ${label !== "Lettuce" ? "bg-clay text-paper" : "bg-paper text-ink"}`,
						children: label
					}, `${label}-${index}`);
				})
			}),
			on.has("alyssum") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-center text-sm text-leaf",
				children: "Sweet alyssum"
			}) : null,
			on.has("nasturtium") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 bg-clay-soft px-3 py-2 text-sm text-clay",
				children: "Nasturtium at the path end, outside the lettuce, where you can pull it."
			}) : null
		]
	});
}
var SplitComponent = Book;
//#endregion
export { SplitComponent as component };
