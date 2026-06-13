import { Reveal } from "./Reveal";

export function CTASection() {
  return (
    <section className="container-x mx-auto max-w-7xl mt-32">
      <Reveal>
        <div className="rounded-[2rem] bg-bark text-cream px-8 sm:px-14 py-20 sm:py-24 text-center">
          <div className="eyebrow text-terracotta/90 mb-6">Een afspraak maken</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-cream max-w-3xl mx-auto leading-[1.05]">
            Klaar voor een rustige, <span className="italic-serif text-clay">deskundige</span> behandeling?
          </h2>
          <p className="mt-6 text-cream/75 max-w-xl mx-auto">
            Vanwege de drukte heeft WhatsApp de voorkeur. Bekend in ons bestand?
            Stuur direct een bericht — wij plannen graag een moment voor jouw hond in.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/31642618286"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-cream text-bark px-7 py-3.5 text-sm hover:bg-clay transition-colors"
            >
              Boek via WhatsApp <span aria-hidden>→</span>
            </a>
            <a
              href="mailto:info@elswouthondentrimsalon.nl"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 text-cream px-7 py-3.5 text-sm hover:bg-cream/10 transition-colors"
            >
              Stuur een e-mail
            </a>
          </div>
          <div className="mt-8 text-xs text-cream/60 tracking-wide">
            Houd rekening met een wachttijd van ca. twee maanden — boek je vervolgafspraak direct door.
          </div>
        </div>
      </Reveal>
    </section>
  );
}
