import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AppPreview } from "@/components/AppPreview";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <AppPreview />
      <FeaturesSection />
      <BenefitsSection />
      <CallToAction />
      <Footer />
    </main>
  );
}
