import HeatMap from "@uiw/react-heat-map";
import Tooltip from "@uiw/react-tooltip";
import { useState } from "react";
const value = [];

function Heatmap() {
  const [selected, setSelected] = useState("");

  return (
    <div className="w-full">
      <HeatMap
        value={value}
        rectSize={14}
        // width={'100vw'}
        className="w-full"
        // style={{ color: "#ad001d" }}
        startDate={new Date("2022/04/12")}
        // endDate={new Date("2023/04/13")}
        panelColors={{
          0: "#fff7ed",
          2: "#fed7aa",
          4: "#fb923c",
          10: "#ea580c",
          20: "#c2410c",
          30: "#7c2d12",
        }}
        rectRender={(props, data) => {
          // if (!data.count) return <rect {...props} />;
          if (selected !== "") {
            props.opacity = data.date === selected ? 1 : 0.45;
          }
          return (
              <Tooltip
                key={props.key}
                placement="top"
                content={`${data.count || 0} contributions on ${data.date}`}
              >
                <rect
                  {...props}
                  onClick={() => {
                    setSelected(data.date === selected ? "" : data.date);
                  }}
                />
              </Tooltip>
          );
        }}
      />
    </div>
  );
}

export default Heatmap;
