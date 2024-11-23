"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/containers/Map"), { ssr: false });
import VideoScreenshot from "@/containers/VideoScreenshotAtTime";

export default function Home() {
  return (
    <div>
      <Map />
      <VideoScreenshot videoSrc="/videos/IMG_8029.MP4" />
    </div>
  );
}
