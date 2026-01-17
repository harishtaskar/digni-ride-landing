import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Locate, MapPin, Users } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <MapPin className="w-10 h-10 text-rose-500" />,
      title: "Create a Ride",
      description: "Enter your destination and schedule. Offer a ride to others going the same way.",
    },
    {
      icon: <Locate className="w-10 h-10 text-blue-500" />,
      title: "Find Matches",
      description: "Our algorithm matches you with nearby riders or passengers instantly.",
    },
    {
      icon: <Users className="w-10 h-10 text-emerald-500" />,
      title: "Travel Together",
      description: "Meet up, share the cost, and enjoy a faster, friendlier commute.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">How Digni Ride Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes. Whether you have a bike or need a ride, we make it simple.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative group">
              <div className="w-20 h-20 bg-background rounded-2xl shadow-sm border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-border -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
