import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Cpu, Sparkles, Workflow } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";

const PILLARS = [
  { icon: Brain, title: "Reasoning agents", body: "Custom AI agents that handle real workflows — not just chat." },
  { icon: Workflow, title: "Always-on automation", body: "Pipelines that quietly run your business 24/7." },
  { icon: Cpu, title: "Native integrations", body: "Wired into Slack, Notion, HubSpot, your CRM, your stack." },
  { icon: Sparkles, title: "Human handoff", body: "Calm, transparent — your team stays in control." },
];

export function AIShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <section ref={ref} className="relative py-32 lg:py-48 px-6 overflow-hidden bg-mesh">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
            ( AI Lab / 003 )
          </p>
          <Reveal>
            <h2 className="text-display text-5xl sm:text-6xl lg:text-7xl leading-[1]">
              Intelligence
              <br />
              <span className="text-electric italic font-light">at the edge</span>
              <br />
              of your business.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg text-muted-foreground max-w-md leading-relaxed">
              We design AI systems that fit inside the way your team already works — calm, useful, and always on.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.06}>
                <div>
                  <div className="h-10 w-10 rounded-xl glass flex items-center justify-center shadow-glow">
                    <p.icon className="h-4 w-4 text-electric" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <motion.div
          style={{ y, rotate }}
          className="lg:col-span-6 relative aspect-square"
        >
          {/* Layered glass orb */}
          <div className="absolute inset-0 rounded-[3rem] bg-[var(--gradient-electric)] opacity-30 blur-3xl animate-pulse-glow" />
          <div className="absolute inset-8 rounded-[2.5rem] glass shadow-elegant overflow-hidden">
            <div className="absolute inset-0 [background:conic-gradient(from_180deg_at_50%_50%,oklch(0.95_0.05_250)_0deg,oklch(0.62_0.24_255/0.4)_120deg,oklch(0.95_0.05_250)_240deg,oklch(0.62_0.24_255/0.4)_360deg)] opacity-40 animate-[spin_18s_linear_infinite]" />
            <div className="absolute inset-12 rounded-[2rem] bg-background/80 backdrop-blur-xl flex flex-col p-8 gap-3">
              <div className="text-xs font-mono text-muted-foreground">// agent.run()</div>
              <div className="space-y-2">
                {[
                  "→ analyzing brief...",
                  "→ querying knowledge base",
                  "→ drafting proposal v3",
                  "✓ delivered to client",
                ].map((line, i) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.15 }}
                    viewport={{ once: true }}
                    className="text-sm font-mono"
                  >
                    {line}
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground font-mono">
                <span>uptime 99.99%</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-electric animate-pulse" />
                  live
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
