import { useEffect, useRef, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import gsap from "gsap";

/**
 * Cinematic GSAP page transition.
 * Three vertical slabs sweep across the viewport on route change,
 * scroll resets at the apex (covered) so scroll storytelling stays intact,
 * then content reveals with a blur + lift.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const pathname = location.pathname;

  const overlayRef = useRef<HTMLDivElement>(null);
  const slab1 = useRef<HTMLDivElement>(null);
  const slab2 = useRef<HTMLDivElement>(null);
  const slab3 = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [renderedPath, setRenderedPath] = useState(pathname);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      // Initial mount intro
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 24, filter: "blur(14px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "expo.out",
          clearProps: "transform,filter",
        }
      );
      return;
    }

    const slabs = [slab1.current, slab2.current, slab3.current];
    const tl = gsap.timeline();

    // Cover
    tl.set(overlayRef.current, { pointerEvents: "auto" })
      .set(slabs, { yPercent: 100 })
      .set(labelRef.current, { autoAlpha: 0, y: 20 })
      .to(slabs, {
        yPercent: 0,
        duration: 0.85,
        ease: "expo.inOut",
        stagger: 0.06,
      })
      .to(
        labelRef.current,
        { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.45"
      )
      // Swap content while covered
      .add(() => {
        setRenderedPath(pathname);
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "auto" });
        }
      })
      // Hold a beat
      .to({}, { duration: 0.18 })
      .to(labelRef.current, {
        autoAlpha: 0,
        y: -12,
        duration: 0.35,
        ease: "power2.in",
      })
      // Reveal
      .to(slabs, {
        yPercent: -100,
        duration: 0.95,
        ease: "expo.inOut",
        stagger: 0.05,
      })
      .fromTo(
        contentRef.current,
        { opacity: 0, y: 36, filter: "blur(18px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.0,
          ease: "expo.out",
          clearProps: "transform,filter",
        },
        "-=0.7"
      )
      .set(overlayRef.current, { pointerEvents: "none" });

    return () => {
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const label = labelFor(pathname);

  return (
    <>
      <div
        ref={contentRef}
        className="relative"
        style={{ willChange: "transform, filter, opacity" }}
      >
        <div key={renderedPath}>{children}</div>
      </div>

      <div
        ref={overlayRef}
        aria-hidden
        className="fixed inset-0 z-[100] pointer-events-none"
      >
        <div className="absolute inset-0 flex">
          <div ref={slab1} className="relative h-full w-1/3 bg-foreground -translate-y-full" />
          <div ref={slab2} className="relative h-full w-1/3 bg-foreground -translate-y-full" />
          <div ref={slab3} className="relative h-full w-1/3 bg-foreground -translate-y-full" />
        </div>
        <div
          ref={labelRef}
          className="absolute inset-0 flex items-center justify-center opacity-0"
        >
          <div className="text-background font-display text-5xl sm:text-7xl md:text-8xl tracking-tight">
            <span className="opacity-60 mr-3 text-2xl sm:text-3xl align-middle">
              ⟶
            </span>
            {label}
          </div>
        </div>
      </div>
    </>
  );
}

function labelFor(path: string) {
  if (path === "/" || path === "") return "Home";
  const seg = path.replace(/^\//, "").split("/")[0];
  return seg.charAt(0).toUpperCase() + seg.slice(1);
}
