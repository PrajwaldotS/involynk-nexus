import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { HeroHome } from "@/components/sections/HeroHome";
import { Marquee } from "@/components/sections/Marquee";
import { Manifesto } from "@/components/sections/Manifesto";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { AIShowcase } from "@/components/sections/AIShowcase";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { StatsSection } from "@/components/sections/StatsSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Involynk · Building Intelligent Solutions For The Real World" },
      {
        name: "description",
        content:
          "Involynk is a creative engineering studio building cinematic websites, intelligent AI automations, mobile apps, and premium brand systems for ambitious teams.",
      },
    ],
  }),
});

function Home() {
  return (
    <SiteShell>
      <HeroHome />
      <Marquee />
      <Manifesto />
      <ServicesPreview />
      <AIShowcase />
      <ProcessSection />
      <FeaturedProjects />
      <StatsSection />
      <Testimonials />
      <CTASection />
    </SiteShell>
  );
}
