"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { Layers, Navigation } from "lucide-react";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

interface MapboxMapProps {
  latitude: number;
  longitude: number;
  title?: string;
  address?: string;
  zoom?: number;
  enable3D?: boolean;
  defaultView?: "2d" | "3d";
  pitch3D?: number;
  bearing3D?: number;
  markerColor?: string;
  className?: string;
  showDirections?: boolean;
}

export default function MapboxMap({
  latitude,
  longitude,
  title = "Our Office",
  address,
  zoom = 16,
  enable3D = true,
  defaultView = "3d",
  pitch3D = 60,
  bearing3D = -20,
  markerColor = "#3b82f6",
  className = "w-full h-[450px] sm:h-[550px] lg:h-[600px]",
  showDirections = true,
}: MapboxMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markerRef = useRef<mapboxgl.Marker | null>(null);

  const [is3D, setIs3D] = useState(defaultView === "3d");

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    if (!mapboxgl.accessToken) {
      console.error(
        "Mapbox access token is missing. Add NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN to your .env file",
      );
      return;
    }

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [longitude, latitude],
      zoom,
      pitch: is3D ? pitch3D : 0,
      bearing: is3D ? bearing3D : 0,
      antialias: true,
    });

    map.addControl(
      new mapboxgl.NavigationControl({
        showCompass: true,
        showZoom: true,
        visualizePitch: true,
      }),
      "top-right",
    );

    map.addControl(new mapboxgl.FullscreenControl(), "top-right");

    mapRef.current = map;

    const el = document.createElement("div");
    el.className = "custom-marker";
    el.style.width = "40px";
    el.style.height = "40px";
    el.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='${encodeURIComponent(markerColor)}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'%3E%3C/path%3E%3Ccircle cx='12' cy='10' r='3' fill='${encodeURIComponent(markerColor)}'%3E%3C/circle%3E%3C/svg%3E")`;
    el.style.backgroundSize = "contain";
    el.style.cursor = "pointer";
    el.style.filter = "drop-shadow(0 2px 4px rgba(0,0,0,0.2))";

    const popup = new mapboxgl.Popup({
      offset: 25,
      closeButton: false,
      maxWidth: "280px",
    }).setHTML(`
      <div style="padding: 8px;">
        <h3 style="font-weight: 600; font-size: 15px; margin-bottom: 4px; color: #1f2937;">${title}</h3>
        ${address ? `<p style="font-size: 13px; color: #6b7280; line-height: 1.4;">${address}</p>` : ""}
      </div>
    `);

    markerRef.current = new mapboxgl.Marker(el)
      .setLngLat([longitude, latitude])
      .setPopup(popup)
      .addTo(map);

    markerRef.current.togglePopup();

    map.on("load", () => {
      const labelLayerId = map
        .getStyle()
        .layers?.find(
          (l) => l.type === "symbol" && l.layout?.["text-field"],
        )?.id;

      if (!map.getLayer("3d-buildings")) {
        map.addLayer(
          {
            id: "3d-buildings",
            source: "composite",
            "source-layer": "building",
            filter: ["==", "extrude", "true"],
            type: "fill-extrusion",
            minzoom: 15,
            paint: {
              "fill-extrusion-color": [
                "interpolate",
                ["linear"],
                ["get", "height"],
                0,
                "#e0e7ff",
                50,
                "#c7d2fe",
                100,
                "#a5b4fc",
              ],
              "fill-extrusion-height": ["get", "height"],
              "fill-extrusion-base": ["get", "min_height"],
              "fill-extrusion-opacity": 0.85,
            },
          },
          labelLayerId,
        );
      }
    });

    return () => {
      markerRef.current?.remove();
      map.remove();
      markerRef.current = null;
      mapRef.current = null;
    };
  }, [
    latitude,
    longitude,
    title,
    address,
    zoom,
    markerColor,
    is3D,
    pitch3D,
    bearing3D,
  ]);

  useEffect(() => {
    if (!mapRef.current) return;

    mapRef.current.easeTo({
      pitch: is3D ? pitch3D : 0,
      bearing: is3D ? bearing3D : 0,
      duration: 800,
    });
  }, [is3D, pitch3D, bearing3D]);

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-accent/30">
      <div ref={mapContainerRef} className={className} />

      <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
        {enable3D && (
          <button
            onClick={() => setIs3D((prev) => !prev)}
            className="bg-card dark:bg-card px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-200 border-2 border-accent/30"
            title={is3D ? "Switch to 2D view" : "Switch to 3D view"}
          >
            <Layers size={18} />
            <span>{is3D ? "2D View" : "3D View"}</span>
          </button>
        )}

        {showDirections && (
          <button
            onClick={handleGetDirections}
            className="bg-gradient-to-br from-primary to-secondary text-primary-foreground px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2 text-sm font-semibold hover:scale-105 transition-all duration-200"
            title="Get directions"
          >
            <Navigation size={18} />
            <span>Get Directions</span>
          </button>
        )}
      </div>
    </div>
  );
}
