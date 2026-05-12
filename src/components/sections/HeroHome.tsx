import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SITE } from "@/constants/site";
import { SplitWords } from "@/components/animations/Reveal";

export function HeroHome() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  // Mouse glow follow
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-mesh">
      {/* Ambient blobs */}
      <motion.div
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        className="pointer-events-none absolute h-[36rem] w-[36rem] rounded-full bg-electric/20 blur-[120px] mix-blend-multiply"
      />
      <div className="absolute inset-0 [background:radial-gradient(circle_at_20%_20%,oklch(0.95_0.05_250/0.5),transparent_50%),radial-gradient(circle_at_80%_60%,oklch(0.9_0.08_240/0.4),transparent_50%)]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 mx-auto max-w-7xl px-6 pt-44 pb-32 lg:pt-56"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-glow absolute inline-flex h-full w-full rounded-full bg-electric opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
          </span>
          <span>Studio · Available for new partnerships · 2026</span>
        </motion.div>

        <h1 className="text-display mt-10 text-[14vw] sm:text-[12vw] lg:text-[9.5vw] leading-[0.92]">
          <SplitWords text="Building" />
          <br />
          <SplitWords text="intelligent" delay={0.1} className="text-electric italic font-light" />
          <br />
          <SplitWords text="solutions." delay={0.2} />
        </h1>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            {SITE.name} is a creative engineering studio designing cinematic websites, intelligent automations, and premium brand systems for ambitious teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="lg:col-span-7 lg:col-start-9 flex items-center justify-end gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground"
          >
            <ArrowDown className="h-3.5 w-3.5" />
            Scroll to explore
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
