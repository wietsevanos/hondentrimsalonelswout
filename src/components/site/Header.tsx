import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/elswout-logo.png.asset.json";

const NAV = [
  { to: "/over-ons", label: "Over ons" },
  { to: "/behandelingen", label: "Behandelingen" },
  { to: "/specialisaties", label: "Specialisaties" },
  { to: "/tarieven", label: "Tarieven" },
  { to: "/over-brenda", label: "Brenda" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
        scrolled ? "backdrop-blur bg-background/85 border-b border-border/60" : "bg-background/0"
      }`}
    >
      <div className="container-x mx-auto max-w-7xl flex items-center justify-between h-20">
        <Link to="/" className="group flex items-center gap-3" aria-label="Home">
          <img
            src={logo.url}
            alt="Elswout"
            width={44}
            height={44}
            className="h-11 w-11 object-contain transition-transform duration-500 group-hover:rotate-[-4deg]"
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[1.35rem] tracking-wide text-bark">
              Elswout
            </span>
            <span className="text-[0.62rem] tracking-[0.32em] uppercase text-terracotta mt-0.5">
              Hondentrimsalon
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[0.78rem] uppercase tracking-[0.18em] text-muted-foreground hover:text-bark transition-colors"
              activeProps={{ className: "text-bark" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/31642618286"
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-bark/30 px-5 py-2.5 text-sm text-bark hover:bg-bark hover:text-cream transition-colors"
          >
            Boek via WhatsApp <span aria-hidden>→</span>
          </a>
          <button
            className="lg:hidden p-2 -mr-2 text-bark"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container-x mx-auto max-w-7xl flex flex-col py-6 gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-bark border-b border-border/50 last:border-0"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="https://wa.me/31642618286"
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-bark text-cream px-5 py-3 text-sm"
            >
              Boek via WhatsApp →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
