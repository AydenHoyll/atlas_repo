import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Collapse, Typography } from "antd";
import { DATA } from "../map/data";
import { CircleMarker, MapContainer, TileLayer, useMap } from "react-leaflet";
import { CLASIFICATION_COLORS } from "../../components/map/utils";

const getObject = (state, name) => {
  if (state?.object) {
    return state.object;
  }

  return DATA.find((item) => item.Name === name) || {};
};

const LanguagePage = () => {
  const params = useParams();
  const { state } = useLocation();

  const { name = "" } = params;

  const object = getObject(state, name);

  const { Classification = "", Latitude = "", Longitude = "" } = object;

  const location = [Latitude, Longitude];

  return (
    <>
      <Typography.Title level={4} className="flex">
        Language: {name}
        <br />
        Family: {Classification}
        <br />
      </Typography.Title>
      <MapContainer
        center={location}
        zoom={8}
        bounds={location}
        zoomControl={false}
        style={{ width: "15%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution=""
        ></TileLayer>
        <CircleMarker
          center={location}
          key={name}
          pathOptions={{ color: CLASIFICATION_COLORS[Classification] }}
          radius="5"
        ></CircleMarker>
      </MapContainer>
    </>
  );
};

export default LanguagePage;
