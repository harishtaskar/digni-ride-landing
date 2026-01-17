import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <section className="flex-1 container mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground">No hidden fees. Pay as you go.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="border rounded-2xl p-8 bg-card shadow-sm">
            <h3 className="text-2xl font-bold mb-2">Rider</h3>
            <p className="text-muted-foreground mb-6">For passengers looking for a ride.</p>
            <div className="text-4xl font-bold mb-6">$0<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> Pay only for your ride share</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> No booking fees</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> Verified drivers</li>
            </ul>
            <Button className="w-full">Download App</Button>
          </div>
          
          <div className="border rounded-2xl p-8 bg-primary text-primary-foreground shadow-lg transform md:-translate-y-4">
            <h3 className="text-2xl font-bold mb-2">Partner</h3>
            <p className="text-primary-foreground/80 mb-6">For bike owners offering rides.</p>
            <div className="text-4xl font-bold mb-6">10%<span className="text-lg font-normal text-primary-foreground/80"> fee</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><Check className="w-5 h-5 text-white mr-2" /> Earn money on your commute</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-white mr-2" /> Flexible schedule</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-white mr-2" /> Instant payouts</li>
            </ul>
            <Button variant="secondary" className="w-full">Become a Partner</Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
