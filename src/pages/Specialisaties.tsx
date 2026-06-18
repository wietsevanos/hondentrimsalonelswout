import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import doodleAsset from "@/assets/doodle.png";
import huskyAsset from "@/assets/husky.png";
import pomAsset from "@/assets/pomeranian.png";
import goldenAsset from "@/assets/golden-retriever.png";
import strip from "@/assets/treatment-handstrip.jpg";
import berne from "@/assets/portrait-bernedoodle.jpg";
const cava = doodleAsset;
const wash = huskyAsset;
const pom = pomAsset;
const berner = goldenAsset;

const TITLE = "Specialisaties · Doodle, pluk- en wolvachten Haarlem";
const DESC =
  "Gecertificeerde specialist in Labradoodle, Cobberdog, Bernedoodle, Cavapoo en Cockapoo. Ervaring met wolvachten, plukvachten, grote rassen, Pomeranian en allergische vachten.";

export const Route = createFileRoute("/specialisaties")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/specialisaties" },
    ],
    links: [{ rel: "canonical", href: "/specialisaties" }],
  }),
  component: Specialisaties,
});

type Spec = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  img: string;
};

const SPECS: Spec[] = [
  {
    id: "doodle",
    eyebrow: "Gecertificeerd",
    title: "Doodlevachten",
    body: "Doodlevachten vragen om specifieke kennis: krullend of golvend haar, hypoallergene eigenschappen en een sterke neiging tot klitten. Brenda is gecertificeerd voor de behandeling van deze rassen.",
    bullets: ["Labradoodle", "Australian Doodle", "Cobberdog", "Bernedoodle", "Cavapoo", "Cockapoo"],
    img: cava,
  },
  {
    id: "pluk",
    eyebrow: "Op originele wijze",
    title: "Plukvachten & ruwharige rassen",
    body: "Ruwharige rassen worden op de juiste wijze handgeplukt, niet geknipt. Plukken bevordert de gezondheid van vacht en huid en behoudt de oorspronkelijke structuur.",
    bullets: ["Cairn, Welsh & Ierse Terriër", "Lakeland & Fox Terriër", "Teckel ruwharig", "Fauves de Bretagne"],
    img: strip,
  },
  {
    id: "wol",
    eyebrow: "Ontwollen, nooit scheren",
    title: "Wolvachten",
    body: "Met een krachtige waterblazer wordt verstikkende oude wol uit de dubbele vacht geblazen. Geen harken, geen coatking. De huid kan weer ademen, de vacht wordt teruggebracht in originele staat.",
    bullets: ["Husky", "Samojeed", "Keeshond", "Chow Chow", "Berner Sennen", "Leonberger"],
    img: wash,
  },
  {
    id: "groot",
    eyebrow: "Ruimte en geduld",
    title: "Grote rassen",
    body: "Uitgebreide ervaring met grote en moeilijk handelbare honden, ook angstige of dominante. Speciale aandacht voor wolvachten en plukvachten van grote rassen.",
    bullets: ["Berner Sennen", "Bouvier", "Briard", "Golden Retriever", "Leonberger", "Pyrenese Berghond", "Riesenschnauzer", "Sint Bernard"],
    img: berner,
  },
  {
    id: "pom",
    eyebrow: "Specifieke ras-kennis",
    title: "Pomeranian / Dwergkees",
    body: "Begeleiding tijdens de ugly fase rond de vijfde à zesde maand, behandeling van alopecia BSD en stimulering van vachtgroei met ondersteunende supplementen.",
    bullets: ["Verzorging zoals ras-eigen bedoeld", "Begeleiding vachtwissel", "Aanpak BSD (Black Skin Disease)", "Stimulering vachtgroei"],
    img: pom,
  },
  {
    id: "allergie",
    eyebrow: "In opvolging van dierenarts",
    title: "Allergische & hypoallergene vachten",
    body: "Behandelingen met medische indicatie worden uitgevoerd in opvolging van het advies van de dierenarts. Uitsluitend gebruik van natuurlijke, hypoallergene producten.",
    bullets: ["Voedsel- en omgevingsallergie", "Pollenklachten", "Huisstofmijtgevoeligheid", "Huid- en vachtproblemen"],
    img: berne,
  },
];

function Specialisaties() {
  return (
    <>
      <PageHero
        eyebrow="Specialisaties"
        title={<>Specialistische kennis van <span className="italic-serif text-terracotta">elk vachttype</span>.</>}
        intro="Internationale opleidingen, jaren ervaring en doorlopende bijscholing. Voor iedere vacht de juiste techniek en de juiste producten."
      />

      <section className="container-x mx-auto max-w-7xl mt-24 space-y-24">
        {SPECS.map((s, i) => (
          <Reveal key={s.id} as="article" id={s.id} className="scroll-mt-32">
            <div className={`grid md:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="md:col-span-6">
                <div className="overflow-hidden rounded-[2rem] aspect-[4/5] bg-sand">
                  <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="eyebrow mb-5">{s.eyebrow}</div>
                <h2 className="font-serif text-bark text-4xl md:text-5xl leading-[1.05]">{s.title}</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">{s.body}</p>
                <ul className="mt-8 grid grid-cols-2 gap-y-3 gap-x-6">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-bark">
                      <span className="size-1.5 rounded-full bg-terracotta" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <CTASection />
    </>
  );
}
