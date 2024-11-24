"use client";

import React, { ReactElement, useEffect, useState } from "react";
import { renderToString } from "react-dom/server";
import L, { DivIcon } from "leaflet";
import { useSearchParams } from "next/navigation";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

// components
import { MapControl } from "@/components/MapControl";
import { EventMarker } from "@/components/EventMarker";

// constants
import { IDetectedEvent } from "@/constants/event";

// assets
import { MyLocation } from "@/assets/icons/MyLocation";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// styles
import "leaflet/dist/leaflet.css";

interface IMapProps {
  markers: IDetectedEvent[];
  handleOpenDrawer: (id: string) => void;
}

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

const KIYV_COORDINATES: L.LatLngExpression = [50.4501, 30.5234];

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
  dark: (
    <TileLayer
      url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
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
  opentopomap: (
    <TileLayer
      url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
      attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
    />
  ),
};

const Map = ({
  markers,
  handleOpenDrawer,
}: IMapProps) => {
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

        {markers?.map((event, index) => {
          const eventIcon = new DivIcon({
            className: "custom-marker",
            html: renderToString(<EventMarker {...event} />),
            iconSize: [130, 41],
            iconAnchor: [65, 20],
          });

          return (
            event.coordinates && (
              <Marker
                eventHandlers={{
                  click: () => {
                    handleOpenDrawer(event.id);
                  },
                }}
                key={index}
                icon={eventIcon}
                position={event.coordinates as unknown as L.LatLngExpression}
              />
            )
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
