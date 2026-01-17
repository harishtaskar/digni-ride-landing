import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, DollarSign, Map, Shield, Smartphone, Zap } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Map className="w-6 h-6" />,
      title: "Smart Matching",
      description: "Find the most convenient rides based on your real-time location and route.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Effective",
      description: "Save significantly on daily commute costs by sharing fuel expenses.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verified Users",
      description: "Safety first. All profiles are verified with government ID and phone number.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Booking",
      description: "Request and approve rides in seconds with our streamlined interface.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Seamless App",
      description: "A beautiful, easy-to-use mobile experience designed for commuters.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Ride Assurance",
      description: "Real-time tracking and support to ensure a smooth journey every time.",
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Digni Ride?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Designed for the modern urban commuter. We solve the problems of traffic and expensive travel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 group hover:bg-primary hover:text-primary-foreground cursor-default">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-foreground/10 transition-colors">
                  <div className="text-primary group-hover:text-primary-foreground transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base group-hover:text-primary-foreground/90 transition-colors">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
