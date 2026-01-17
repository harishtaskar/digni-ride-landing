import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <section className="flex-1 container mx-auto px-4 py-32">
        <h1 className="text-4xl font-bold mb-6">About Digni Ride</h1>
        <p className="text-lg text-muted-foreground mb-4">
          Digni Ride is dedicated to revolutionizing urban commuting through safe, efficient, and community-driven motorcycle ride-sharing.
        </p>
        <p className="text-lg text-muted-foreground">
          Our mission is to reduce traffic congestion, lower carbon emissions, and provide an affordable transportation option for everyone.
        </p>
      </section>
      <Footer />
    </main>
  );
}
