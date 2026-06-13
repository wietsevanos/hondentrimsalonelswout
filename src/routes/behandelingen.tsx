import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import wash from "@/assets/treatment-wash.jpg";
import strip from "@/assets/treatment-handstrip.jpg";

const TITLE = "Behandelingen · Hondentrimsalon Elswout Haarlem";
const DESC =
  "Wassen, drogen, knippen, scheren, modelleren, plukken en anti-verharing. Iedere behandeling met natuurlijke producten en check op huid, oren en nagels.";

export const Route = createFileRoute("/behandelingen")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/behandelingen" },
    ],
    links: [{ rel: "canonical", href: "/behandelingen" }],
  }),
  component: Behandelingen,
});

const TREATMENTS = [
  { t: "Wassen & drogen", d: "Twee wasbeurten met natuurlijke shampoo, gevolgd door drogen met een krachtige of zachte waterblazer afhankelijk van het vachttype." },
  { t: "Knippen & modelleren", d: "Vakkundig knippen en bijwerken naar het ras-specifieke of door jou gewenste model. Altijd in balans met wat de vacht aankan." },
  { t: "Scheren", d: "Alleen wanneer het écht in het belang van de hond is — bij ernstige vervilting of medische indicatie." },
  { t: "Handplukken", d: "Originele behandeling voor ruwharige rassen. Bevordert vachtgezondheid en behoudt de juiste structuur." },
  { t: "Ontwollen (wolvachten)", d: "Krachtige waterblazer verwijdert losse wol uit de dubbele vacht. Geen harken, geen coatking, geen scheren." },
  { t: "Anti-verharing behandeling", d: "Speciale was/blaastechniek voor kortharige rassen. Reduceert haaruitval thuis aanzienlijk." },
  { t: "Behandeling allergische vacht", d: "Hypoallergene shampoos en gerichte verzorging — in overleg met de dierenarts indien medisch geïndiceerd." },
  { t: "Oren, nagels & voetzolen", d: "Standaard onderdeel van iedere behandeling. Oren reinigen, nagels knippen en haren onder de voetzolen weghalen." },
];

const PROCESS = [
  { n: "01", t: "Wennen", d: "Eerst kennismaken met de salon — de mensen, de geluiden, de andere honden. Pas dan begint de behandeling." },
  { n: "02", t: "Borstelen & gezondheidscheck", d: "Doorkammen, klitten verwijderen, controle op teken, oneffenheden of bultjes." },
  { n: "03", t: "Bad", d: "Massage met shampoo, twee wasbeurten, grondig spoelen en drogen met een speciale Pet Towel." },
  { n: "04", t: "Pauze", d: "Even drinken, een snoepje, een aai." },
  { n: "05", t: "Drogen", d: "Krachtige waterblazer voor wolvachten of zachte luchtstroom voor overige vachten." },
  { n: "06", t: "Afwerken", d: "Modelleren, knippen of scheren, voetzolen, oren en nagels. Een laatste check en advies voor thuis." },
];

function Behandelingen() {
  return (
    <>
      <PageHero
        eyebrow="Onze behandelingen"
        title={<>Een complete behandeling, <span className="italic-serif text-terracotta">afgestemd</span> op jouw hond.</>}
        intro="Iedere behandeling omvat wassen, drogen, modelleren en een grondige check van huid, oren en nagels. Materialen werken namelijk alléén op een schone vacht."
      />

      <section className="container-x mx-auto max-w-7xl mt-24">
        <div className="grid md:grid-cols-2 gap-5">
          {TREATMENTS.map((t, i) => (
            <Reveal key={t.t} delay={(i % 4) as 0 | 1 | 2 | 3} className="rounded-2xl border border-border bg-card p-8 hover:border-bark/40 transition-colors">
              <h3 className="font-serif text-2xl text-bark">{t.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{t.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mx-auto max-w-7xl mt-32">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <Reveal className="md:col-span-5">
            <div className="eyebrow mb-5">Het proces</div>
            <h2 className="font-serif text-bark text-4xl md:text-5xl leading-[1.05]">
              Waarom een behandeling <span className="italic-serif text-terracotta">de tijd nodig heeft</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Een behandeling is meer dan knippen. Het is een rustig proces in
              zes stappen — zodat jouw hond ontspannen blijft en de vacht écht
              goed wordt teruggebracht.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl aspect-square bg-sand">
                <img src={wash} alt="Wassen en drogen" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl aspect-square bg-sand mt-8">
                <img src={strip} alt="Handplukken" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>
          <ol className="md:col-span-7 space-y-3">
            {PROCESS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="flex gap-6 rounded-2xl border border-border bg-card p-7">
                  <div className="font-serif text-3xl text-terracotta w-12 shrink-0">{s.n}</div>
                  <div>
                    <h3 className="font-serif text-2xl text-bark">{s.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </>
  );
}
