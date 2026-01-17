"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polyline, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// San Francisco coordinates
const CENTER: [number, number] = [37.7749, -122.4194];

const ROUTES = [
  {
    id: 1,
    coordinates: [
      [37.7749, -122.4194],
      [37.7649, -122.4100],
      [37.7549, -122.4000],
      [37.7149, -122.3900],
      [37.6213, -122.3790],
    ] as [number, number][],
    color: "#3b82f6", // blue-500
  },
  {
    id: 2,
    coordinates: [
      [37.8199, -122.4783],
      [37.8000, -122.4500],
      [37.7900, -122.4300],
      [37.7749, -122.4194],
    ] as [number, number][],
    color: "#10b981", // green-500
  },
  {
    id: 3,
    coordinates: [
      [37.7544, -122.4477],
      [37.7600, -122.4350],
      [37.7650, -122.4250],
      [37.7700, -122.4150],
    ] as [number, number][],
    color: "#f59e0b", // amber-500
  },
];

function MapController() {
  const map = useMap();

  useEffect(() => {
    map.invalidateSize();
  }, [map]);

  return null;
}

export default function MapBackground() {
  const [activeRoute, setActiveRoute] = useState<number | null>(null);

  return (
    <div className="w-full h-full opacity-40 grayscale-[10%] relative">
      <style jsx global>{`
        .leaflet-container {
          background: transparent !important;
        }
      `}</style>
      <MapContainer
        center={CENTER}
        zoom={12}
        scrollWheelZoom={false}
        zoomControl={false}
        dragging={false}
        doubleClickZoom={false}
        touchZoom={false}
        className="w-full h-full pointer-events-auto"
        style={{ background: "transparent" }}
      >
        <MapController />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {ROUTES.map((route) => (
          <Polyline
            key={route.id}
            positions={route.coordinates}
            pathOptions={{
              color: route.id === activeRoute ? route.color : "#64748b", // slate-500
              weight: route.id === activeRoute ? 6 : 4,
              opacity: route.id === activeRoute ? 1 : 0.6,
              className: "transition-all duration-300",
              lineCap: "round",
              lineJoin: "round",
            }}
            eventHandlers={{
              mouseover: (e) => {
                const target = e.target;
                target.setStyle({ weight: 8, opacity: 1, color: route.color });
                setActiveRoute(route.id);
              },
              mouseout: (e) => {
                const target = e.target;
                target.setStyle({ weight: 4, opacity: 0.6, color: "#64748b" });
                setActiveRoute(null);
              },
            }}
          />
        ))}
      </MapContainer>

      {/* Overlay to fade map into background/content */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none z-[1]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-[2]" />
    </div>
  );
}
