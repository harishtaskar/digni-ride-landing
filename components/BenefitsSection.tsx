import { Zap, Clock, ShieldCheck, Leaf } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      title: "Save on Fuel",
      description: "Sharing your ride means sharing the cost. Save up to 50% on your daily commute expenses.",
      icon: <Zap className="w-12 h-12 text-yellow-500 mb-4" />,
    },
    {
      title: "Save Time",
      description: "Motorcycles can navigate traffic faster than cars. Cut down your travel time significantly.",
      icon: <Clock className="w-12 h-12 text-blue-500 mb-4" />,
    },
    {
      title: "Reduce Traffic",
      description: "Fewer vehicles on the road means less congestion for everyone. Be part of the solution.",
      icon: <Leaf className="w-12 h-12 text-green-500 mb-4" />,
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Commute Smarter</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Digni Ride isn't just a ride app; it's a movement towards better urban mobility.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-background rounded-2xl p-8 shadow-sm border text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out"
            >
              <div className="flex justify-center transition-transform duration-300 hover:scale-110">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
