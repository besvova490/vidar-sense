"use client";

import React from "react";
// import React, { useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// components
// import { ChangeMapLayerButton } from "@/components/ChangeMapLayerButton";
import { MapControl } from "@/components/MapControl";
import { MapLayerController } from "@/components/MapLayerController";

// assets
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// styles
import "leaflet/dist/leaflet.css";

interface IMockData {
  id: number;
  position: L.LatLngExpression;
  popup: string;
}

const MOCK_DATA: IMockData[] = [
  { id: 1, position: [47.56, 7.57], popup: "Description" },
];

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export const Map = () => {
  // const [mapType, setMapType] = useState<"default" | "satellite">("default");
  const position: L.LatLngExpression = [47.56, 7.57];
  const zoom = 5;

  return (
    <div>
      {/* <ChangeMapLayerButton mapType={mapType} setMapType={setMapType} /> */}

      <div style={{ height: "calc(100dvh - 64px)", width: "100%" }}>
        <MapContainer
          center={position}
          zoom={zoom}
          style={{ height: "100%", width: "100%" }}
          zoomControl={false}
        >
          <MapControl />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapLayerController mapType="satellite" />
          {MOCK_DATA.map((item) => (
            <Marker key={item.id} position={item.position}>
              <Popup>{item.popup}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};
