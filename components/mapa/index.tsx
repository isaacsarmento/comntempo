"use client";
import React, { useRef, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LeafletMouseEvent } from "leaflet";
import { altoIcon, baixoIcon } from "@/constant/icons-marker";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import SelectLevelMarker from "../global/select-marker-level";
import { Textarea } from "../ui/textarea";

type Props = {};

const Mapa = (props: Props) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const drawerRef = useRef<HTMLButtonElement>(null);
  const [coordinates, setCoordinates] = useState<{
    lat: number | null;
    lng: number | null;
  }>({ lat: null, lng: null });
  const bounds = L.latLngBounds(
    L.latLng(-23.079732, -44.63623),
    L.latLng(-21.128633, -40.956055)
  );

  const handleMapClick = (e: LeafletMouseEvent) => {
    const { lat, lng } = e.latlng;
    setCoordinates({ lat, lng });
    setDrawerVisible(true);
    if (drawerRef.current) {
      drawerRef.current.click();
    }
  };

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
        <MapEventsHandler handleMapClick={handleMapClick} />
        <Marker
          position={[-22.75566551888913, -43.467350900173194]}
          icon={baixoIcon}
        >
          <Popup>Hello World</Popup>
        </Marker>
        <Marker
          position={[-22.751883986429455, -43.48101139068604]}
          icon={altoIcon}
        >
          <Popup>Hello World</Popup>
        </Marker>
        <Marker
          position={[-22.74521526324087, -43.48858594894409]}
          icon={altoIcon}
        >
          <Popup>Hello World</Popup>
        </Marker>
        <Marker
          position={[-22.753941924304122, -43.4686303138733]}
          icon={altoIcon}
        >
          <Popup>Hello World</Popup>
        </Marker>
        <Marker
          position={[-22.75590089405646, -43.477234840393066]}
          icon={altoIcon}
        >
          <Popup>Hello World</Popup>
        </Marker>
        <Marker
          position={[-22.761650678560407, -43.46512018792136]}
          icon={altoIcon}
        >
          <Popup>Hello World</Popup>
        </Marker>
      </MapContainer>

      {/* drawer para criar marcador */}
      <Drawer>
        <DrawerTrigger ref={drawerRef} style={{ display: "none" }} />
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Crie seu marcador!</DrawerTitle>
              <DrawerDescription className="space-y-4">
                <Label>Selecione o nível do marcador:</Label>
                <SelectLevelMarker />
                <Label htmlFor="message">Escreva um comentário para este marcador:</Label>
                <Textarea placeholder="Digite sua mensagem aqui..."></Textarea>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Criar marcador</Button>
              <DrawerClose>
                <Button variant="outline">Cancelar</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

const MapEventsHandler = ({
  handleMapClick,
}: {
  handleMapClick: (e: LeafletMouseEvent) => void;
}) => {
  useMapEvents({
    click: handleMapClick,
  });
  return null;
};

export default Mapa;
