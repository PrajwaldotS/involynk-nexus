import type { ReactNode } from "react";

/**
 * Layout (Navbar, Footer, Lenis, PageTransition) now lives in __root.tsx
 * so it persists across route changes — required for cinematic transitions.
 * SiteShell remains a passthrough for backwards compatibility with existing
 * route files.
 */
export function SiteShell({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
