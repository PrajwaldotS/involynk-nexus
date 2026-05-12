import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";

export function CTASection() {
  return (
    <section className="relative py-32 lg:py-48 px-6 overflow-hidden bg-foreground text-background">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-electric/40 blur-[160px] animate-pulse-glow" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative mx-auto max-w-6xl text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-background/50 mb-8">
            ( Next chapter / 007 )
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-display text-6xl sm:text-8xl lg:text-[10rem] leading-[0.9]">
            Let's design
            <br />
            the <span className="text-electric italic font-light">future</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <Link
            to="/contact"
            className="mt-14 inline-flex items-center gap-2 rounded-full bg-background text-foreground pl-7 pr-5 py-4 text-base font-medium hover:scale-[1.03] transition-transform"
          >
            Start a project <ArrowUpRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
