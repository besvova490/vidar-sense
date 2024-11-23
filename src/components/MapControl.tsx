"use client";
import { useState } from "react";
import { useMap } from "react-leaflet";
import { Plus, Minus, PushPin, Crosshair } from "@phosphor-icons/react";

// elements
import { Button } from "./ui/button";

// helpers
import { cn } from "@/lib/utils";

const buttonClassName =
  "h-12 w-12 rounded-lg border border-[#E9ECEF] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)]";

export const MapControl = () => {
  const [isFixed, setIsFixed] = useState(false);

  const map = useMap();

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

  return (
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

      <div className="flex flex-col gap-8">coordinates</div>
    </div>
  );
};