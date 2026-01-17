import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start your journey?</h2>
        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
          Join thousands of riders who are saving money and commuting smarter with Digni Ride.
        </p>
          <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto text-primary">
            Download for Android
          </Button>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-white rounded-full blur-[120px]" />
          <div className="absolute bottom-[-100px] right-1/4 w-[400px] h-[400px] bg-white rounded-full blur-[100px]" />
      </div>
    </section>
  );
}
