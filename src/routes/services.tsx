import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal, SplitWords } from "@/components/animations/Reveal";
import { SERVICES, PROCESS } from "@/constants/site";
import { CTASection } from "@/components/sections/CTASection";
import { Marquee } from "@/components/sections/Marquee";

const STACK = [
  "Next.js", "React", "TypeScript", "TanStack", "Tailwind",
  "GSAP", "Framer Motion", "Three.js", "Supabase", "Vercel",
  "OpenAI", "Anthropic", "LangChain", "Pinecone", "Stripe",
  "React Native", "Expo", "Swift", "Kotlin", "Figma",
];

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services · Involynk" },
      { name: "description", content: "Web development, AI automation, app development, and social media — engineered with cinematic craft." },
    ],
  }),
});

function Services() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative pt-44 pb-24 px-6 overflow-hidden bg-mesh">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
            ( Services / Capabilities )
          </p>
          <h1 className="text-display text-[12vw] lg:text-[8.5vw] leading-[0.92]">
            <SplitWords text="Four" />{" "}
            <SplitWords text="disciplines." delay={0.05} className="text-electric italic font-light" />
            <br />
            <SplitWords text="One studio." delay={0.1} />
          </h1>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Tightly integrated services designed to turn ambitious brands into market-defining ones.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-7xl space-y-6">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid lg:grid-cols-12 gap-8 rounded-3xl border border-border p-8 lg:p-12 hover:border-electric/40 hover:shadow-glow transition-all overflow-hidden"
            >
              <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-electric/0 group-hover:bg-electric/20 blur-3xl transition-all duration-700" />
              <div className="lg:col-span-1">
                <span className="text-display text-electric text-5xl">{s.number}</span>
              </div>
              <div className="lg:col-span-4">
                <h2 className="text-display text-4xl lg:text-5xl">{s.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
              <div className="lg:col-span-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Capabilities</p>
                <ul className="space-y-2.5">
                  {s.capabilities.map((c) => (
                    <li key={c} className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 text-electric" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-3 relative h-48 lg:h-full min-h-[200px] rounded-2xl overflow-hidden bg-mesh border border-border/50">
                {s.image && (
                  <img
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="relative py-32 lg:py-40 px-6 bg-foreground text-background overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.25em] text-background/50 mb-6">( Workflow )</p>
          <Reveal>
            <h2 className="text-display text-5xl sm:text-6xl lg:text-7xl mb-16 max-w-4xl">
              A studio rhythm built for <span className="text-electric italic font-light">momentum.</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.07 }}
                className="rounded-2xl glass-dark p-6"
              >
                <span className="text-electric text-xs font-mono">{p.step}</span>
                <h3 className="text-display text-2xl mt-3">{p.title}</h3>
                <p className="mt-2 text-sm text-background/60 leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="relative py-32 lg:py-40 px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">( Stack )</p>
          <Reveal>
            <h2 className="text-display text-5xl sm:text-6xl lg:text-7xl mb-16 max-w-4xl">
              Tools we <span className="text-electric italic font-light">trust.</span>
            </h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {STACK.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.02 }}
                className="rounded-full border border-border px-5 py-2.5 text-sm hover:border-electric hover:text-electric transition-colors"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING / ENGAGEMENTS */}
      <section className="relative py-32 lg:py-40 px-6 border-t border-border">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">( Engagements )</p>
          <Reveal>
            <h2 className="text-display text-5xl sm:text-6xl lg:text-7xl mb-16 max-w-4xl">
              Three ways to <span className="text-electric italic font-light">work together.</span>
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { name: "Sprint", price: "from $9k", duration: "2 weeks", body: "Focused engagements: a landing page, an AI prototype, a brand sprint." },
              { name: "Studio", price: "from $35k", duration: "6–10 weeks", body: "Full builds: cinematic websites, products, automation systems." },
              { name: "Partner", price: "monthly", duration: "ongoing", body: "Embedded with your team. Strategy, design, engineering, AI ops." },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className="rounded-3xl border border-border p-8 lg:p-10 hover:border-electric/40 hover:shadow-elegant transition-all"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-electric">{t.name}</p>
                <p className="text-display text-4xl mt-4">{t.price}</p>
                <p className="text-muted-foreground text-sm mt-1">{t.duration}</p>
                <p className="mt-6 text-sm leading-relaxed">{t.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />
      <CTASection />
    </SiteShell>
  );
}
