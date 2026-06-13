import { Link } from "@tanstack/react-router";
import logo from "@/assets/elswout-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-sand/40">
      <div className="container-x mx-auto max-w-7xl py-20 grid gap-14 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-4">
            <img src={logo.url} alt="Elswout" width={56} height={56} className="h-14 w-14 object-contain" />
            <div className="font-serif text-2xl text-bark leading-tight">Hondentrimsalon<br />Elswout</div>
          </div>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Gediplomeerd vachtspecialist met paraveterinaire achtergrond.
            Natuurlijke verzorging waarbij het welzijn van jouw hond altijd voorop staat.
          </p>
          <a
            href="https://wa.me/31642618286"
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-bark text-cream px-6 py-3 text-sm hover:bg-terracotta transition-colors"
          >
            Afspraak via WhatsApp <span aria-hidden>→</span>
          </a>
        </div>

        <div>
          <div className="eyebrow mb-4">Bezoek</div>
          <address className="not-italic text-bark leading-relaxed">
            Ramplaan 48<br />
            2015 GX Haarlem<br />
            <span className="text-muted-foreground">(grens Overveen)</span>
          </address>
          <div className="mt-5 text-sm text-muted-foreground space-y-1">
            <div>WhatsApp · <a href="https://wa.me/31642618286" className="text-bark hover:text-terracotta">06 42 61 82 86</a></div>
            <div><a href="mailto:info@elswouthondentrimsalon.nl" className="text-bark hover:text-terracotta">info@elswouthondentrimsalon.nl</a></div>
          </div>
        </div>

        <div>
          <div className="eyebrow mb-4">Openingstijden</div>
          <ul className="text-sm text-bark space-y-1.5">
            <li className="flex justify-between"><span>Maandag</span><span className="text-muted-foreground">Gesloten</span></li>
            <li className="flex justify-between"><span>Di tot Vr</span><span className="text-muted-foreground">09:00 tot 18:00</span></li>
            <li className="flex justify-between"><span>Zaterdag</span><span className="text-muted-foreground">09:00 tot 17:00</span></li>
            <li className="flex justify-between"><span>Zondag</span><span className="text-muted-foreground">Gesloten</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="container-x mx-auto max-w-7xl py-6 flex flex-col sm:flex-row gap-3 justify-between items-center text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Hondentrimsalon Elswout · Haarlem</div>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-bark">Contact</Link>
            <Link to="/tarieven" className="hover:text-bark">Tarieven</Link>
            <span>Lid VVTN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
