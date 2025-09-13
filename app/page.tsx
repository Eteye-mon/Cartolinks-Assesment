import { Navigation } from "@/components/nav";
import { HeroCarousel } from "@/components/hero-carousel";
import { FeatureGrid } from "@/components/features";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-16">
        <HeroCarousel />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
}
