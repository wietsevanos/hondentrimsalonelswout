import { createFileRoute } from "@tanstack/react-router";
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
        intro="Vanwege de drukte in onze salon en winkel zijn wij telefonisch lastig bereikbaar. Stuur een WhatsApp — dat is veruit de snelste manier."
      />

      <section className="container-x mx-auto max-w-7xl mt-24">
        <div className="grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-7">
            <div className="rounded-[2rem] bg-bark text-cream p-10 md:p-14">
              <div className="eyebrow text-terracotta/90 mb-5">Boek je afspraak</div>
              <h2 className="font-serif text-cream text-3xl md:text-4xl leading-[1.1]">
                WhatsApp heeft de <span className="italic-serif text-clay">voorkeur</span>.
              </h2>
              <p className="mt-6 text-cream/75 leading-relaxed max-w-md">
                Bekend in ons bestand? Stuur een bericht. We plannen graag een
                rustig moment in voor jouw hond. Houd rekening met een wachttijd
                van ca. twee maanden — boek je vervolgafspraak direct door.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/31642618286"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-cream text-bark px-7 py-3.5 text-sm hover:bg-clay transition-colors"
                >
                  WhatsApp openen <span aria-hidden>→</span>
                </a>
                <a
                  href="mailto:info@elswouthondentrimsalon.nl"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/30 text-cream px-7 py-3.5 text-sm hover:bg-cream/10 transition-colors"
                >
                  E-mail sturen
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5" delay={1}>
            <div className="rounded-[2rem] border border-border bg-card p-10">
              <div className="eyebrow mb-5">Bezoek ons</div>
              <address className="not-italic font-serif text-2xl text-bark leading-snug">
                Ramplaan 48<br />
                2015 GX Haarlem
              </address>
              <p className="mt-2 text-sm text-muted-foreground">Op de grens van Haarlem en Overveen.</p>

              <div className="mt-8 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">WhatsApp</span><a className="text-bark hover:text-terracotta" href="https://wa.me/31642618286">06 42 61 82 86</a></div>
                <div className="flex justify-between"><span className="text-muted-foreground">E-mail</span><a className="text-bark hover:text-terracotta" href="mailto:info@elswouthondentrimsalon.nl">info@elswouthondentrimsalon.nl</a></div>
              </div>

              <div className="mt-10 eyebrow mb-4">Openingstijden</div>
              <ul className="text-sm text-bark space-y-1.5">
                <li className="flex justify-between"><span>Maandag</span><span className="text-muted-foreground">Gesloten</span></li>
                <li className="flex justify-between"><span>Dinsdag</span><span className="text-muted-foreground">09:00 – 18:00</span></li>
                <li className="flex justify-between"><span>Woensdag</span><span className="text-muted-foreground">09:00 – 18:00</span></li>
                <li className="flex justify-between"><span>Donderdag</span><span className="text-muted-foreground">09:00 – 18:00</span></li>
                <li className="flex justify-between"><span>Vrijdag</span><span className="text-muted-foreground">09:00 – 18:00</span></li>
                <li className="flex justify-between"><span>Zaterdag</span><span className="text-muted-foreground">09:00 – 17:00</span></li>
                <li className="flex justify-between"><span>Zondag</span><span className="text-muted-foreground">Gesloten</span></li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div className="overflow-hidden rounded-[2rem] border border-border">
            <iframe
              title="Route naar Hondentrimsalon Elswout"
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.609%2C52.378%2C4.624%2C52.385&layer=mapnik&marker=52.3815%2C4.6165"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal className="mt-16 text-center">
          <div className="eyebrow mb-4">Servicegebied</div>
          <p className="font-serif text-2xl md:text-3xl text-bark max-w-3xl mx-auto leading-snug">
            Haarlem · Overveen · Bloemendaal · Aerdenhout · Bentveld · Heemstede · Zandvoort
          </p>
        </Reveal>
      </section>
    </>
  );
}
