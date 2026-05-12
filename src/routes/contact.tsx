import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal, SplitWords } from "@/components/animations/Reveal";
import { SITE } from "@/constants/site";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact · Involynk" },
      { name: "description", content: "Tell us about your project. We respond within one business day." },
    ],
  }),
});

const BUDGETS = ["< $10k", "$10k–$25k", "$25k–$75k", "$75k+"];
const SCOPES = ["Web Development", "AI Automation", "App Development", "Social Media", "Brand"];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [budget, setBudget] = useState<string | null>(null);
  const [scopes, setScopes] = useState<string[]>([]);

  const toggleScope = (s: string) =>
    setScopes((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden bg-mesh">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
            ( Contact / Start )
          </p>
          <h1 className="text-display text-[12vw] lg:text-[8.5vw] leading-[0.92]">
            <SplitWords text="Tell us" />
            <br />
            <SplitWords text="what" delay={0.05} />{" "}
            <SplitWords text="you're" delay={0.1} className="text-electric italic font-light" />
            <br />
            <SplitWords text="building." delay={0.15} />
          </h1>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12">
          {/* INFO */}
          <aside className="lg:col-span-4 space-y-10">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">( Direct )</p>
              <ul className="space-y-5">
                {[
                  { icon: Mail, label: SITE.email, href: `mailto:${SITE.email}` },
                  { icon: Phone, label: SITE.phone, href: `tel:${SITE.phone}` },
                  { icon: MapPin, label: SITE.location },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="h-10 w-10 rounded-xl glass flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-electric" />
                    </span>
                    {item.href ? (
                      <a href={item.href} className="hover:text-electric transition-colors">{item.label}</a>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">( Social )</p>
              <ul className="flex gap-3">
                {[
                  { icon: Linkedin, href: SITE.socials.linkedin },
                  { icon: Twitter, href: SITE.socials.twitter },
                  { icon: Instagram, href: SITE.socials.instagram },
                ].map((s, i) => (
                  <li key={i}>
                    <a href={s.href} className="h-11 w-11 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all">
                      <s.icon className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl glass p-6 shadow-elegant">
              <p className="text-xs uppercase tracking-[0.2em] text-electric">Response time</p>
              <p className="mt-2 text-display text-3xl">Within 24 hours.</p>
              <p className="mt-2 text-sm text-muted-foreground">Quality briefs get a personal reply from a partner — not a form letter.</p>
            </div>
          </aside>

          {/* FORM */}
          <div className="lg:col-span-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl glass shadow-elegant p-12 text-center"
              >
                <div className="h-14 w-14 mx-auto rounded-full bg-electric/15 flex items-center justify-center mb-6">
                  <ArrowUpRight className="h-6 w-6 text-electric" />
                </div>
                <h2 className="text-display text-4xl">Brief received.</h2>
                <p className="mt-4 text-muted-foreground">A partner will reply within one business day.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="rounded-3xl border border-border p-8 lg:p-12 space-y-10"
              >
                <Field label="01 / Your name">
                  <input required className="input" placeholder="Jane Doe" />
                </Field>
                <Field label="02 / Email">
                  <input required type="email" className="input" placeholder="you@company.com" />
                </Field>
                <Field label="03 / Company">
                  <input className="input" placeholder="Company name" />
                </Field>

                <Field label="04 / What do you need?">
                  <div className="flex flex-wrap gap-2">
                    {SCOPES.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => toggleScope(s)}
                        className={`rounded-full border px-4 py-2 text-sm transition-all ${
                          scopes.includes(s)
                            ? "border-electric bg-electric text-white"
                            : "border-border hover:border-electric/40"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="05 / Budget">
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setBudget(b)}
                        className={`rounded-full border px-4 py-2 text-sm transition-all ${
                          budget === b
                            ? "border-foreground bg-foreground text-background"
                            : "border-border hover:border-electric/40"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="06 / Tell us about the project">
                  <textarea required rows={5} className="input resize-none" placeholder="Goals, audience, timeline, references…" />
                </Field>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-6 pr-4 py-4 text-base font-medium hover:opacity-90"
                >
                  Send brief
                  <span className="h-7 w-7 rounded-full bg-background/15 flex items-center justify-center group-hover:rotate-45 transition-transform">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-32 lg:py-40 px-6 border-t border-border">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">( FAQ )</p>
            <Reveal>
              <h2 className="text-display text-5xl mt-4">Common questions.</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8 divide-y divide-border border-y border-border">
            {FAQS.map((q, i) => (
              <details key={i} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-display text-xl lg:text-2xl">{q.q}</span>
                  <span className="h-9 w-9 rounded-full border border-border flex items-center justify-center group-open:bg-foreground group-open:text-background group-open:rotate-45 transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">{q.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section className="relative py-32 px-6 text-center">
        <Reveal>
          <p className="text-display text-4xl lg:text-6xl">
            Or just say <a href={`mailto:${SITE.email}`} className="text-electric italic font-light underline-offset-4 hover:underline">hi.</a>
          </p>
        </Reveal>
      </section>
    </SiteShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">{label}</span>
      {children}
      <style>{`
        .input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--color-border);
          padding: 0.75rem 0;
          font-size: 1.125rem;
          outline: none;
          transition: border-color 0.3s;
        }
        .input:focus { border-color: var(--color-electric); }
        .input::placeholder { color: var(--color-muted-foreground); }
      `}</style>
    </label>
  );
}

const FAQS = [
  { q: "How quickly can you start?", a: "Most engagements kick off within 1–3 weeks. Sprint engagements can sometimes start the same week." },
  { q: "Do you work with early-stage startups?", a: "Yes — we love working with founders. We have flexible engagement models for pre-seed and seed-stage companies." },
  { q: "Where is the team based?", a: "Distributed across SF, NYC, London, and Berlin. We work async with overlapping focus hours." },
  { q: "What happens after launch?", a: "Most clients continue with us on a Partner engagement — ongoing strategy, design, and engineering support." },
];
