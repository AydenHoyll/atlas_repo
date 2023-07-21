import UITable from "../../components/table";
import { COLUMNS, DATA } from "./data";
import UIMap from "../../components/map";
import { useRef } from "react";
import { CompassOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";

export const MapPage = () => {
  const refMap = useRef();
  const popupRef = useRef([]);

  const flyTo = (coords, name) => {
    const { current = {} } = refMap;

    const isAnimationEnabled = refMap.current.getZoom() > 8;
    current.flyTo(coords, 10, {
      duration: 2,
      animate: isAnimationEnabled,
    });

    setTimeout(
      () => {
        if (popupRef?.current?.[name]) {
          popupRef?.current?.[name].openPopup();
        }
      },
      isAnimationEnabled ? 2000 : 1000
    );
  };

  const tableData = DATA.map((object, ix) => ({
    ...object,
    Name: (
      <div
        className="flex justify-between items-center"
        data-value={object.Name}
      >
        <Link to={`/language/${object.Name}`} state={{ test: 123, object }}>
          {object.Name}
        </Link>
        <Tooltip title="Locate language on the map">
          <CompassOutlined
            onClick={() =>
              flyTo([object.Latitude, object.Longitude], object.Name)
            }
            style={{ fontSize: "22px" }}
          />
        </Tooltip>
      </div>
    ),
    key: String(ix + 1),
  }));

  return (
    <>
      <UIMap refMap={refMap} popupRef={popupRef} />
      <UITable
        columns={COLUMNS}
        data={tableData}
        title="Languages"
        searchByKey="Name"
      />
    </>
  );
};
