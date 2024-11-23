"use client";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import { Plus, Minus, PushPin, Crosshair, MapPin } from "@phosphor-icons/react";

// elements
import { Button } from "./ui/button";

// helpers
import { cn } from "@/lib/utils";
import { toMgrs } from "@/lib/coordinates";

// assets
import { Cursor } from "@/assets/icons/Cursor";

const buttonClassName =
  "h-12 w-12 rounded-lg border border-[#E9ECEF] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)]";

export const MapControl = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [coordinates, setCoordinates] = useState("");

  const map = useMap();

  useEffect(() => {
    const updateCoordinates = () => {
      const center = map.getCenter();
      const mgrsCoords = toMgrs(center.lat, center.lng);
      setCoordinates(mgrsCoords);
    };

    // Update initially
    updateCoordinates();

    // Update when map moves
    map.on("move", updateCoordinates);

    return () => {
      map.off("move", updateCoordinates);
    };
  }, [map]);

  const handleZoomIn = () => {
    map.zoomIn();
  };

  const handleZoomOut = () => {
    map.zoomOut();
  };

  const handleFixMap = () => {
    setIsFixed(!isFixed);

    if (!isFixed) {
      map.dragging.disable();
      map.touchZoom.disable();
      map.doubleClickZoom.disable();
      map.scrollWheelZoom.disable();

      return;
    }

    map.dragging.enable();
    map.touchZoom.enable();
    map.doubleClickZoom.enable();
    map.scrollWheelZoom.enable();
  };

  const handleMyLocation = () => {
    map
      .locate({ setView: true, maxZoom: 16 })
      .on("locationfound", (e) => {
        map.setView(e.latlng, 16);
      })
      .on("locationerror", (e) => {
        console.error("Error getting location:", e.message);
      });
  };

  const handleCopyCoordinates = () => {
    try {
      navigator.clipboard.writeText(coordinates);
    } catch (error) {
      console.error("Failed to copy coordinates:", error);
    }
  };

  return (
    <>
      <div className="absolute left-6 top-6 z-[1000] flex h-[90%] flex-col justify-between">
        <div className="flex flex-col gap-8">
          <Button
            variant="outline"
            size="icon"
            onClick={handleFixMap}
            className={cn(buttonClassName, {
              "bg-blue-100 border-blue-500": isFixed,
            })}
          >
            <PushPin
              color="#343330"
              style={{ height: 32, width: 32 }}
              weight="regular"
            />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={handleMyLocation}
            className={buttonClassName}
            disabled={isFixed}
          >
            <Crosshair
              color="#343330"
              style={{ height: 32, width: 32 }}
              weight="regular"
            />
          </Button>
        </div>
        <div className="flex flex-col gap-8">
          <Button
            variant="outline"
            size="icon"
            onClick={handleZoomIn}
            className={buttonClassName}
            disabled={isFixed}
          >
            <Plus
              color="#343330"
              style={{ height: 32, width: 32 }}
              weight="regular"
            />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={handleZoomOut}
            className={buttonClassName}
            disabled={isFixed}
          >
            <Minus
              color="#343330"
              style={{ height: 32, width: 32 }}
              weight="regular"
            />
          </Button>
        </div>

        <div
          className="p-3 flex gap-3 rounded border border-gray-200 bg-white shadow-md"
          onClick={handleCopyCoordinates}
        >
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-gray-400" weight="regular" />
            <div className="text-gray-400 text-base font-medium leading-6">
              MGRS
            </div>
          </div>
          <div className="text-2xl font-bold leading-6">{coordinates}</div>
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[999]">
        <Cursor />
      </div>
    </>
  );
};
