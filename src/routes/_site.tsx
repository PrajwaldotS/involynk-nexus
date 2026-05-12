import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLenis } from "@/hooks/useLenis";

export const Route = createFileRoute("/_site")({
  component: SiteLayout,
});

function SiteLayout() {
  useLenis();
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
