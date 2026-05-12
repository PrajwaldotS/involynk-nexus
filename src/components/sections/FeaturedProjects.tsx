import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/constants/site";
import { Reveal } from "@/components/animations/Reveal";

export function FeaturedProjects() {
  return (
    <section className="relative py-32 lg:py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between flex-wrap gap-8 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              ( Selected Work / 005 )
            </p>
            <Reveal>
              <h2 className="text-display mt-4 text-5xl sm:text-7xl lg:text-8xl">
                Built with <span className="text-electric italic font-light">intention.</span>
              </h2>
            </Reveal>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            View archive <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.slice(0, 4).map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-3xl ${i % 3 === 0 ? "md:col-span-2 aspect-[2/1]" : "aspect-[4/3]"}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color}`} />
              <div className="absolute inset-0 [background:radial-gradient(circle_at_30%_30%,white/15,transparent_60%)]" />
              <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{
                backgroundImage: "radial-gradient(circle at 70% 80%, rgba(255,255,255,0.4), transparent 50%)"
              }} />
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.02]" />

              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between text-white">
                <div className="flex items-start justify-between text-xs uppercase tracking-[0.2em]">
                  <span>{p.category}</span>
                  <span>{p.year}</span>
                </div>
                <div>
                  <h3 className="text-display text-4xl sm:text-5xl lg:text-6xl">{p.name}</h3>
                  <p className="mt-3 max-w-md text-white/80 text-sm leading-relaxed">{p.summary}</p>
                </div>
              </div>
              <div className="absolute top-6 right-6 h-11 w-11 rounded-full bg-white/15 backdrop-blur flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
