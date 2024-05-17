"use client";
import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"
import { altoIcon, baixoIcon } from "@/constant/icons-marker";

type Props = {};

const Mapa = (props: Props) => {
  const bounds = L.latLngBounds(L.latLng(-23.079732, -44.636230), L.latLng(-21.128633, -40.956055));
  return (
    <div>
      <MapContainer
        style={{ height: "75vh", width: "75wh", zIndex: "1" }}
        center={[-22.7561, -43.4607]}
        zoom={15}
        scrollWheelZoom={true}
        maxBounds={bounds}
        maxBoundsViscosity={1}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-22.75566551888913, -43.467350900173194]} icon={baixoIcon}>
          <Popup>
            Hello World
          </Popup>
        </Marker>
        <Marker position={[-22.751883986429455, -43.48101139068604]} icon={altoIcon}>
          <Popup>
            Hello World
          </Popup>
        </Marker>
        <Marker position={[-22.74521526324087, -43.48858594894409]} icon={altoIcon}>
          <Popup>
            Hello World
          </Popup>
        </Marker>
        <Marker position={[-22.753941924304122, -43.4686303138733]} icon={altoIcon}>
          <Popup>
            Hello World
          </Popup>
        </Marker>
        <Marker position={[-22.75590089405646, -43.477234840393066]} icon={altoIcon}>
          <Popup>
            Hello World
          </Popup>
        </Marker>
        <Marker position={[-22.761650678560407, -43.46512018792136]} icon={altoIcon}>
          <Popup>
            Hello World
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Mapa
