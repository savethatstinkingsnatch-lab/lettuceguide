import { useEffect, useState, type ReactNode } from "react";
import { Leaf, Menu, X } from "lucide-react";
import {
  avoidList,
  chapters,
  companions,
  groupLabel,
  monthNames,
  seedChecks,
  toneLabel,
  varieties,
  zoneById,
  zones,
  type ChapterId,
  type Tone,
  type VarietyGroup,
  type ZoneId,
} from "@/data/lettuce";
import { useGarden } from "@/lib/garden";

const toneClass: Record<Tone, string> = {
  cold: "bg-field text-muted",
  sow: "bg-leaf text-paper",
  pick: "bg-clay text-paper",
  both: "bg-leaf text-paper border-b-4 border-clay",
  hot: "bg-clay-soft text-clay",
  gap: "bg-paper text-muted border border-line",
};

const toneShort: Record<Tone, string> = {
  cold: "Cold",
  sow: "Sow",
  pick: "Pick",
  both: "Both",
  hot: "Hot",
  gap: "Rest",
};

function Plate({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="print-block my-8">
      <img src={src} alt={alt} className="w-full rounded-sheet object-cover" />
      <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}

function Chapter({
  id,
  num,
  title,
  lede,
  children,
}: {
  id: string;
  num: string;
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 border-t border-line py-14 md:py-20">
      <p className="kicker">{num}</p>
      <h2 id={`${id}-title`} className="mt-3 max-w-xl font-display text-4xl text-ink md:text-5xl">
        {title}
      </h2>
      <p className="chapter-lead mt-6 max-w-2xl text-lg text-ink">{lede}</p>
      <div className="mt-6 max-w-2xl space-y-5 text-ink">{children}</div>
    </section>
  );
}

export function Book() {
  const garden = useGarden();
  const zone = zoneById(garden.zone);
  const [current, setCurrent] = useState<ChapterId | "cover">("cover");
  const [openNav, setOpenNav] = useState(false);
  const [group, setGroup] = useState<VarietyGroup | "all">("all");

  useEffect(() => {
    const ids = ["cover", ...chapters.map((chapter) => chapter.id)];
    const onScroll = () => {
      const line = 128;
      let next: ChapterId | "cover" = "cover";
      for (const id of ids) {
        const node = document.getElementById(id);
        if (!node) continue;
        if (node.getBoundingClientRect().top <= line) next = id as ChapterId | "cover";
      }
      setCurrent(next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function go(id: ChapterId | "cover") {
    setOpenNav(false);
    setCurrent(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const shown = varieties.filter((variety) => group === "all" || variety.group === group);
  const hotZone = Number(garden.zone) >= 7;
  const picked = new Set(garden.companions);

  return (
    <div className="min-h-screen bg-field text-ink">
      <header className="no-print sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-line bg-paper lg:hidden"
            aria-expanded={openNav}
            aria-controls="contents"
            onClick={() => setOpenNav((value) => !value)}
          >
            {openNav ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">Contents</span>
          </button>
          <a
            href="#cover"
            className="flex min-w-0 items-center gap-2"
            onClick={(event) => {
              event.preventDefault();
              go("cover");
            }}
          >
            <Leaf className="size-5 shrink-0 text-leaf" aria-hidden="true" />
            <span className="truncate font-display text-lg">Lettuce</span>
          </a>
          <label className="ml-auto flex items-center gap-2 text-sm">
            <span className="hidden text-muted sm:inline">Your zone</span>
            <select
              aria-label="USDA hardiness zone"
              className="h-11 rounded-full border border-line bg-paper px-3 font-display text-ink"
              value={garden.zone}
              onChange={(event) => garden.setZone(event.target.value as ZoneId)}
            >
              {zones.map((item) => (
                <option key={item.id} value={item.id}>
                  Zone {item.id}
                </option>
              ))}
            </select>
          </label>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl lg:grid-cols-[15rem_minmax(0,1fr)]">
        <nav
          id="contents"
          aria-label="Contents"
          className={`no-print border-line bg-field px-4 py-4 lg:sticky lg:top-16 lg:block lg:h-[calc(100vh-4rem)] lg:overflow-auto lg:border-r lg:px-0 lg:py-8 ${openNav ? "block border-b" : "hidden"}`}
        >
          <p className="kicker px-4">Contents</p>
          <ol className="mt-4 space-y-1">
            <li>
              <button
                type="button"
                onClick={() => go("cover")}
                className={`flex min-h-11 w-full items-center px-4 text-left ${current === "cover" ? "bg-leaf-soft text-leaf" : "text-ink"}`}
              >
                Cover
              </button>
            </li>
            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <button
                  type="button"
                  onClick={() => go(chapter.id)}
                  className={`flex min-h-11 w-full items-baseline gap-3 px-4 text-left ${current === chapter.id ? "bg-leaf-soft text-leaf" : "text-ink"}`}
                >
                  <span className="w-6 font-display text-sm text-muted">{chapter.num}</span>
                  <span>{chapter.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </nav>

        <main className="min-w-0 bg-paper px-5 pb-24 sm:px-8 lg:px-12">
          <header id="cover" className="scroll-mt-24 grid items-end gap-8 py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:py-16">
            <img
              src="/book/cover.jpg"
              alt="Butterhead, romaine, and red oakleaf lettuce with a few seeds on a linen cloth"
              className="aspect-[3/4] w-full rounded-sheet object-cover"
            />
            <div>
              <p className="kicker">A grower's book of lettuce</p>
              <h1 className="mt-3 font-display text-5xl text-ink md:text-6xl">Lettuce</h1>
              <p className="mt-3 font-display text-xl">by Blue and the Awesome Dudes</p>
              <p className="mt-1 text-sm">The Education Revolution Pocket Guide, Volume 20: Lettuce</p>
              <p className="mt-5 max-w-md text-lg text-muted">
                How to sow it, how long your zone will let you keep it, when to cut for the bowl, and how to bring the best plants back as seed.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-6 text-sm">
                <div>
                  <dt className="text-muted">Reading for</dt>
                  <dd className="font-display text-2xl">Zone {zone.id}</dd>
                </div>
                <div>
                  <dt className="text-muted">Last spring frost</dt>
                  <dd className="font-display text-xl leading-snug">{zone.lastFrost}</dd>
                </div>
              </dl>
              <button type="button" onClick={() => go("plant")} className="mt-8 inline-flex min-h-11 items-center bg-leaf px-5 text-paper">
                Begin with the plant
              </button>
            </div>
          </header>

          <Chapter
            id="start"
            num="00"
            title="Start here"
            lede="New to lettuce?"
          >
            <ol className="list-decimal space-y-3 pl-5">
              <li>Set your zone at the top.</li>
              <li>Sow in cool weather, spring and fall.</li>
              <li>Press the seed onto the surface, barely covered, and keep it moist.</li>
              <li>Thin so the plants have room.</li>
              <li>Water evenly and give afternoon shade as it warms.</li>
              <li>Harvest in the morning.</li>
              <li>For seed, let your best open-pollinated plants bolt and keep varieties 10 to 20 feet apart.</li>
            </ol>
          </Chapter>

          <Chapter
            id="plant"
            num="01"
            title="What lettuce actually is"
            lede="Lettuce is a cool-season annual, Lactuca sativa, in the daisy family. It wants the same weather you want on a bright day in April: days near 60 to 65°F (16 to 18°C), nights cooler than that, and soil that never quite dries."
          >
            <p>
              Give it that, and a sowing is salad in a month and a half. Give it heat, long days, or a week of drought, and the plant changes jobs. The center rises, a stalk races up, and the leaves turn bitter. That bitterness is real chemistry — milky latex full of compounds like lactucin — and it is the plant spending itself on seed. You cannot talk a bolting lettuce back into a head. You can eat it today, or you can let it become next year's packet.
            </p>
            <p>
              This book follows both endings. The kitchen cut comes first, because that is why you sowed it. The seed crop comes later, from plants you chose on purpose and then left alone.
            </p>
            <Plate
              src="/book/garden.jpg"
              alt="Rows of green and red lettuce in a kitchen garden edged with alyssum and calendula"
              caption="Plate 1. A spring bed in the weather lettuce prefers: cool, bright, and recently watered."
            />
            <h3 className="font-display text-2xl">What the seed needs before it is a plant</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>Soil temperature from about 40°F (4°C), slow and grudging, up to a happy 60–68°F (16–20°C), where seed is often up in a few days.</li>
              <li>Above roughly 75–80°F (24–27°C) is a rough warning, not a hard stop. Varieties differ: high soil temperatures can inhibit germination, and lettuce seed also needs light. Keep the seedbed cool, lightly shaded, and evenly moist. A hot crust will not sprout.</li>
              <li>A cover no deeper than ⅛ inch (3 mm). Lettuce seed sprouts best with some light reaching it, so press it onto the surface and barely cover it. Seed that is buried is seed that is late.</li>
              <li>Steady surface moisture until the cotyledons open. After that, deep and even beats a daily sprinkle.</li>
            </ul>
            <p>
              A USDA zone, which you can set at the top of this book, describes the coldest night of winter, not the week your lettuce turns bitter. Seattle and Atlanta can share a zone number and not share a sowing date. The calendar in chapter 3 is a broad starting point. Adjust it for your frost dates, soil temperature, and hot spells.
            </p>
          </Chapter>

          <Chapter
            id="kinds"
            num="02"
            title="Six kinds, and why the days matter"
            lede="The packet is a promise about time. A looseleaf can be eaten in 30 days as baby leaves, or as a loose plant in 45. A crisphead may ask for 80 or 90 cool days it will never get. Match the plant to the length of your cool window, not to a picture on a seed rack."
          >
            <Plate
              src="/book/types.jpg"
              alt="Five lettuce types laid in a row: oakleaf, butterhead, romaine, crisphead, and red leaf"
              caption="Plate 2. Oakleaf, butterhead, romaine, a pale crisphead, and red leaf. Same species, different calendars."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {(
                [
                  ["Looseleaf", "40–55 days", "No head to wait for. Cut outer leaves, or shear baby leaves an inch above the crown and let them return."],
                  ["Butterhead", "55–65 days", "A soft, loose head — Bibb, Boston, Buttercrunch. Sweet, and quicker than romaine. Excellent in a frame."],
                  ["Romaine", "60–75 days", "Upright, with a pale heart if you give it time. Little Gem finishes earlier than a full cos."],
                  ["Crisphead", "75–90 days", "The tight pale head. It wants a long, even cool season. In hot zones it is mostly a disappointment."],
                  ["Summer crisp", "50–65 days", "Batavian types. They stay open, then thicken, and they bolt more slowly when heat arrives early."],
                  ["Stem lettuce", "75–90 days", "Celtuce, grown for the peeled stalk more than the leaves. Sow it as its own crop, with the same cool-season rules."],
                ] as const
              ).map(([name, days, copy]) => (
                <article key={name} className="border border-line bg-paper p-4">
                  <h3 className="font-display text-xl">{name}</h3>
                  <p className="mt-1 text-sm text-leaf">{days}</p>
                  <p className="mt-2 text-sm">{copy}</p>
                </article>
              ))}
            </div>
            <p>
              Days on a packet are an estimate. Check how the company counts them — some count from sowing, others from transplanting. A transplant does not shorten the plant's life; it only moves the start. In fall, add ten to fourteen days, because the light is leaving.
            </p>
            <div className="flex flex-wrap gap-2 pt-2" role="group" aria-label="Filter varieties">
              {(["all", "leaf", "butter", "romaine", "crisp", "summer"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={group === item}
                  onClick={() => setGroup(item)}
                  className={`min-h-11 px-3 text-sm ${group === item ? "bg-leaf text-paper" : "border border-line bg-paper"}`}
                >
                  {item === "all" ? "All kinds" : groupLabel[item]}
                </button>
              ))}
            </div>
            <ul className="divide-y divide-line border-y border-line">
              {shown.map((variety) => (
                <li key={variety.name} className="py-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl">{variety.name}</h3>
                    <p className="text-sm text-muted">
                      {groupLabel[variety.group]} · {variety.days} days
                    </p>
                  </div>
                  <p className="mt-2">{variety.note}</p>
                  {hotZone && variety.heat === "high" ? (
                    <p className="mt-2 text-sm text-leaf">A better fit for zone {garden.zone}, where heat arrives early.</p>
                  ) : null}
                  {hotZone && variety.heat === "low" && (variety.group === "crisp" || variety.name === "Tom Thumb") ? (
                    <p className="mt-2 text-sm text-clay">Needs a cooler window than zone {garden.zone} usually offers.</p>
                  ) : null}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted">
              These are open-pollinated varieties you can save seed from. If a packet says F1 or hybrid, grow it for the bowl and start from a new packet next time.
            </p>
          </Chapter>

          <Chapter
            id="zones"
            num="03"
            title="Zones for planting and picking"
            lede="Set your zone once. The months below, and the dates in the rest of the book, are broad starting points, not a local forecast. A USDA zone describes winter cold, not when the heat arrives. Adjust for your frost dates, soil temperature, and hot spells. A valley, a slope, and a courtyard can disagree by two weeks."
          >
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-5" role="radiogroup" aria-label="Choose a USDA zone">
              {zones.map((item) => {
                const selected = item.id === garden.zone;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => garden.setZone(item.id)}
                    className={`min-h-11 px-2 text-sm ${selected ? "bg-leaf text-paper" : "border border-line bg-paper"}`}
                  >
                    Zone {item.id}
                  </button>
                );
              })}
            </div>

            <div className="border border-line bg-leaf-soft p-5">
              <p className="kicker">Zone {zone.id}</p>
              <h3 className="mt-2 font-display text-3xl">{zone.climate}</h3>
              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-sm text-muted">Spring sowing</dt>
                  <dd>{zone.springSow}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Spring harvest</dt>
                  <dd>{zone.springPick}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Fall sowing</dt>
                  <dd>{zone.fallSow}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Fall and winter harvest</dt>
                  <dd>{zone.fallPick}</dd>
                </div>
              </dl>
            </div>

            <div>
              <ol className="grid grid-cols-6 gap-1.5 sm:grid-cols-12" aria-label={`Month by month in zone ${zone.id}`}>
                {zone.months.map((tone, index) => (
                  <li
                    key={monthNames[index]}
                    className={`flex min-h-16 flex-col items-center justify-center px-1 text-center text-xs ${toneClass[tone]}`}
                  >
                    <span className="font-display text-sm">{monthNames[index]}</span>
                    <span className="sr-only">{toneLabel[tone]}</span>
                    <span className="mt-1 leading-tight" aria-hidden="true">
                      {toneShort[tone]}
                    </span>
                  </li>
                ))}
              </ol>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
                <li>Green is sowing</li>
                <li>Clay is harvest</li>
                <li>Green with a clay foot is both</li>
                <li>Warm wash is too hot</li>
                <li>Bare is cold or between crops</li>
              </ul>
            </div>

            <p>{zone.summer}</p>
            <p>
              Last spring frost, typically: {zone.lastFrost}. First fall frost: {zone.firstFrost}. Lettuce can tolerate a light frost, and sometimes a light freeze. Injury depends on how quickly the temperature drops and how long it stays below freezing. Cover the plants when a freeze is forecast. In zones 7 through 10 the winter problem is usually a cold night, not a frozen month. In zones 3 and 4 the winter problem is the winter.
            </p>
            <p>
              Sow a little every ten to fourteen days inside the green months, not a year's seed on the first warm Saturday. Stop while the plants can still finish before heat or before a freeze. The last fall sowing should mature with two extra weeks on the packet's number.
            </p>
            <Plate
              src="/book/seedlings.jpg"
              alt="Lettuce seedlings in a wooden flat, cotyledons open and first true leaves beginning"
              caption="Plate 3. First true leaves. This is the age to pot on, not the age to put outdoors unhardened."
            />
          </Chapter>

          <Chapter
            id="sowing"
            num="04"
            title="From the packet to the bed"
            lede="Lettuce is easy once the surface of the soil stays moist and the spacing is honest. Most failures are a dry crust, a late thinning, or a transplant set out soft from a warm windowsill into a bright wind."
          >
            <h3 className="font-display text-2xl">Direct sow</h3>
            <p>
              Rake a fine surface. Make a shallow drill, water the drill itself, then sow thinly and dust with ⅛ inch of fine soil or vermiculite. Vermiculite keeps the row visible and the surface from baking. Press, do not stomp. In your zone, the outdoor window is: {zone.springSow.toLowerCase()}, and again {zone.fallSow.toLowerCase()}.
            </p>
            <p>
              Thin in two passes. At the first true leaves, leave an inch. At the fourth, leave the final space and eat the thinnings. Final spacing: looseleaf 4–6 inches (10–15 cm), butterhead 8–10 inches, romaine 10–12 inches, crisphead a full 12 inches. Rows 12–18 inches apart. Crowded lettuce bolts early and rots from the bottom.
            </p>
            <h3 className="font-display text-2xl">Indoors, when the ground is wrong</h3>
            <p>
              Start seed four weeks before you can plant out — longer and the seedlings stall in the cell. Use a fine mix, barely covered. A bright cool room beats a hot mat; lettuce does not need tropical heat to germinate. Pot them on if roots fill the cell. Harden off for five to seven days: outside in bright shade, then a few hours of sun, then overnight if frost is done.
            </p>
            <p>
              Set transplants at the same depth they grew. Do not bury the crown. Water them in. {zone.springSet}. For the later crop: {zone.fallSow}.
            </p>
            <h3 className="font-display text-2xl">Soil</h3>
            <p>
              A loose bed with finished compost, pH about 6.0 to 6.8, drains and still holds water. Lettuce is a light feeder with a shallow root. Excess nitrogen can encourage lush growth and aphids. Rapid growth, heat, and uneven moisture can contribute to tipburn. A pale plant can have a small side-dressing three weeks after transplanting. A dark, lush plant needs nothing but water.
            </p>
            <p>
              In a pot, use at least 6 inches (15 cm) of potting mix, not garden soil, and choose leaf lettuce or a small butterhead like Tom Thumb. Containers dry out faster than beds. That is the whole extra difficulty.
            </p>
            <aside className="border-l-4 border-leaf bg-leaf-soft px-4 py-3">
              <p className="font-display text-lg">When the soil is still hot</p>
              <p className="mt-2">
                If the bed is still warm, do not chill the seed in the refrigerator and call it fixed. Keep the seedbed cool, lightly shaded, and evenly moist: sow at dusk, cover the row with a board or light shade until you see green, and do not let that strip dry. This matters most in zones 7 and warmer.
              </p>
            </aside>
          </Chapter>

          <Chapter
            id="tending"
            num="05"
            title="Water, heat, and the usual trouble"
            lede="After thinning, lettuce is a crop of consistency. An inch of water a week, more in a warm wind, delivered in the morning so leaves dry. A wilted afternoon is how you grow bitter salad and brown leaf edges."
          >
            <p>
              Mulch once the plants are big enough not to be lost under it — straw, leaves, or a fine compost. Mulch keeps the soil cool, which is half the battle against bolting, and it keeps heads off the wet dirt that rots them.
            </p>
            <h3 className="font-display text-2xl">Bolting</h3>
            <p>
              Three things push the stalk: days longer than about fourteen hours, daytime heat much above 75–80°F (24–27°C), and stress, especially drought or crowding. The first sign is a tightening, elongating center, not the flower itself. Taste a leaf. If the bitterness is already there, harvest the bed for cooking or for the neighbors, and leave only the plants you marked for seed.
            </p>
            <p>
              Shade on the west side, steady water, and a slow-bolting variety give you time. They do not repeal July. In zone {zone.id}: {zone.summer}
            </p>
            <h3 className="font-display text-2xl">What goes wrong, and the useful response</h3>
            <ul className="space-y-4">
              <li>
                <span className="font-display text-lg">Aphids.</span> A hard spray of water, then flowering alyssum so hoverfly larvae stay on the payroll. Soap if a colony is winning. Broad insecticides also kill the larvae.
              </li>
              <li>
                <span className="font-display text-lg">Slugs.</span> Evening walks with a bucket, iron phosphate if you must bait, and mulch pulled back from the crowns in a wet climate.
              </li>
              <li>
                <span className="font-display text-lg">Tipburn.</span> Brown edges on the young inner leaves. It is almost always calcium failing to move into fast growth — uneven water or heat — not a soil that needs another bag of lime.
              </li>
              <li>
                <span className="font-display text-lg">Downy mildew.</span> Yellow patches, white fuzz underneath, in cool wet weather. Space the plants, water in the morning, pull the worst leaves, and choose resistant varieties next time.
              </li>
              <li>
                <span className="font-display text-lg">Lettuce drop and bottom rot.</span> A plant collapses at the soil, often with white mold or a slimy base. Remove plant and nearby soil. Do not compost it. Rotate away from lettuce for two or three years.
              </li>
            </ul>
          </Chapter>

          <Chapter
            id="kitchen"
            num="06"
            title="Cutting for the kitchen"
            lede="Harvest in the morning, when the leaves are cold and full of water. That single habit matters more than the knife you use. Afternoon lettuce is already tired, and it will be tired in the bowl."
          >
            <Plate
              src="/book/harvest.jpg"
              alt="A wooden trug of freshly cut romaine, red leaf, and butterhead on a garden path"
              caption="Plate 4. Cut while the dew is gone and the day is still cool. Do not wash it until you are ready to eat."
            />
            <ul className="list-disc space-y-2 pl-5">
              <li>Baby leaf: 21 to 30 days. Shear an inch above the crown. A good sowing returns two or three times, then tires.</li>
              <li>Looseleaf: take outer leaves at 4 to 6 inches, or cut the whole plant when you need the space for the next sowing.</li>
              <li>Heads: squeeze gently. You want firm, not splitting, and a center that has not started to rise. Butterhead is often ready around two months, romaine a bit later, crisphead only when the heart has actually filled.</li>
            </ul>
            <p>
              In zone {zone.id}, expect the spring bowl {zone.springPick.toLowerCase()}, and the later bowl {zone.fallPick.toLowerCase()}.
            </p>
            <p>
              Store it unwashed, in a container or perforated bag with a dry towel, as cold and as humid as the refrigerator allows without freezing. Leaf lettuce is a week. Romaine and a sound crisphead can go two. Wash when you eat.
            </p>
            <p>
              Raw salad can carry germs like E. coli. Wash your hands first. Remove the outer and damaged leaves. Rinse the leaves under cool running water, or swish them in a clean bowl and lift them out. Do not use soap or bleach. Spin or pat dry. Keep cut lettuce cold. Never use fresh manure on a salad bed.
            </p>
            <p>
              Lettuce is sensitive to ethylene, so keep it off the apples.
            </p>
            <p>
              A light frost can sweeten fall leaves. A harder freeze may injure them, depending on how fast it arrives and how long it lasts. Cover the bed when a freeze is forecast. If you have no cover and a hard freeze is coming, harvest and take the loss in the drawer rather than in the bed.
            </p>
          </Chapter>

          <Chapter
            id="seed"
            num="07"
            title="Harvesting seed, and keeping it"
            lede="Lettuce pollinates itself. Each small yellow flower opens for a few hours on a single morning, then closes. Insects still move a little pollen between varieties, and wild prickly lettuce — Lactuca serriola — can join in. Home seed is honest if you give it a little distance and save it from plants worth repeating."
          >
            <Plate
              src="/book/bolt.jpg"
              alt="A bolted lettuce with a tall stalk, small yellow flowers, and white seed heads"
              caption="Plate 5. The seed parent. Flowers open from the lower branches first, over several weeks."
            />
            <aside className="border border-line bg-field p-5" aria-label="Wild lettuce">
              <p>
                Wild lettuce (prickly lettuce, Lactuca serriola, and bitter lettuce, Lactuca virosa) grows as a roadside weed. It has milky sap, prickly leaf midribs, and small yellow flowers. It can cross with your lettuce, so pull it before it flowers near your seed crop. You may read online that wild lettuce is 'lettuce opium' or a natural sedative. This guide does NOT recommend eating, smoking, or making remedies from wild lettuce. The sap can cause poisoning, and the claims are not proven.
              </p>
            </aside>
            <ol className="space-y-5 border-l border-line pl-5">
              <li>
                <h3 className="font-display text-xl">Choose the parents before they flower</h3>
                <p className="mt-1">
                  A few plants can produce seed for home use. Saving from around 10 to 20 plants is better if you want to preserve the variety's genetic diversity. Mark plants that look like the variety, taste right, and are among the last to bolt — not the first. Stop cutting their leaves. One plant will fill a jar and slowly narrow the variety.
                </p>
              </li>
              <li>
                <h3 className="font-display text-xl">Separate varieties</h3>
                <p className="mt-1">
                  Extension guides commonly ask for 10 to 20 feet between lettuce varieties for home seed. Farther, or a simple cage, is better if you care about purity. Do not let wild prickly lettuce flower against the fence.
                </p>
              </li>
              <li>
                <h3 className="font-display text-xl">Let the stalk finish</h3>
                <p className="mt-1">
                  The stem runs two to five feet, branches, and bleeds milky sap if you cut it green. Flowers become a tan puff of white down, the pappus, with a firm seed at the base. Green or milky seed is not ready. In zone {zone.id}: {zone.seedCrop}
                </p>
              </li>
              <li>
                <h3 className="font-display text-xl">Cut when most heads are fluffy</h3>
                <p className="mt-1">
                  About two-thirds ripe is the moment. Wait for every head and the wind, and the finches, take the first and best seed. Cut on a dry day after dew is gone. Put the stalks in a paper bag, not plastic. Plastic sweats and the seed molds.
                </p>
              </li>
              <li>
                <h3 className="font-display text-xl">Clean the seed</h3>
                <p className="mt-1">
                  Once the stalks are dry in the paper bag, shake and rub the heads inside the bag. Pour through a kitchen strainer, then gently blow or use a fan to lift away the white fluff (the pappus). Dry the clean seed a few more days before you jar it.
                </p>
              </li>
              <li>
                <h3 className="font-display text-xl">Dry, rub, winnow</h3>
                <p className="mt-1">
                  Hang the bag or lay the stalks on a sheet indoors, out of direct sun, for one to two weeks, until crisp. Rub the heads. Pour the seed slowly in front of a fan over a tray — chaff blows, seed drops. Screen what remains. Seed may be cream, gray, brown, or black, depending on the variety. Black Seeded Simpson is named for a reason.
                </p>
              </li>
              <li>
                <h3 className="font-display text-xl">Dry again, then seal</h3>
                <p className="mt-1">
                  Spread the clean seed in a thin layer until a seed snaps rather than bends. No oven, no hot dashboard. Heat kills the embryo more reliably than it dries it. Then the jar.
                </p>
              </li>
            </ol>

            <Plate
              src="/book/seeds.jpg"
              alt="Lettuce seeds in cream, gray, and black, some still attached to white fluff, beside a dried flower head"
              caption="Plate 6. Clean seed. The white fluff is the pappus, not the part you sow."
            />
            <Plate
              src="/book/pantry.jpg"
              alt="A glass jar of lettuce seed on a cool pantry shelf with a plain envelope and a dried stalk"
              caption="Plate 7. Airtight, labeled, and kept where the kitchen does not heat up."
            />

            <h3 className="font-display text-2xl">How to store it</h3>
            <p>
              An airtight glass jar, with the seed in a paper envelope inside so the label cannot separate from the seed. Variety, year, and bed: “Buttercrunch · west bed · 2026.” Add a dry silica packet in a humid climate, but never seal seed that still feels cool and limp.
            </p>
            <p>
              Cool, dark, and dry. A closet that stays steady is good. A refrigerator is better if the jar is truly sealed — let the closed jar warm to room temperature before you open it, or damp kitchen air condenses on cold seed and undoes the year. The old rule still holds: temperature in degrees Fahrenheit plus relative humidity should stay under 100. Do not keep the jar in a greenhouse or a shed that bakes.
            </p>
            <div className="overflow-hidden border border-line">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">How long lettuce seed keeps</caption>
                <thead className="bg-field text-ink">
                  <tr>
                    <th className="px-3 py-3 font-display text-base font-medium">Where it lives</th>
                    <th className="px-3 py-3 font-display text-base font-medium">Good germination</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-line">
                    <td className="px-3 py-3">Paper envelope in a dry room</td>
                    <td className="px-3 py-3">About 2–3 years</td>
                  </tr>
                  <tr className="border-t border-line">
                    <td className="px-3 py-3">Airtight jar, cool and dark</td>
                    <td className="px-3 py-3">About 3–5 years</td>
                  </tr>
                  <tr className="border-t border-line">
                    <td className="px-3 py-3">Airtight jar in the refrigerator, seed fully dry</td>
                    <td className="px-3 py-3">Often 5–6 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Before you trust old seed, test ten seeds on a damp towel in a bag at room temperature. Read it at seven days. Under about seventy percent, sow more thickly or replace the lot. Follow the packet's date and storage directions. Pelleted seed stored for more than about two years may germinate poorly — Utah State Extension notes the drop — because the clay coat drinks moisture. Test older pelleted seed before you depend on it.
            </p>
            <fieldset className="border border-line p-4">
              <legend className="px-2 font-display text-xl">Seed-saving list for this garden</legend>
              <p className="px-2 text-sm text-muted">
                {garden.checks.length} of {seedChecks.length} kept. Stays on this device.
              </p>
              <ul className="mt-2">
                {seedChecks.map((item) => (
                  <li key={item.id} className="border-t border-line">
                    <button
                      type="button"
                      aria-pressed={garden.checks.includes(item.id)}
                      onClick={() => garden.toggleCheck(item.id)}
                      className="flex min-h-11 w-full items-start gap-3 py-3 text-left"
                    >
                      <span
                        aria-hidden="true"
                        className={`mt-0.5 grid size-5 shrink-0 place-items-center border ${garden.checks.includes(item.id) ? "border-leaf bg-leaf text-paper" : "border-line bg-paper"}`}
                      >
                        {garden.checks.includes(item.id) ? "✓" : ""}
                      </span>
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </fieldset>
          </Chapter>

          <Chapter
            id="companions"
            num="08"
            title="Plants that help the bed"
            lede="Some companions earn their place with evidence. Sweet alyssum does: its flowers raise hoverflies, and hoverfly larvae eat aphids. Most of the rest earn their place by sharing a season, a root depth, or a patch of afternoon shade. A few old pairings are only stories. Fennel is a genuine problem."
          >
            <Plate
              src="/book/companions.jpg"
              alt="Lettuce growing with chives, radish leaves, white alyssum, and an orange calendula"
              caption="Plate 8. Lettuce with chives, radish, alyssum, and calendula. The flowers work. The radish is on a timer."
            />
            <div className="flex flex-wrap gap-2" role="group" aria-label="Companions in the sample bed">
              {companions.map((plant) => {
                const on = picked.has(plant.id);
                return (
                  <button
                    key={plant.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => garden.toggleCompanion(plant.id)}
                    className={`min-h-11 px-3 text-sm ${on ? "bg-leaf text-paper" : "border border-line"}`}
                  >
                    {plant.name}
                  </button>
                );
              })}
            </div>
            <Bed on={picked} />
            {picked.size > 5 ? (
              <p className="text-clay">
                This bed is getting social. Companions should frame the lettuce, not replace it. Five neighbors is already a crowd in a four-by-eight.
              </p>
            ) : null}
            <div className="space-y-6">
              {companions.map((plant) => (
                <article key={plant.id}>
                  <h3 className="font-display text-2xl">{plant.name}</h3>
                  <p className="text-sm text-leaf">{plant.role}</p>
                  <p className="mt-2">{plant.help}</p>
                  <p className="mt-2 text-muted">{plant.how}</p>
                </article>
              ))}
            </div>
            <h3 className="font-display text-2xl">Keep these apart</h3>
            <ul className="space-y-3">
              {avoidList.map((item) => (
                <li key={item.name}>
                  <span className="font-display text-lg">{item.name}.</span> {item.why}
                </li>
              ))}
            </ul>
            <p>For spinach, kale, arugula, and other greens, see Volume 3: Greens. For peas, see the Peas volume.</p>
          </Chapter>

          <Chapter
            id="year"
            num="09"
            title={`A year in zone ${zone.id}`}
            lede={`${zone.climate}. This page is a broad starting point for the zone you chose, not a local forecast. Adjust for frost dates, soil temperature, and hot spells. Change the zone at the top and the year changes with it.`}
          >
            <ol className="space-y-5">
              <li>
                <h3 className="font-display text-xl">Start</h3>
                <p>
                  {zone.springSow}. {zone.springSet}.
                </p>
              </li>
              <li>
                <h3 className="font-display text-xl">Eat the spring crop</h3>
                <p>{zone.springPick}. Sow every ten to fourteen days while the chart in chapter 3 is still green, then stop.</p>
              </li>
              <li>
                <h3 className="font-display text-xl">Leave the best plants</h3>
                <p>{zone.seedCrop}</p>
              </li>
              <li>
                <h3 className="font-display text-xl">Cross the hot middle</h3>
                <p>{zone.summer}</p>
              </li>
              <li>
                <h3 className="font-display text-xl">Sow again</h3>
                <p>{zone.fallSow}.</p>
              </li>
              <li>
                <h3 className="font-display text-xl">Eat the late crop</h3>
                <p>{zone.fallPick}. Cover what a light frost would otherwise end.</p>
              </li>
              <li>
                <h3 className="font-display text-xl">What to grow here</h3>
                <p>{zone.prefer}</p>
              </li>
            </ol>
            <p className="border-t border-line pt-6 text-muted">
              Frost, as a typical range: last in spring {zone.lastFrost.toLowerCase()}; first in fall {zone.firstFrost.toLowerCase()}. If your garden disagrees, believe the garden.
            </p>
          </Chapter>

          <Chapter
            id="glossary"
            num="10"
            title="Glossary"
            lede="The words this book uses when it talks about sowing, heat, and seed."
          >
            <dl className="space-y-5">
              <div>
                <dt className="font-display text-xl">Bolting</dt>
                <dd>Sending up a flower stalk; the leaves turn bitter.</dd>
              </div>
              <div>
                <dt className="font-display text-xl">Thermodormancy</dt>
                <dd>Seed refusing to sprout when the soil is too hot.</dd>
              </div>
              <div>
                <dt className="font-display text-xl">Pappus</dt>
                <dd>The white fluff attached to lettuce seed.</dd>
              </div>
              <div>
                <dt className="font-display text-xl">Open-pollinated (OP)</dt>
                <dd>Seed that grows true.</dd>
              </div>
              <div>
                <dt className="font-display text-xl">F1 hybrid</dt>
                <dd>A cross. Saved seed won't grow true.</dd>
              </div>
              <div>
                <dt className="font-display text-xl">Isolation</dt>
                <dd>Distance between varieties to prevent crossing.</dd>
              </div>
              <div>
                <dt className="font-display text-xl">Tipburn</dt>
                <dd>Brown leaf edges from calcium not reaching fast-growing leaves.</dd>
              </div>
              <div>
                <dt className="font-display text-xl">Cut-and-come-again</dt>
                <dd>Harvesting outer leaves so the plant regrows.</dd>
              </div>
              <div>
                <dt className="font-display text-xl">Succession sowing</dt>
                <dd>Sowing a little every 1 to 2 weeks.</dd>
              </div>
            </dl>
          </Chapter>

          <Chapter
            id="about"
            num="11"
            title="About and disclaimer"
            lede="This pocket guide is for learning."
          >
            <p>Check your local county extension office for advice in your area.</p>
            <p>Never eat a wild plant you cannot identify for certain.</p>
            <p>Blue and the Awesome Dudes are not responsible for illness, injury, or crop loss.</p>
            <p>Part of The Education Revolution pocket guide series.</p>
          </Chapter>

          <footer className="border-t border-line py-10 text-sm text-muted">
            <p>Privacy: This guide does not collect your name, email, or any personal information. Your zone choice is saved only on your own device.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

function Bed({ on }: { on: Set<string> }) {
  const cells = [
    on.has("radish") ? "Radish" : "Lettuce",
    on.has("chives") ? "Chives" : "Lettuce",
    "Lettuce",
    on.has("calendula") ? "Calendula" : "Lettuce",
    on.has("carrot") ? "Carrot" : "Lettuce",
    "Lettuce",
    on.has("cilantro") ? "Cilantro" : "Lettuce",
    "Lettuce",
  ];

  return (
    <div className="border border-line bg-leaf-soft p-4">
      <p className="text-sm text-muted">A four-by-eight, seen from the south. West is the far edge.</p>
      {(on.has("shade") || on.has("peas")) && (
        <div className="mt-3 bg-leaf px-3 py-2 text-sm text-paper">
          {on.has("shade") ? "West edge · sunflower, corn, or 30% shade cloth" : "West edge · a low pea trellis"}
        </div>
      )}
      {on.has("alyssum") ? <p className="mt-3 text-center text-sm text-leaf">Sweet alyssum</p> : null}
      <ul className="mt-3 grid grid-cols-4 gap-2">
        {cells.map((label, index) => {
          const friend = label !== "Lettuce";
          return (
            <li
              key={`${label}-${index}`}
              className={`grid min-h-14 place-items-center px-1 text-center text-sm ${friend ? "bg-clay text-paper" : "bg-paper text-ink"}`}
            >
              {label}
            </li>
          );
        })}
      </ul>
      {on.has("alyssum") ? <p className="mt-3 text-center text-sm text-leaf">Sweet alyssum</p> : null}
      {on.has("nasturtium") ? (
        <p className="mt-3 bg-clay-soft px-3 py-2 text-sm text-clay">
          Nasturtium at the path end, outside the lettuce, where you can pull it.
        </p>
      ) : null}
    </div>
  );
}
