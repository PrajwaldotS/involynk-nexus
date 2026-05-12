import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Involynk delivered a launch experience that felt like a film. Press, investors, and candidates all responded — we filled three roles in a week.",
    name: "Priya Shah",
    role: "Co-founder, Northwind Labs",
  },
  {
    quote:
      "They rebuilt our entire ops layer with AI agents quietly running underneath. Our team gets to do creative work again.",
    name: "Daniel Roe",
    role: "COO, Lumen OS",
  },
  {
    quote:
      "The motion direction alone was worth the engagement. Premium, restrained, and unmistakably ours.",
    name: "Imani Clarke",
    role: "Brand Director, Atlas Studio",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 lg:py-40 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
          ( Voices / 006 )
        </p>
        <Reveal>
          <h2 className="text-display text-5xl sm:text-6xl lg:text-7xl mb-16 max-w-4xl">
            Trusted by teams who <span className="text-electric italic font-light">ship.</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl glass shadow-elegant p-8 lg:p-10 flex flex-col gap-6"
            >
              <svg className="h-6 w-6 text-electric" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 7H5a2 2 0 00-2 2v8h8V9a2 2 0 00-2-2zm10 0h-4a2 2 0 00-2 2v8h8V9a2 2 0 00-2-2z" />
              </svg>
              <blockquote className="text-lg leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-auto">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
