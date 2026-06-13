import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

const TITLE = "Tarieven · Hondentrimsalon Elswout Haarlem";
const DESC =
  "Transparante uurtarieven voor vachtverzorging in Haarlem. Inclusief 21% BTW. Standaardbehandeling, plukvachten, medische indicatie en specialistische behandelingen.";

export const Route = createFileRoute("/tarieven")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tarieven" },
    ],
    links: [{ rel: "canonical", href: "/tarieven" }],
  }),
  component: Tarieven,
});

const RATES = [
  { t: "Korte behandeling", d: "Ca. 1 uur — voor kleine of goed verzorgde vachten.", p: "€ 65,00" },
  { t: "Standaard vachtbehandeling", d: "Wassen, drogen, modelleren en eindcheck.", p: "€ 65,00 / uur" },
  { t: "Plukvachten (handgeplukt)", d: "Ruwharige rassen, op originele wijze handgeplukt.", p: "€ 72,50 / uur" },
  { t: "Behandeling medische indicatie", d: "In opvolging van advies dierenarts, hypoallergeen.", p: "€ 72,50 / uur" },
  { t: "Gedrags- of vachtafwijkende behandeling", d: "Extra tijd en zorg voor angstige of complexe gevallen.", p: "€ 85,00 / uur" },
];

const TERMS = [
  "Alle prijzen zijn inclusief 21% BTW en gelden voor een goed verzorgde hond.",
  "Meerwerk door klitten, gedrag, parasieten of vervilting wordt extra berekend.",
  "De duur van een behandeling is niet vooraf vast te stellen — de vacht kan meer aandacht vragen dan verwacht.",
  "Een vachtbehandeling omvat altijd een complete behandeling inclusief wassen en drogen.",
  "Niet alleen de vacht, maar ook huid, nagels en oren worden behandeld.",
  "Bij teken of parasieten volgt directe behandeling (extra kosten).",
  "Geen recht op restitutie wanneer de behandeling volgens normale richtlijnen is uitgevoerd.",
];

function Tarieven() {
  return (
    <>
      <PageHero
        eyebrow="Tarieven"
        title={<>Eerlijke <span className="italic-serif text-terracotta">uurtarieven</span> — geen verrassingen.</>}
        intro="Wij werken met transparante uurtarieven. Wat een behandeling kost, hangt af van het vachttype en de toestand van de vacht."
      />

      <section className="container-x mx-auto max-w-7xl mt-24">
        <div className="rounded-[2rem] border border-border bg-card overflow-hidden">
          <ul className="divide-y divide-border">
            {RATES.map((r, i) => (
              <Reveal as="li" key={r.t} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="grid md:grid-cols-12 gap-6 p-8 md:p-10 items-baseline hover:bg-sand/50 transition-colors">
                  <div className="md:col-span-5">
                    <h3 className="font-serif text-2xl md:text-3xl text-bark">{r.t}</h3>
                  </div>
                  <p className="md:col-span-5 text-muted-foreground leading-relaxed">{r.d}</p>
                  <div className="md:col-span-2 md:text-right font-serif text-2xl text-terracotta">{r.p}</div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="mt-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="eyebrow mb-5">Goed om te weten</div>
            <h2 className="font-serif text-bark text-3xl md:text-4xl leading-[1.1]">
              Onze <span className="italic-serif text-terracotta">voorwaarden</span> in het kort.
            </h2>
          </div>
          <ul className="md:col-span-8 space-y-4 text-muted-foreground leading-relaxed">
            {TERMS.map((t) => (
              <li key={t} className="flex gap-4">
                <span className="text-terracotta mt-1.5 size-1.5 rounded-full bg-terracotta shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
