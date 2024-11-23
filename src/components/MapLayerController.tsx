"use client";

import React from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";

const API_KEY = "be72f76237db";

interface IMapLayerControllerProps {
  mapType: "default" | "satellite"
}

export const MapLayerController = ({ mapType }: IMapLayerControllerProps) => {
  const map = useMap();
  const satelliteLayerRef = React.useRef<L.TileLayer | null>(null);

  React.useEffect(() => {
    const fetchSatelliteData = async () => {
      if (satelliteLayerRef.current) {
        map.removeLayer(satelliteLayerRef.current);
        satelliteLayerRef.current = null;
      }

      if (mapType === "satellite") {
        const mapId = "satellite_global";
        const timeApiUrl = `https://maps-api.meteoblue.com/v1/tiles/${mapId}/meteomapsTimeLast24h.json?lang=de&apikey=${API_KEY}`;

        const timeInfo = await fetch(timeApiUrl).then((response) =>
          response.json()
        );
        const dateValue = timeInfo.timesteps.at(-1).value;

        const satelliteTileUrl = `https://maps-api.meteoblue.com/v1/tiles/${mapId}/${dateValue}/{z}/{x}/{y}.jpg?apikey=${API_KEY}${
          timeInfo.lastUpdate ? `&lastUpdate=${timeInfo.lastUpdate}` : ""
        }`;

        satelliteLayerRef.current = L.tileLayer(satelliteTileUrl, {
          opacity: 0.7,
        }).addTo(map);
      }
    };

    fetchSatelliteData();

    return () => {
      if (satelliteLayerRef.current) {
        map.removeLayer(satelliteLayerRef.current);
      }
    };
  }, [mapType, map]);

  return null;
};
