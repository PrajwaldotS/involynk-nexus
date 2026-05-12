import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/constants/site";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Let's build something
            </p>
            <h2 className="text-display mt-4 text-5xl sm:text-7xl lg:text-8xl">
              Have a vision?
              <br />
              <span className="text-electric">We'll engineer it.</span>
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-6 pr-4 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-6 grid sm:grid-cols-3 gap-10 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Navigate
              </p>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="hover:text-electric transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Contact
              </p>
              <ul className="space-y-2.5 text-muted-foreground">
                <li>
                  <a href={`mailto:${SITE.email}`} className="hover:text-foreground">
                    {SITE.email}
                  </a>
                </li>
                <li>{SITE.phone}</li>
                <li>{SITE.location}</li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Social
              </p>
              <ul className="space-y-2.5 text-muted-foreground">
                <li><a className="hover:text-foreground" href={SITE.socials.linkedin}>LinkedIn</a></li>
                <li><a className="hover:text-foreground" href={SITE.socials.twitter}>Twitter</a></li>
                <li><a className="hover:text-foreground" href={SITE.socials.instagram}>Instagram</a></li>
                <li><a className="hover:text-foreground" href={SITE.socials.dribbble}>Dribbble</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 select-none">
          <div className="text-display text-[18vw] leading-[0.85] text-foreground/[0.06]">
            INVOLYNK
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Involynk Studio. All rights reserved.</p>
          <p>{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
