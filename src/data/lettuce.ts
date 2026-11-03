export const chapters = [
  { id: "start", num: "00", title: "Start here" },
  { id: "plant", num: "01", title: "The plant" },
  { id: "kinds", num: "02", title: "Six kinds" },
  { id: "zones", num: "03", title: "Zones" },
  { id: "sowing", num: "04", title: "Sowing" },
  { id: "tending", num: "05", title: "In the bed" },
  { id: "kitchen", num: "06", title: "The kitchen cut" },
  { id: "seed", num: "07", title: "Saving seed" },
  { id: "companions", num: "08", title: "Companions" },
  { id: "year", num: "09", title: "Your year" },
  { id: "glossary", num: "10", title: "Glossary" },
  { id: "about", num: "11", title: "About" },
] as const;

export type ChapterId = (typeof chapters)[number]["id"];

export type Tone = "cold" | "sow" | "pick" | "both" | "hot" | "gap";

export type ZoneId = "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11";

export type ZoneGuide = {
  id: ZoneId;
  label: string;
  climate: string;
  lastFrost: string;
  firstFrost: string;
  springSow: string;
  springSet: string;
  springPick: string;
  fallSow: string;
  fallPick: string;
  summer: string;
  seedCrop: string;
  prefer: string;
  months: Tone[];
};

export const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const toneLabel: Record<Tone, string> = {
  cold: "Too cold outdoors",
  sow: "Sow",
  pick: "Harvest",
  both: "Sow and harvest",
  hot: "Too hot for quality",
  gap: "Between seasons",
};

export const zones: ZoneGuide[] = [
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
    months: ["cold", "cold", "cold", "sow", "sow", "pick", "hot", "sow", "pick", "cold", "cold", "cold"],
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
    months: ["cold", "cold", "cold", "sow", "sow", "pick", "hot", "sow", "pick", "pick", "cold", "cold"],
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
    months: ["cold", "cold", "sow", "sow", "pick", "pick", "hot", "sow", "pick", "pick", "cold", "cold"],
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
    months: ["cold", "sow", "sow", "both", "pick", "pick", "hot", "sow", "pick", "pick", "pick", "cold"],
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
    months: ["cold", "sow", "sow", "pick", "pick", "hot", "hot", "sow", "sow", "pick", "pick", "pick"],
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
    months: ["both", "sow", "both", "pick", "pick", "hot", "hot", "gap", "sow", "sow", "pick", "pick"],
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
    months: ["both", "both", "pick", "pick", "hot", "hot", "hot", "hot", "sow", "sow", "both", "both"],
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
    months: ["both", "both", "pick", "pick", "hot", "hot", "hot", "hot", "gap", "sow", "sow", "both"],
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
    months: ["both", "pick", "hot", "hot", "hot", "hot", "hot", "hot", "hot", "gap", "sow", "sow"],
  },
];

export type VarietyGroup = "leaf" | "butter" | "romaine" | "crisp" | "summer";

export type Variety = {
  name: string;
  group: VarietyGroup;
  days: string;
  heat: "low" | "fair" | "high";
  note: string;
};

export const groupLabel: Record<VarietyGroup, string> = {
  leaf: "Looseleaf",
  butter: "Butterhead",
  romaine: "Romaine",
  crisp: "Crisphead",
  summer: "Summer crisp",
};

export const varieties: Variety[] = [
  {
    name: "Black Seeded Simpson",
    group: "leaf",
    days: "45–55",
    heat: "low",
    note: "The old early benchmark. Pale, mild, and fast. It bolts before modern leaf types, so sow it first and eat it young.",
  },
  {
    name: "Salad Bowl",
    group: "leaf",
    days: "45–55",
    heat: "fair",
    note: "Lobed oakleaf for cut-and-come-again. Holds a bit longer into warmth than Simpson, and a few plants fill a bowl.",
  },
  {
    name: "Red Sails",
    group: "leaf",
    days: "45–55",
    heat: "fair",
    note: "Bronze-red and ruffled. Color deepens in cool light. Useful where you want a spring crop that does not rush to flower.",
  },
  {
    name: "Buttercrunch",
    group: "butter",
    days: "55–65",
    heat: "fair",
    note: "A small dense butterhead with a thick midrib. The standard for flavor, and more patient in a warming May than Bibb.",
  },
  {
    name: "Tom Thumb",
    group: "butter",
    days: "50–60",
    heat: "low",
    note: "A tennis-ball head for pots and cold frames. One plant is a salad for one person. It wants cool weather.",
  },
  {
    name: "Merveille des Quatre Saisons",
    group: "butter",
    days: "55–65",
    heat: "low",
    note: "Red French butterhead, sweetest in cool spring and fall. The name promises four seasons; the plant prefers two.",
  },
  {
    name: "Parris Island Cos",
    group: "romaine",
    days: "65–75",
    heat: "fair",
    note: "A full upright romaine with a pale heart. Give it room and steady water or the outer leaves turn leathery.",
  },
  {
    name: "Little Gem",
    group: "romaine",
    days: "50–60",
    heat: "fair",
    note: "A mini romaine that finishes weeks before the large cos types. The right romaine where the cool window is short.",
  },
  {
    name: "Rouge d'Hiver",
    group: "romaine",
    days: "60–70",
    heat: "low",
    note: "A red winter romaine, handsome and cold-hardy. Sow it for the fall bed in zones 6 to 8.",
  },
  {
    name: "Great Lakes",
    group: "crisp",
    days: "75–90",
    heat: "low",
    note: "An older open-pollinated crisphead. It needs a long, genuinely cool stretch. Wrong plant for zones 9 and warmer.",
  },
  {
    name: "Nevada",
    group: "summer",
    days: "55–65",
    heat: "high",
    note: "A batavia that stays open, then thickens, and resists bitterness longer than most. Plant it at the hot edge of your season.",
  },
  {
    name: "Muir",
    group: "summer",
    days: "50–60",
    heat: "high",
    note: "Bred to be slow to bolt. The one to sow last in spring and first when a hot fall soil finally cools at night.",
  },
];

