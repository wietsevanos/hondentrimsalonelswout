import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "Contact · Hondentrimsalon Elswout Haarlem";
const DESC =
  "Maak een afspraak bij Hondentrimsalon Elswout. Vanwege de drukte heeft WhatsApp de voorkeur. Ramplaan 48 te Haarlem, op de grens van Overveen.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact & afspraak"
        title={<>Een afspraak begint met een <span className="italic-serif text-terracotta">korte boodschap</span>.</>}
        intro="Telefonisch zijn wij door de drukte lastig bereikbaar; een WhatsApp is de snelste weg naar een plek in de agenda. Houd rekening met een wachttijd van ongeveer twee maanden."
        align="center"
      />

      <section className="container-x mx-auto max-w-5xl mt-16">
        <Reveal>
          <div className="text-center">
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://wa.me/31642618286"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-bark text-cream px-7 py-3.5 text-sm hover:bg-terracotta transition-colors"
              >
                WhatsApp openen <span aria-hidden>→</span>
              </a>
              <a
                href="mailto:info@elswouthondentrimsalon.nl"
                className="inline-flex items-center gap-2 rounded-full border border-bark/20 text-bark px-7 py-3.5 text-sm hover:bg-bark/5 transition-colors"
              >
                E-mail sturen
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-x mx-auto max-w-5xl mt-32">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 text-center md:text-left">
          <Reveal>
            <div className="eyebrow mb-5">Bezoek ons</div>
            <address className="not-italic font-serif text-3xl text-bark leading-snug">
              Ramplaan 48<br />
              2015 GX Haarlem
            </address>
            <p className="mt-3 text-sm text-muted-foreground">Op de grens van Haarlem en Overveen.</p>
            <div className="mt-8 space-y-3 text-sm">
              <div><span className="text-muted-foreground">WhatsApp · </span><a className="text-bark hover:text-terracotta" href="https://wa.me/31642618286">06 42 61 82 86</a></div>
              <div><span className="text-muted-foreground">E-mail · </span><a className="text-bark hover:text-terracotta" href="mailto:info@elswouthondentrimsalon.nl">info@elswouthondentrimsalon.nl</a></div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="eyebrow mb-5">Openingstijden</div>
            <ul className="text-base text-bark space-y-2.5">
              <li className="flex justify-between"><span>Maandag</span><span className="text-muted-foreground">Gesloten</span></li>
              <li className="flex justify-between"><span>Dinsdag</span><span className="text-muted-foreground">09:00 – 18:00</span></li>
              <li className="flex justify-between"><span>Woensdag</span><span className="text-muted-foreground">09:00 – 18:00</span></li>
              <li className="flex justify-between"><span>Donderdag</span><span className="text-muted-foreground">09:00 – 18:00</span></li>
              <li className="flex justify-between"><span>Vrijdag</span><span className="text-muted-foreground">09:00 – 18:00</span></li>
              <li className="flex justify-between"><span>Zaterdag</span><span className="text-muted-foreground">09:00 – 17:00</span></li>
              <li className="flex justify-between"><span>Zondag</span><span className="text-muted-foreground">Gesloten</span></li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container-x mx-auto max-w-7xl mt-32">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem]">
            <iframe
              title="Route naar Hondentrimsalon Elswout"
              src="https://www.google.com/maps?q=Ramplaan+48,+2015+GX+Haarlem&output=embed"
              width="100%"
              height="460"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>

      <section className="container-x mx-auto max-w-7xl mt-24 text-center">
        <Reveal>
          <div className="eyebrow mb-4">Servicegebied</div>
          <p className="font-serif text-2xl md:text-3xl text-bark max-w-3xl mx-auto leading-snug">
            Haarlem · Overveen · Bloemendaal · Aerdenhout · Bentveld · Heemstede · Zandvoort
          </p>
        </Reveal>
      </section>
    </>
  );
}
