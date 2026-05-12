import { Reveal } from "@/components/animations/Reveal";
import { STATS } from "@/constants/site";

export function StatsSection() {
  return (
    <section className="relative py-24 lg:py-32 px-6 border-y border-border">
      <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div>
              <div className="text-display text-6xl lg:text-7xl">
                <span className="text-electric">{s.value}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground uppercase tracking-[0.2em]">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
