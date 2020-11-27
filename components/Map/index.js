import { useEffect, useState } from "react";
let MapContainer, Marker, Popup, TileLayer, divIcon, useMap;

export default function Map({ handleClick, markers, center, zoom }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    MapContainer = require("react-leaflet").MapContainer;
    Marker = require("react-leaflet").Marker;
    Popup = require("react-leaflet").Popup;
    TileLayer = require("react-leaflet").TileLayer;
    divIcon = require("leaflet").divIcon;
    useMap = require("react-leaflet").useMap;
  }, []);

  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return show ? (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
      <ChangeView center={center} zoom={zoom} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers?.map((location, index) => (
        <Marker
          position={location.location}
          icon={divIcon({
            className: "",
            iconSize: [32, 32],
            html: `<svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 24 24" width="32"><path d="M0 0h24v24H0z" fill="none"/><path fill=${location.color} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,
          })}
          eventHandlers={{
            click: () => {
              handleClick(index);
            },
          }}
        >
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  ) : (
    <p>loading</p>
  );
}
