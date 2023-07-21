import React, { useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  Tooltip,
  LayerGroup,
  CircleMarker,
  Popup,
} from "react-leaflet";
import { DATA } from "../../pages/map/data";
import { CLASIFICATION_COLORS } from "./utils";

const UIMap = ({
  refMap,
  popupRef,
  dataMarkers = DATA,
  mapCenter = [5.54, 8.91],
  bounds = [5.54, 8.91],
  zoom = 4,
}) => {
  const markers = useMemo(
    () =>
      dataMarkers.map((object, index) => ({
        position: [object.Latitude, object.Longitude],
        name: object.Name,
        color: CLASIFICATION_COLORS[object.Classification] || "#000000",
        classification: object.Classification,
      })),
    [dataMarkers, CLASIFICATION_COLORS]
  );

  return (
    <MapContainer
      ref={refMap}
      center={mapCenter}
      zoom={zoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LayerGroup>
        {markers.map((marker, index) => {
          return (
            <CircleMarker
              key={String(index)}
              center={marker.position}
              radius={5}
              pathOptions={{ color: marker.color }}
              ref={(m) => {
                if (popupRef && !popupRef.current[marker.name]) {
                  popupRef.current[marker.name] = m;
                }
              }}
            >
              <Popup>
                Language: {marker.name} <br />
                Family: {marker.classification}
              </Popup>
              <Tooltip>{marker.name}</Tooltip>
            </CircleMarker>
          );
        })}
      </LayerGroup>
    </MapContainer>
  );
};

export default React.memo(UIMap);
