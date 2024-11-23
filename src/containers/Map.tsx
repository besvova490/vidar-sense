"use client";

import React, { ReactElement, useEffect, useState } from "react";
import { renderToString } from "react-dom/server";
import L, { DivIcon } from "leaflet";
import { useSearchParams } from "next/navigation";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

// components
import { MapControl } from "@/components/MapControl";

// assets
import { MyLocation } from "@/assets/icons/MyLocation";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// styles
import "leaflet/dist/leaflet.css";

const KIYV_COORDINATES: L.LatLngExpression = [50.4501, 30.5234];

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const myLocationIcon = new DivIcon({
  className: "custom-marker",
  html: renderToString(<MyLocation />),
  iconSize: [44, 44],
  iconAnchor: [22, 22],
});

const LAYERS_MAP: Record<string, ReactElement> = {
  openstreetmap: (
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
  ),
  satellite: (
    <TileLayer
      url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
      maxZoom={19}
    />
  ),
  topographic: (
    <TileLayer
      url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
      attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
    />
  ),
  street: (
    <TileLayer
      url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
      attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
    />
  ),
  terrain: (
    <TileLayer
      url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}"
      attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
    />
  ),
  opentopomap: (
    <TileLayer
      url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
      attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
    />
  ),
};

export const Map = () => {
  const searchParams = useSearchParams();
  const view = searchParams.get("view") || "openstreetmap";

  const [userLocation, setUserLocation] = useState<L.LatLngExpression | null>(
    null
  );
  const zoom = 5;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userCoords: L.LatLngExpression = [
          position.coords.latitude,
          position.coords.longitude,
        ];
        setUserLocation(userCoords);
      },
      (error) => {
        console.log("Geolocation error:", error);
      }
    );
  }, []);

  return (
    <div style={{ height: "calc(100dvh - 64px)", width: "100%" }}>
      <MapContainer
        center={KIYV_COORDINATES}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <MapControl />
        {LAYERS_MAP[view]}
        {userLocation && (
          <Marker
            position={userLocation}
            icon={myLocationIcon}
            zIndexOffset={1000}
          />
        )}
      </MapContainer>
    </div>
  );
};
