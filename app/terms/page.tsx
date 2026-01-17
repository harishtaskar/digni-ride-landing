import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <section className="flex-1 container mx-auto px-4 py-32 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h3>1. Contractual Relationship</h3>
          <p>These Terms of Use ("Terms") govern the access or use by you, an individual, from within any country in the world of applications, websites, content, products, and services made available by Digni Ride.</p>
          
          <h3>2. The Services</h3>
          <p>The Services constitute a technology platform that enables users of Digni Ride's mobile applications or websites provided as part of the Services to arrange and schedule transportation and/or logistics services with independent third party providers of such services.</p>
          
          <h3>3. Your Use of the Services</h3>
          <p>In order to use most aspects of the Services, you must register for and maintain an active personal user Services account. You must be at least 18 years of age to obtain an Account.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
