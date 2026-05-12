import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROCESS } from "@/constants/site";
import { Reveal } from "@/components/animations/Reveal";

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative py-32 lg:py-48 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
          ( Process / 004 )
        </p>
        <Reveal>
          <h2 className="text-display text-5xl sm:text-6xl lg:text-7xl mb-20 max-w-4xl">
            From idea to <span className="text-electric italic font-light">launch.</span>
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-[1.6rem] sm:left-1/2 top-0 bottom-0 w-px bg-border" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[1.6rem] sm:left-1/2 top-0 w-px bg-electric origin-top"
          />
          <ul className="space-y-16">
            {PROCESS.map((p, i) => (
              <li key={p.step} className="relative grid sm:grid-cols-2 gap-6">
                <div className={`${i % 2 === 0 ? "sm:text-right sm:pr-16" : "sm:col-start-2 sm:pl-16"}`}>
                  <Reveal y={30}>
                    <span className="text-xs font-mono text-electric">{p.step}</span>
                    <h3 className="text-display text-3xl sm:text-4xl mt-2">{p.title}</h3>
                    <p className="mt-3 text-muted-foreground max-w-md sm:max-w-none">{p.body}</p>
                  </Reveal>
                </div>
                <span className="absolute left-[1.6rem] sm:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-electric ring-4 ring-background shadow-glow" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
