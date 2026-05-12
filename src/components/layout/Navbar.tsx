import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6"
      >
        <nav
          className={cn(
            "mx-auto max-w-6xl flex items-center justify-between gap-6 rounded-full pl-5 pr-2 py-2 transition-all duration-500",
            scrolled
              ? "glass shadow-elegant"
              : "bg-background/40 backdrop-blur-md border border-border/40"
          )}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <Logo />
            <span className="font-display text-[15px] font-semibold tracking-tight">
              {SITE.name}
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1 text-[13px] text-muted-foreground">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeProps={{ className: "text-foreground bg-accent/60" }}
                  activeOptions={{ exact: true }}
                  className="px-3.5 py-2 rounded-full transition-colors hover:text-foreground hover:bg-accent/40"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background pl-4 pr-3 py-2 text-[13px] font-medium hover:opacity-90 transition-opacity"
            >
              Start Project <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden h-9 w-9 rounded-full bg-foreground text-background flex items-center justify-center"
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-xl pt-28 px-8"
          >
            <ul className="flex flex-col gap-4 text-4xl font-display tracking-tight">
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link to={l.to} className="block py-2">
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Logo() {
  return (
    <div className="relative h-7 w-7 rounded-lg bg-foreground flex items-center justify-center overflow-hidden">
      <span className="absolute inset-0 bg-[var(--gradient-electric)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <svg viewBox="0 0 24 24" className="relative h-3.5 w-3.5 text-background" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M4 18 L12 6 L20 18" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="6" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
}
