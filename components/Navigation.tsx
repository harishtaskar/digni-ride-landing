import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bike, Play } from "lucide-react";

export function Navigation() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Bike className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Digni Ride
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            How it Works
          </Link>
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Benefits
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button className="flex items-center space-x-2">
            <span>Download App</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
