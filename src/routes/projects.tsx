import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal, SplitWords } from "@/components/animations/Reveal";
import { PROJECTS } from "@/constants/site";
import { CTASection } from "@/components/sections/CTASection";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects · Involynk" },
      { name: "description", content: "Selected work from the Involynk archive — cinematic websites, AI products, and brand systems." },
    ],
  }),
});

function Projects() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative pt-44 pb-24 px-6 overflow-hidden bg-mesh">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
            ( Selected Work / 2024 — 2025 )
          </p>
          <h1 className="text-display text-[12vw] lg:text-[8.5vw] leading-[0.92]">
            <SplitWords text="Work that" />
            <br />
            <SplitWords text="moves" delay={0.05} className="text-electric italic font-light" />{" "}
            <SplitWords text="people." delay={0.1} />
          </h1>
        </div>
      </section>

      {/* INDEX TABLE */}
      <section className="relative py-16 px-6 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="hidden md:grid grid-cols-12 text-xs uppercase tracking-[0.2em] text-muted-foreground pb-4 border-b border-border">
            <span className="col-span-1">№</span>
            <span className="col-span-4">Project</span>
            <span className="col-span-4">Discipline</span>
            <span className="col-span-2">Year</span>
            <span className="col-span-1 text-right">↗</span>
          </div>
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.slug}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group grid grid-cols-12 gap-4 py-6 border-b border-border hover:bg-accent/30 transition-colors px-2 -mx-2 rounded-xl items-center"
            >
              <span className="col-span-1 text-sm font-mono text-muted-foreground">0{i + 1}</span>
              <span className="col-span-7 md:col-span-4 text-display text-2xl group-hover:text-electric transition-colors">{p.name}</span>
              <span className="col-span-12 md:col-span-4 text-sm text-muted-foreground">{p.category}</span>
              <span className="hidden md:block col-span-2 text-sm font-mono text-muted-foreground">{p.year}</span>
              <span className="col-span-4 md:col-span-1 flex justify-end">
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-electric group-hover:rotate-45 transition-all" />
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* FULLSCREEN REVEALS */}
      {PROJECTS.map((p, i) => (
        <section key={p.slug} className="relative py-12 px-6">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-3xl overflow-hidden ${i % 2 === 0 ? "" : ""} aspect-[16/10] lg:aspect-[16/8]`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color}`} />
              <div className="absolute inset-0 [background:radial-gradient(circle_at_30%_20%,white/20,transparent_60%),radial-gradient(circle_at_80%_90%,white/10,transparent_50%)]" />

              {/* Mock device frame */}
              <div className="absolute inset-x-12 lg:inset-x-32 bottom-0 top-32 lg:top-40 rounded-t-2xl bg-background/95 backdrop-blur-xl shadow-elegant overflow-hidden border-t border-x border-border">
                <div className="h-8 bg-foreground/5 flex items-center px-4 gap-1.5 border-b border-border">
                  <span className="h-2 w-2 rounded-full bg-foreground/15" />
                  <span className="h-2 w-2 rounded-full bg-foreground/15" />
                  <span className="h-2 w-2 rounded-full bg-foreground/15" />
                </div>
                <div className="p-8 grid grid-cols-3 gap-3">
                  <div className="col-span-3 h-6 w-32 rounded bg-foreground/10" />
                  <div className="col-span-3 h-16 rounded bg-foreground/5" />
                  {[1,2,3].map((k) => (
                    <div key={k} className="aspect-square rounded-xl bg-foreground/5" />
                  ))}
                </div>
              </div>

              {/* Header overlay */}
              <div className="absolute top-8 left-8 right-8 flex items-start justify-between text-white">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] opacity-70">{p.category} · {p.year}</p>
                  <h2 className="text-display text-4xl lg:text-6xl mt-2">{p.name}</h2>
                </div>
                <div className="h-12 w-12 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">{p.summary}</p>
            </Reveal>
          </div>
        </section>
      ))}

      {/* PHILOSOPHY */}
      <section className="relative py-32 lg:py-40 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">( Process )</p>
          <Reveal>
            <p className="text-display text-3xl sm:text-5xl lg:text-6xl leading-[1.1]">
              Every project ships like a <span className="text-electric italic font-light">product launch</span> — pacing, narrative, and motion choreographed end to end.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </SiteShell>
  );
}
