import { Reveal } from "@/components/animations/Reveal";

export function Manifesto() {
  return (
    <section className="relative py-32 lg:py-48 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10">
            ( Manifesto / 001 )
          </p>
        </Reveal>
        <h2 className="text-display text-3xl sm:text-5xl lg:text-6xl leading-[1.1] max-w-5xl">
          {WORDS.map((w, i) => (
            <Reveal key={i} delay={i * 0.04} y={40} className="inline-block mr-[0.25em]">
              <span className={w.electric ? "text-electric italic font-light" : ""}>
                {w.text}
              </span>
            </Reveal>
          ))}
        </h2>
      </div>
    </section>
  );
}

const WORDS = [
  { text: "We build" },
  { text: "the digital" },
  { text: "infrastructure" },
  { text: "behind", electric: true },
  { text: "ambitious", electric: true },
  { text: "brands —", electric: true },
  { text: "cinematic" },
  { text: "websites," },
  { text: "intelligent" },
  { text: "automations," },
  { text: "and" },
  { text: "products" },
  { text: "people" },
  { text: "remember." },
];
