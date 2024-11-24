"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// constants
import { IDetectedEvent, DEFAULT_EVENTS } from "@/constants/event";

const Map = dynamic(() => import("@/containers/Map"), { ssr: false });
const Drawer = dynamic(() => import("@/containers/Drawer"), { ssr: false });

export default function Home() {
  const [detectedEvents, setDetectedEvents] =
    useState<IDetectedEvent[]>(DEFAULT_EVENTS);

  const [drawer, setDrawer] = useState<null | string>(null);
  
  const handleOpenDrawer = (id: string) => {
    setDrawer(id);
  };

  const handleCloseDrawer = () => {
    setDrawer(null);
  };

  const handleRemoveEvent = (id: string) => {
    setDetectedEvents((prev) => prev.filter((event) => event.id !== id));
  };

  const handleConfirmEvent = (id: string) => {
    setDetectedEvents((prev) =>
      prev.map((event) => (event.id === id ? { ...event, isApproved: true } : event))
    );
  };

  const selectedEvent = detectedEvents.find((event) => event.id === drawer);

  return (
    <div className="relative">
      {!!selectedEvent && (
        <Drawer
          event={selectedEvent}
          handleCloseDrawer={handleCloseDrawer}
          handleRemoveEvent={handleRemoveEvent}
          handleConfirmEvent={handleConfirmEvent}
        />
      )}
      <Map
        markers={detectedEvents}
        handleOpenDrawer={handleOpenDrawer}
      />
    </div>
  );
}
