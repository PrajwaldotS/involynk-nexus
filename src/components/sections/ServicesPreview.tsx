import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/constants/site";
import { Reveal } from "@/components/animations/Reveal";

export function ServicesPreview() {
  return (
    <section className="relative py-32 lg:py-40 bg-foreground text-background overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "100px 100px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black 30%, transparent 80%)",
        }}
      />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-electric/30 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-8 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-background/50">
              ( Services / 002 )
            </p>
            <Reveal>
              <h2 className="text-display mt-4 text-5xl sm:text-7xl lg:text-8xl">
                What we
                <br />
                <span className="text-electric italic font-light">engineer.</span>
              </h2>
            </Reveal>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-background/20 px-5 py-2.5 text-sm hover:bg-background hover:text-foreground transition-colors"
          >
            All services <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        <div className="divide-y divide-background/10 border-y border-background/10">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-12 gap-6 py-8 lg:py-10 cursor-pointer"
            >
              <span className="col-span-2 text-sm text-background/40 font-mono">{s.number}</span>
              <h3 className="col-span-12 sm:col-span-5 text-display text-3xl sm:text-5xl lg:text-6xl group-hover:text-electric transition-colors">
                {s.title}
              </h3>
              <p className="col-span-12 sm:col-span-4 text-base text-background/60 leading-relaxed">
                {s.short}
              </p>
              <div className="col-span-12 sm:col-span-1 flex sm:justify-end items-start">
                <ArrowUpRight className="h-6 w-6 text-background/40 group-hover:text-electric group-hover:rotate-45 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
