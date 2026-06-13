import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import brenda from "@/assets/brenda-shop.jpg.asset.json";

const TITLE = "Over Brenda · Vachtspecialist Hondentrimsalon Elswout";
const DESC =
  "Brenda van der Vaart: vachtspecialist en voedingsdeskundige met paraveterinaire achtergrond. Internationaal opgeleid in Bedford, Los Angeles en Nederland.";

export const Route = createFileRoute("/over-brenda")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/over-brenda" },
    ],
    links: [{ rel: "canonical", href: "/over-brenda" }],
  }),
  component: OverBrenda,
});

const TIMELINE = [
  { t: "Dierenartsassistente", d: "Negen jaar werkzaam bij dierenartspraktijk Kas in Heemstede. Opgeleid in vakkundige paraveterinaire zorg." },
  { t: "Verdieping vacht & voeding", d: "Specialisatie in vacht- en voedingsadvies, leidend tot samenwerking met Greenheart Premiums." },
  { t: "Internationaal opgeleid", d: "P.I.F. (Pet Industrie Foundation) Bedford UK, Dog Grooming Course CA Los Angeles, HKI Nederland." },
  { t: "Doorlopende bijscholing", d: "Stagedagen in Nederland, België en USA. Workshops en specialisatiecursussen om kennis actueel te houden." },
];

const SPECS = [
  "Plukvachten, op originele wijze handgeplukt",
  "Wolvachten, ontwollen via was/blaastechniek",
  "Hypoallergene en allergische klachten",
  "Doodlevachten, gecertificeerd specialist",
];

function OverBrenda() {
  return (
    <>
      <PageHero
        eyebrow="Wie is de trimster?"
        title={<>Brenda, vakvrouw, <span className="italic-serif text-terracotta">dierenliefhebber</span>.</>}
      />

      <section className="container-x mx-auto max-w-7xl mt-16">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <Reveal className="md:col-span-5">
            <div className="overflow-hidden rounded-[2rem] aspect-[4/5] bg-sand">
              <img src={brenda.url} alt="Brenda van der Vaart" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-card p-6">
              <div className="eyebrow mb-2">Functie</div>
              <div className="font-serif text-xl text-bark">Specialiste vachtverzorging</div>
              <div className="font-serif text-xl text-bark">& voedingsdeskundige</div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-7" delay={1}>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                Brenda van der Vaart bouwde haar vak op vanuit de
                dierenartspraktijk. Negen jaar lang werkte zij bij praktijk Kas
                in Heemstede, waar zij naast haar taak als dierenartsassistente
                ook werd ingezet voor nood- en zorgopvang van post-operatieve
                patiënten, vondelingen en aangereden wild.
              </p>
              <p>
                Die jaren legden de basis voor wat haar werk vandaag zo
                bijzonder maakt: kennis van huid, vacht, voeding én gedrag , 
                gecombineerd met internationale opleidingen in Bedford, Los
                Angeles en Nederland.
              </p>
            </div>

            <div className="mt-12 eyebrow">Achtergrond</div>
            <ol className="mt-6 border-l border-border pl-6 space-y-7">
              {TIMELINE.map((s) => (
                <li key={s.t} className="relative">
                  <span className="absolute -left-[28px] top-2 size-2 rounded-full bg-terracotta" />
                  <h3 className="font-serif text-xl text-bark">{s.t}</h3>
                  <p className="mt-1 text-muted-foreground leading-relaxed">{s.d}</p>
                </li>
              ))}
            </ol>

            <div className="mt-12 eyebrow">Specialisaties</div>
            <ul className="mt-6 grid sm:grid-cols-2 gap-y-3 gap-x-6">
              {SPECS.map((s) => (
                <li key={s} className="flex items-start gap-3 text-bark">
                  <span className="mt-2 size-1.5 rounded-full bg-terracotta shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <blockquote className="mt-14 border-l-2 border-terracotta pl-6 font-serif text-2xl md:text-3xl text-bark italic leading-snug">
              "Mijn liefde voor dieren en mijn werk met dieren maken dat mijn
              werk een cadeau is, iedere dag opnieuw."
              <footer className="mt-4 not-italic font-sans text-sm tracking-wide text-muted-foreground">,  Brenda van der Vaart</footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
