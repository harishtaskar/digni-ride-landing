import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <section className="flex-1 container mx-auto px-4 py-32">
        <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We are always looking for talented individuals who are passionate about mobility and technology.
        </p>
        <div className="p-6 border rounded-lg bg-card">
          <h3 className="text-xl font-semibold mb-2">No open positions currently</h3>
          <p className="text-muted-foreground">Please check back later or send your resume to careers@digniride.com.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
