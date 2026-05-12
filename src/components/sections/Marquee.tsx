import { CLIENTS } from "@/constants/site";

export function Marquee() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <section className="relative border-y border-border bg-background py-8 overflow-hidden">
      <div className="flex animate-marquee gap-16 whitespace-nowrap text-2xl sm:text-3xl font-display tracking-tight text-foreground/40">
        {items.map((c, i) => (
          <span key={i} className="flex items-center gap-16">
            {c}
            <span className="h-1 w-1 rounded-full bg-electric" />
          </span>
        ))}
      </div>
    </section>
  );
}
