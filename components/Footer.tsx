import Link from "next/link";
import { Bike, Motorbike } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Motorbike className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">Digni Ride</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs text-center md:text-left">
              The smartest way to commute. Share rides, save costs, and travel
              together.
            </p>
          </div>

          <div className="flex space-x-8">
            <div className="flex flex-col space-y-4 items-center md:items-start">
              <h4 className="font-semibold">Product</h4>
              <Link
                href="/#how-it-works"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                How it works
              </Link>
              <Link
                href="/#features"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Pricing
              </Link>
            </div>
            <div className="flex flex-col space-y-4 items-center md:items-start">
              <h4 className="font-semibold">Company</h4>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/careers"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col space-y-4 items-center md:items-start">
              <h4 className="font-semibold">Legal</h4>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Digni Ride Sharing. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
