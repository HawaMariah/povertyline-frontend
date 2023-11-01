
import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  useEffect(() => {
    const map = L.map("map", {
      center: [-1.286389, 36.817223],
      zoom: 17,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className="top-[100px] left-[1050px] w-[40vw] h-[50vh] border-2 border-blue-200 rounded-xl shadow-lg bg-gray-100
  "/>;
};

export default MapComponent;
