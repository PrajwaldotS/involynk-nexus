import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useLenis } from "@/hooks/useLenis";

export function SiteShell({ children }: { children: ReactNode }) {
  useLenis();
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}
