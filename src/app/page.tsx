"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/containers/Map"), { ssr: false });
const Drawer = dynamic(() => import("@/containers/Drawer"), { ssr: false });

export default function Home() {
  return (
    <div className="relative">
      <Drawer />
      <Map />
    </div>
  );
}
