import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import StatsSection from "@/components/ui/stats-section";
import TrendsSection from "@/components/ui/trends-section";
import PricePredictions from "@/components/ui/price-predictions";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <TrendsSection />
      <PricePredictions />
    </div>
  );
}
