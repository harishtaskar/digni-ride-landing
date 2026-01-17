"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, Bike, Motorbike } from "lucide-react";
import dynamic from "next/dynamic";

const MapBackground = dynamic(() => import("./MapBackground"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-muted/10" />,
});

export function HeroSection() {
  const [riderCount, setRiderCount] = useState(124);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    // Randomize count occasionally
    if (Math.random() > 0.9) {
      setRiderCount(Math.floor(Math.random() * (160 - 40 + 1)) + 40);
    }
  };

  return (
    <section
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-4 relative z-10 bg-opacity-60">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Motorbike className="w-4 h-4 mr-2" />
            Ride Sharing Reimagined
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Share your ride. <br />
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Travel together.
            </span>
          </h1>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Connect with riders heading your way. Save money, reduce traffic,
            and make your daily commute more efficient with Digni Ride.
          </p>
        </div>
      </div>

      {/* Floating Badge Example */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-0 left-0 pointer-events-none z-50 hidden lg:flex items-center gap-2 bg-background/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-primary/20"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-sm font-medium whitespace-nowrap">
          {riderCount} Active Riders
        </span>
      </motion.div>

      {/* Interactive Map Background */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <MapBackground />
      </div>
    </section>
  );
}
