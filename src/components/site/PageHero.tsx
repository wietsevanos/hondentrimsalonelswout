import { type ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}

export function PageHero({ eyebrow, title, intro }: Props) {
  return (
    <section className="container-x mx-auto max-w-7xl pt-12 lg:pt-24">
      <div className="grid md:grid-cols-12 gap-10 items-end animate-fade-up">
        <div className="md:col-span-7">
          <div className="eyebrow mb-6">{eyebrow}</div>
          <h1 className="font-serif text-bark text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
            {title}
          </h1>
        </div>
        {intro ? (
          <div className="md:col-span-5 md:pl-8">
            <p className="text-lg text-muted-foreground leading-relaxed">{intro}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
