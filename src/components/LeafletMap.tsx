"use client";

import { Fragment } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export type MapPin = {
  id: string;
  name: string;
  position: [number, number]; // [lat, lng]
  color: string;
  tag: string;
};

export function LeafletMap({
  pins,
  active,
  onPick,
}: {
  pins: MapPin[];
  active: string;
  onPick: (id: string) => void;
}) {
  return (
    <MapContainer
      center={[10, 15]}
      zoom={2}
      minZoom={2}
      maxZoom={7}
      scrollWheelZoom={false}
      worldCopyJump
      style={{ width: "100%", height: 420, borderRadius: 4, background: "#1d1d1b" }}
      attributionControl
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
      />
      {pins.map((p) => {
        const isActive = p.id === active;
        return (
          <Fragment key={p.id}>
            {isActive && (
              <CircleMarker
                center={p.position}
                radius={18}
                pathOptions={{ color: p.color, weight: 0, fillColor: p.color, fillOpacity: 0.22 }}
                interactive={false}
              />
            )}
            <CircleMarker
              center={p.position}
              radius={isActive ? 10 : 6}
              pathOptions={{
                color: "#ffffff",
                weight: 2,
                fillColor: p.color,
                fillOpacity: 0.95,
              }}
              eventHandlers={{
                click: () => onPick(p.id),
                mouseover: (e) => e.target.setStyle({ weight: 3 }),
                mouseout: (e) => e.target.setStyle({ weight: 2 }),
              }}
            >
              <Tooltip direction="top" offset={[0, -6]} opacity={1} permanent={isActive}>
                <strong>{p.name}</strong>
                <br />
                <span style={{ fontSize: 11, opacity: 0.75 }}>{p.tag}</span>
              </Tooltip>
            </CircleMarker>
          </Fragment>
        );
      })}
    </MapContainer>
  );
}

export default LeafletMap;