export type CompanionId =
  | "alyssum"
  | "calendula"
  | "chives"
  | "radish"
  | "carrot"
  | "peas"
  | "cilantro"
  | "shade"
  | "nasturtium";

export type Companion = {
  id: CompanionId;
  name: string;
  role: string;
  help: string;
  how: string;
};

export const companions: Companion[] = [
  {
    id: "alyssum",
    name: "Sweet alyssum",
    role: "Best documented",
    help: "Flowering alyssum is a serious insectary, not folklore. Hoverflies lay eggs where the flowers are, and their larvae eat aphids. University work in commercial lettuce has used it for that reason.",
    how: "Sow a ribbon along the bed, or a plant every two or three feet. It stays low and will not swallow the lettuce.",
  },
  {
    id: "calendula",
    name: "Calendula",
    role: "Beneficials, and you can eat it",
    help: "The flowers bring the same useful flies and wasps, and the petals go into the salad you grew them beside. Evidence is softer than for alyssum, and the habit is old because it works well enough.",
    how: "A few plants at the corners. Deadhead if you want more bloom and fewer calendula volunteers.",
  },
  {
    id: "chives",
    name: "Chives and bunching onions",
    role: "A upright neighbor",
    help: "They take almost no horizontal room, and the pungent leaves are thought to muddle aphids. Treat that as a bonus. The real gift is a second crop that does not fight lettuce for space.",
    how: "A single line down one side, not a mat. Garlic chives work the same way.",
  },
  {
    id: "radish",
    name: "Radishes",
    role: "A timing companion",
    help: "Radishes are up in a few days, mark the row, and are pulled in about a month — just as lettuce needs the inches. This is choreography, not pest control.",
    how: "Sow them in the lettuce row the same day. Pull on time. A forgotten radish becomes a shady bully.",
  },
  {
    id: "carrot",
    name: "Carrots",
    role: "Two depths, one bed",
    help: "Lettuce shades the soil while slow carrot seed germinates. Later the carrots use deeper ground. They are compatible, not magical.",
    how: "Sow carrots a little thinner than usual and harvest the lettuce before the roots need the whole bed.",
  },
  {
    id: "peas",
    name: "Peas",
    role: "Spring shade and a little nitrogen",
    help: "A low trellis on the west side of a spring bed throws afternoon shade as the weather warms, and the roots leave nitrogen behind. Peas and lettuce share a cool season, then leave together.",
    how: "Keep the trellis from blocking morning sun. Bush peas can sit at the edge without a fence.",
  },
  {
    id: "cilantro",
    name: "Cilantro or dill",
    role: "Flowers at the end of the bed",
    help: "Umbels feed hoverflies and parasitic wasps. Both herbs bolt in the same heat that ends the lettuce, which is convenient if you meant to save nothing but seed and flowers.",
    how: "Let two or three plants flower at the south or west end. Do not let dill self-sow into a thicket.",
  },
  {
    id: "shade",
    name: "A shade edge",
    role: "The companion that extends the season",
    help: "Afternoon shade is the most reliable way to keep lettuce sweet an extra week or two. A row of sunflowers, corn, or trellised beans on the west side does it. So does 30 to 40 percent shade cloth, which is more predictable.",
    how: "Put the tall crop or the cloth on the west. Morning sun should still reach the leaves.",
  },
  {
    id: "nasturtium",
    name: "Nasturtium",
    role: "A trap, if you watch it",
    help: "Aphids often settle on nasturtium first. That only helps if you notice. A neglected plant is an aphid nursery that spills onto the lettuce.",
    how: "Plant it at the path end of the bed, not in the row. Knock aphids off or pull the plant if they win.",
  },
];

export const avoidList = [
  {
    name: "Fennel",
    why: "It inhibits a long list of neighbors, lettuce included. Give it a pot or a far corner of the garden.",
  },
  {
    name: "A second lettuce crop in sick soil",
    why: "If you had lettuce drop, bottom rot, or a bad run of downy mildew, do not follow lettuce with lettuce. Rotate two to three years.",
  },
  {
    name: "A huge, thirsty summer crop overhead",
    why: "Mature tomatoes, potatoes, and squash steal water and rain disease onto the leaves. The seasons usually separate you. Do not force them together.",
  },
  {
    name: "Mint in the ground",
    why: "The scent is pleasant and the roots are a takeover. Pot it, or do not plant it.",
  },
];

export const seedChecks = [
  { id: "op", label: "Packet is open-pollinated or heirloom, not an F1 hybrid" },
  { id: "plants", label: "Marked six to twelve slow, true-to-type plants and stopped cutting them" },
  { id: "space", label: "Varieties stand at least 10 to 20 feet apart, and wild prickly lettuce is not flowering nearby" },
  { id: "cut", label: "Cut stalks when most heads are fluffy and dry, before wind takes the first seed" },
  { id: "dry", label: "Dried crisp indoors, then winnowed, before the jar was sealed" },
  { id: "label", label: "Labeled with variety, year, and which bed it came from" },
  { id: "store", label: "Stored airtight, cool, dark, and dry — jar warmed to room temperature before opening" },
];

export function zoneById(id: ZoneId) {
  return zones.find((z) => z.id === id) ?? zones[3];
}
