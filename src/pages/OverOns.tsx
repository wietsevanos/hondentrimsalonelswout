import { PageHero } from "@/components/site/PageHero";

import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
const salonVideo = { url: "/salon-visie.mp4" };
import certPuppy from "@/assets/bernedoodle-puppy.png";

const TITLE = "Over ons · Hondentrimsalon Elswout Haarlem";
const DESC =
  "Gediplomeerde vachtspecialist met paraveterinaire achtergrond in hartje Haarlem. Natuurlijke verzorging, internationale expertise en oprechte aandacht voor jouw hond.";



const VALUES = [
  { t: "Deskundig", d: "Internationale opleidingen en jarenlange paraveterinaire ervaring." },
  { t: "Persoonlijk", d: "Iedere hond is anders. Iedere behandeling op maat." },
  { t: "Natuurlijk", d: "Hypoallergene producten, geen onnodige chemie." },
  { t: "Rustig", d: "Geen haast, geen prikkels. Een moment voor de hond." },
  { t: "Betrouwbaar", d: "Open over wat een vacht écht nodig heeft." },
  { t: "Diervriendelijk", d: "Welzijn boven model. Altijd." },
];

function OverOns() {
  return (
    <>
      <>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:type" content={"website"} />
        <meta property="og:url" content={"/over-ons"} />
      </>
      
      <PageHero
        eyebrow="Over Hondentrimsalon Elswout"
        title={<>Vachtverzorging als <span className="italic-serif text-terracotta">vakmanschap</span>.</>}
        intro="Aan de Ramplaan in Haarlem, op de grens van Overveen, ligt onze rustige salon. Hier draait alles om kennis, aandacht en het welzijn van jouw hond."
      />

      <section className="container-x mx-auto max-w-7xl mt-24">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <Reveal className="md:col-span-6">
            <div className="overflow-hidden rounded-[2rem] aspect-[4/5] bg-sand">
              <video
                src={salonVideo.url}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="md:col-span-6 md:pt-10" delay={1}>
            <div className="eyebrow mb-5">Onze visie</div>
            <h2 className="font-serif text-bark text-3xl md:text-4xl leading-[1.1]">
              Een trimsalon waar de <span className="italic-serif text-terracotta">hond zich thuis voelt</span>.
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Hondentrimsalon Elswout is meer dan een trimsalon. Dankzij onze
                paraveterinaire achtergrond letten wij tijdens iedere behandeling
                op huid, oren, nagels en eventuele oneffenheden. Zien wij iets
                bijzonders, dan koppelen wij dat zorgvuldig terug.
              </p>
              <p>
                Wij gebruiken uitsluitend natuurlijke verzorgingsproducten en zijn
                gespecialiseerd in hypoallergene vachten en behandelingen met
                medische indicatie, altijd in opvolging van advies van de
                dierenarts.
              </p>
              <p>
                De vachtbehandeling staat in het belang van de hond op de eerste
                plaats. Daarna, indien mogelijk, een model. Ook angstige of
                nerveuze honden behandelen wij op de meest diervriendelijke wijze.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x mx-auto max-w-7xl mt-32">
        <Reveal className="max-w-2xl">
          <div className="eyebrow mb-5">Onze waarden</div>
          <h2 className="font-serif text-bark text-4xl md:text-5xl leading-[1.05]">
            Wat ons werk <span className="italic-serif text-terracotta">draagt</span>.
          </h2>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUES.map((v, i) => (
            <Reveal key={v.t} delay={(i % 4) as 0 | 1 | 2 | 3} className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-serif text-2xl text-bark">{v.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mx-auto max-w-7xl mt-32">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-6 md:order-2">
            <div className="overflow-hidden rounded-[2rem] aspect-[5/4] bg-sand">
              <img src={certPuppy} alt="Berner Sennen pup in het gras" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal className="md:col-span-6" delay={1}>
            <div className="eyebrow mb-5">Certificeringen</div>
            <h2 className="font-serif text-bark text-3xl md:text-4xl leading-[1.1]">
              Gecertificeerd voor de meest <span className="italic-serif text-terracotta">veeleisende vachten</span>.
            </h2>
            <ul className="mt-8 grid grid-cols-2 gap-y-3 gap-x-6 text-bark">
              {["Australian Doodle","Labradoodle","Cobberdog","Bernedoodle","Lagotto","Spaanse Waterhond","Barbet","Hypoallergene vachten"].map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm">
                  <span className="size-1.5 rounded-full bg-terracotta" /> {c}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">Lid van VVTN, Vereniging voor Trimmend Nederland.</p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default OverOns;
