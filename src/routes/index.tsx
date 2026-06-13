import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import heroImg from "@/assets/hero-doodle.jpg";
import salonImg from "@/assets/salon-interior.jpg";
import berneImg from "@/assets/portrait-bernedoodle.jpg";
import pomImg from "@/assets/portrait-pomeranian.jpg";
import cavaImg from "@/assets/portrait-cavapoo.jpg";
import bernerImg from "@/assets/portrait-berner.jpg";
import brendaImg from "@/assets/brenda-portrait.jpg";

const TITLE = "Hondentrimsalon Elswout · Premium vachtverzorging in Haarlem";
const DESC =
  "Gediplomeerd specialist in doodle-, pluk- en wolvachten. Natuurlijke, persoonlijke vachtverzorging in Haarlem, Overveen en omstreken. Boek via WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "hondentrimsalon Haarlem, hondentrimsalon Overveen, labradoodle trimmen Haarlem, doodle trimsalon, plukvacht specialist, wolvacht specialist, hond trimmen Bloemendaal Heemstede",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Why />
      <Specializations />
      <Process />
      <BrendaTeaser />
      <Faq />
      <CTASection />
      <JsonLd />
    </>
  );
}

function Hero() {
  return (
    <section className="container-x mx-auto max-w-7xl pt-6 lg:pt-10">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
        <div className="lg:col-span-6 pt-8 lg:pt-20 animate-fade-up">
          <div className="eyebrow mb-6">Hondentrimsalon Elswout · Haarlem</div>
          <h1 className="font-serif text-bark text-[2.6rem] sm:text-6xl lg:text-[5.2rem] leading-[1.02] tracking-tight">
            Deskundige vachtverzorging,{" "}
            <span className="italic-serif text-terracotta">met liefde</span> voor je hond.
          </h1>
          <p className="mt-8 max-w-lg text-lg text-muted-foreground leading-relaxed">
            Gediplomeerd specialist in doodle-, pluk- en wolvachten. Rustig,
            persoonlijk en altijd in het belang van jouw hond.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://wa.me/31642618286"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-bark text-cream px-7 py-3.5 text-sm hover:bg-terracotta transition-colors"
            >
              Afspraak via WhatsApp <span aria-hidden>→</span>
            </a>
            <Link
              to="/behandelingen"
              className="inline-flex items-center gap-2 rounded-full border border-bark/30 text-bark px-7 py-3.5 text-sm hover:bg-bark/5 transition-colors"
            >
              Bekijk behandelingen
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span>Gediplomeerd</span>
            <span>·</span>
            <span>Paraveterinaire achtergrond</span>
            <span>·</span>
            <span>Natuurlijke producten</span>
          </div>
        </div>
        <div className="lg:col-span-6 animate-fade-in">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] aspect-[4/5] bg-clay/40">
              <img
                src={heroImg}
                alt="Labradoodle wordt rustig geborsteld in trimsalon Elswout"
                width={1600}
                height={1152}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 rounded-full bg-background border border-border px-5 py-3 shadow-sm">
              <span className="size-2 rounded-full bg-sage" />
              <span className="text-sm text-bark">Boeken via WhatsApp open</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section className="container-x mx-auto max-w-7xl mt-32">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <Reveal as="div" className="md:col-span-4">
          <div className="eyebrow">Welkom</div>
        </Reveal>
        <Reveal as="div" className="md:col-span-8" delay={1}>
          <h2 className="font-serif text-bark text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Een rustige plek waar de hond <span className="italic-serif text-terracotta">écht centraal</span> staat.
          </h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
            <p>
              Hondentrimsalon Elswout is dé vachtverzorgingsspecialist voor Haarlem,
              Overveen, Bloemendaal en omstreken. Wij combineren ambachtelijk
              trimwerk met diepgaande kennis van huid, vacht en gezondheid.
            </p>
            <p>
              Iedere behandeling begint met aandacht. Eerst wennen, dan
              behandelen, natuurlijk, persoonlijk en zonder haast. Ook angstige
              of nerveuze honden zijn bij ons in vertrouwde handen.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const PILLARS = [
  { n: "01", t: "Gediplomeerd specialist", d: "Opgeleid in Bedford (UK), Los Angeles en Nederland. Internationale expertise op iedere vacht." },
  { n: "02", t: "Paraveterinaire achtergrond", d: "Negen jaar dierenartsassistente. Tijdens iedere behandeling check op huid, oren en nagels." },
  { n: "03", t: "Natuurlijke producten", d: "Uitsluitend natuurlijke, hypoallergene shampoos en verzorgingsproducten." },
  { n: "04", t: "Welzijn voorop", d: "Eerst wennen, dan behandelen. Het belang van de hond gaat altijd voor het model." },
];

function Why() {
  return (
    <section className="container-x mx-auto max-w-7xl mt-32">
      <Reveal className="text-center max-w-2xl mx-auto">
        <div className="eyebrow mb-5">Waarom Elswout</div>
        <h2 className="font-serif text-bark text-4xl md:text-5xl leading-[1.05]">
          Meer dan trimmen, een <span className="italic-serif text-terracotta">moment van zorg</span>.
        </h2>
      </Reveal>
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {PILLARS.map((p, i) => (
          <Reveal key={p.n} delay={(i % 4) as 0 | 1 | 2 | 3} className="rounded-2xl border border-border bg-card p-8 hover:border-bark/40 transition-colors">
            <div className="size-10 rounded-full border border-sage/50 text-sage text-xs flex items-center justify-center tracking-wider">
              {p.n}
            </div>
            <h3 className="mt-7 font-serif text-2xl text-bark">{p.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const SPECS = [
  { img: cavaImg, t: "Doodlevachten", d: "Labradoodle, Cobberdog, Bernedoodle, Cockapoo, Cavapoo, gecertificeerd." },
  { img: bernerImg, t: "Wolvachten", d: "Husky, Samojeed, Berner Sennen, Leonberger. Ontwollen, nooit scheren." },
  { img: pomImg, t: "Pomeranian", d: "Begeleiding ugly fase, alopecia BSD en stimulering vachtgroei." },
  { img: berneImg, t: "Grote rassen", d: "Bouvier, Briard, Golden Retriever, Pyrenese Berghond en meer." },
];

function Specializations() {
  return (
    <section className="container-x mx-auto max-w-7xl mt-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <Reveal className="max-w-xl">
          <div className="eyebrow mb-5">Specialisaties</div>
          <h2 className="font-serif text-bark text-4xl md:text-5xl leading-[1.05]">
            Specialistische kennis van <span className="italic-serif text-terracotta">elke vacht</span>.
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <Link
            to="/specialisaties"
            className="text-sm text-bark border-b border-bark/40 pb-1 hover:text-terracotta hover:border-terracotta transition-colors"
          >
            Alle specialisaties bekijken →
          </Link>
        </Reveal>
      </div>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SPECS.map((s, i) => (
          <Reveal key={s.t} delay={(i % 4) as 0 | 1 | 2 | 3}>
            <Link to="/specialisaties" className="block group">
              <div className="overflow-hidden rounded-2xl bg-sand aspect-[4/5]">
                <img
                  src={s.img}
                  alt={s.t}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-bark">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", t: "Wennen", d: "15 tot 20 minuten kennismaken met de salon, de geluiden, de mensen." },
  { n: "02", t: "Borstelen & check", d: "Nauwkeurig borstelen, controle van huid, oren, nagels en eventuele oneffenheden." },
  { n: "03", t: "Wassen", d: "Massage met natuurlijke shampoo, twee wasbeurten en grondig uitspoelen." },
  { n: "04", t: "Drogen & ontwollen", d: "Krachtige of zachte waterblazer, afgestemd op het vachttype." },
  { n: "05", t: "Modelleren", d: "Knippen, scheren, effileren of handplukken, wat de vacht echt nodig heeft." },
  { n: "06", t: "Eindcheck", d: "Voetzolen, oren en nagels. Persoonlijk advies voor thuis." },
];

function Process() {
  return (
    <section className="container-x mx-auto max-w-7xl mt-32">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <Reveal>
            <div className="eyebrow mb-5">Werkwijze</div>
            <h2 className="font-serif text-bark text-4xl md:text-5xl leading-[1.05]">
              Een behandeling in <span className="italic-serif text-terracotta">zes rustige stappen</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Geen haast, geen kortere weg. Iedere stap is bewust, zodat jouw
              hond ontspannen blijft en de vacht in topconditie wordt teruggebracht.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl aspect-[5/4] bg-sand">
              <img src={salonImg} alt="Rustig salon-interieur Elswout" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
        <ol className="lg:col-span-7 space-y-3">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="flex gap-6 rounded-2xl border border-border bg-card p-7 hover:border-bark/40 transition-colors">
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
  );
}

function BrendaTeaser() {
  return (
    <section className="container-x mx-auto max-w-7xl mt-32">
      <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
        <Reveal className="md:col-span-5">
          <div className="overflow-hidden rounded-[2rem] aspect-[4/5] bg-sand">
            <img src={brendaImg} alt="Brenda van der Vaart, vachtspecialist" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal className="md:col-span-7" delay={1}>
          <div className="eyebrow mb-5">Over Brenda</div>
          <h2 className="font-serif text-bark text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Vijftien jaar ervaring, één <span className="italic-serif text-terracotta">passie</span> voor honden.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
            Negen jaar werkzaam bij een dierenartspraktijk, gevolgd door
            internationale opleidingen in Bedford, Los Angeles en Nederland.
            Gespecialiseerd in pluk-, wol- en hypoallergene vachten.
          </p>
          <blockquote className="mt-8 border-l-2 border-terracotta pl-6 font-serif text-2xl text-bark italic max-w-xl">
            "Mijn streven is vachtbehandeling op natuurlijke wijze, waarbij het
            belang van de hond, de conditie van huid en vacht voorop staan."
          </blockquote>
          <Link
            to="/over-brenda"
            className="mt-10 inline-flex items-center gap-2 text-bark border-b border-bark/40 pb-1 hover:text-terracotta hover:border-terracotta transition-colors"
          >
            Lees het verhaal van Brenda →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

const FAQ = [
  {
    q: "Hoe boek ik een afspraak?",
    a: "Vanwege de drukte in salon en winkel heeft WhatsApp de voorkeur (06 42 61 82 86). Houd rekening met een wachttijd van ca. twee maanden, boek je vervolgafspraak direct door.",
  },
  {
    q: "Waarom duurt een behandeling zo lang?",
    a: "Iedere hond wennt eerst rustig aan de salon. Daarna volgt een complete behandeling met borstelen, twee wasbeurten, drogen, modelleren en een eindcheck van oren, nagels en huid.",
  },
  {
    q: "Wat als mijn hond angstig of nerveus is?",
    a: "Wij behandelen ook extreem angstige of nerveuze honden op de meest diervriendelijke wijze. Wennen heeft altijd voorrang op snelheid.",
  },
  {
    q: "Werken jullie met natuurlijke producten?",
    a: "Ja. Wij gebruiken uitsluitend natuurlijke, hypoallergene verzorgingsproducten, geschikt voor allergische en gevoelige honden.",
  },
  {
    q: "Welke regio bedienen jullie?",
    a: "Haarlem, Overveen, Bloemendaal, Aerdenhout, Bentveld, Heemstede en Zandvoort. Onze salon ligt op de grens van Haarlem en Overveen, aan de Ramplaan 48.",
  },
];

function Faq() {
  return (
    <section className="container-x mx-auto max-w-7xl mt-32">
      <div className="grid md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-5">
          <div className="eyebrow mb-5">Veelgestelde vragen</div>
          <h2 className="font-serif text-bark text-4xl md:text-5xl leading-[1.05]">
            Antwoorden op de <span className="italic-serif text-terracotta">meest gestelde</span> vragen.
          </h2>
        </Reveal>
        <div className="md:col-span-7 divide-y divide-border border-t border-b border-border">
          {FAQ.map((f, i) => (
            <Reveal as="div" key={f.q} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <details className="group py-6">
                <summary className="flex justify-between items-center gap-6 cursor-pointer list-none">
                  <span className="font-serif text-xl text-bark">{f.q}</span>
                  <span className="text-terracotta transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "PetGroomer",
    name: "Hondentrimsalon Elswout",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ramplaan 48",
      postalCode: "2015 GX",
      addressLocality: "Haarlem",
      addressCountry: "NL",
    },
    telephone: "+31642618286",
    email: "info@elswouthondentrimsalon.nl",
    areaServed: ["Haarlem", "Overveen", "Bloemendaal", "Heemstede", "Aerdenhout", "Bentveld", "Zandvoort"],
    openingHours: ["Tu-Fr 09:00-18:00", "Sa 09:00-17:00"],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
