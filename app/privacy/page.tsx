import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <section className="flex-1 container mx-auto px-4 py-32 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h3>1. Information We Collect</h3>
          <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us.</p>
          
          <h3>2. How We Use Your Information</h3>
          <p>We use the information we collect to provide, maintain, and improve our services, such as to facilitate payments, send receipts, provide products and services you request (and send related information), develop new features, provide customer support to Users and Drivers, and send product updates and administrative messages.</p>
          
          <h3>3. Sharing of Information</h3>
          <p>We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including as follows: With Drivers to enable them to provide the Services you request.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
