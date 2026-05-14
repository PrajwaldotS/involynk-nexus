import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal, SplitWords } from "@/components/animations/Reveal";
import { TEAM, VALUES, STATS } from "@/constants/site";
import { Marquee } from "@/components/sections/Marquee";
import { CTASection } from "@/components/sections/CTASection";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About · Involynk" },
      {
        name: "description",
        content:
          "We are a small studio of engineers, designers, and AI builders shaping cinematic digital experiences for ambitious brands.",
      },
    ],
  }),
});

function About() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative pt-44 pb-24 px-6 overflow-hidden bg-mesh">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
            ( About / Studio )
          </p>
          <h1 className="text-display text-[12vw] lg:text-[8.5vw] leading-[0.92]">
            <SplitWords text="A studio" />
            <br />
            <SplitWords text="for the" delay={0.05} />
            <br />
            <SplitWords text="curious." delay={0.1} className="text-electric italic font-light" />
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section className="relative py-24 lg:py-32 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">( Story )</p>
            <Reveal>
              <h2 className="text-display text-4xl mt-4">Origins</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <Reveal>
              <p>
                Involynk started in a quiet room with a simple frustration — most digital products feel forgettable.
                We wanted to build the opposite: cinematic, intentional, alive.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Today we're a small, senior team partnering with founders, brands, and operators who care about the
                details. We engineer the systems that make ambitious companies feel inevitable.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="relative py-24 lg:py-32 px-6 bg-foreground text-background overflow-hidden">
        <div className="absolute -top-32 right-1/4 h-[30rem] w-[30rem] rounded-full bg-electric/30 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-background/50">( Mission )</p>
            <h2 className="text-display text-5xl lg:text-6xl mt-6 leading-[1.05]">
              Engineer the digital surfaces of the next decade — with craft, calm, and clarity.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs uppercase tracking-[0.25em] text-background/50">( Vision )</p>
            <h2 className="text-display text-5xl lg:text-6xl mt-6 leading-[1.05]">
              A world where the best brands feel like the best products — and the best products feel like films.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-32 lg:py-40 px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">( Values )</p>
          <Reveal>
            <h2 className="text-display text-5xl sm:text-6xl lg:text-7xl mb-16 max-w-3xl">
              How we <span className="text-electric italic font-light">work.</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-3xl border border-border p-10 hover:border-electric/40 hover:shadow-glow transition-all"
              >
                <h3 className="text-display text-3xl">{v.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-24 px-6 border-y border-border">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div>
                <div className="text-display text-6xl text-electric">{s.value}</div>
                <p className="mt-3 text-sm text-muted-foreground uppercase tracking-[0.2em]">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="relative py-32 lg:py-40 px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">( Team )</p>
          <Reveal>
            <h2 className="text-display text-5xl sm:text-6xl lg:text-7xl mb-16 max-w-4xl">
              The <span className="text-electric italic font-light">people</span> behind the work.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((m, i) => (
              <motion.a
                key={m.name}
                href={m.linkedin}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-3xl border border-border overflow-hidden hover:border-electric/40 transition-all"
              >
                <div className="aspect-[4/5] relative bg-mesh overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-electric/20" />
                  {m.image ? (
                    <img
                      src={m.image}
                      alt={m.name}
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-display text-[10rem] text-foreground/10 group-hover:text-electric/20 transition-colors">
                        {m.initials}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 h-10 w-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Linkedin className="h-4 w-4 text-electric" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl">{m.name}</h3>
                  <p className="text-sm text-electric mt-1">{m.role}</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.bio}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative py-32 lg:py-40 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">( Philosophy )</p>
          <Reveal>
            <p className="text-display text-3xl sm:text-5xl lg:text-6xl leading-[1.1]">
              "We don't ship websites. We ship <span className="text-electric italic font-light">moments</span> that make people stop scrolling."
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 text-sm uppercase tracking-[0.25em] text-muted-foreground">— The Studio</p>
          </Reveal>
        </div>
      </section>

      {/* QUICK CTA STRIP */}
      <section className="relative py-20 px-6 border-y border-border">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <h3 className="text-display text-3xl sm:text-4xl">Want to peek inside our process?</h3>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-6 pr-4 py-3 text-sm font-medium hover:opacity-90"
          >
            Explore services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Marquee />
      <CTASection />
    </SiteShell>
  );
}
