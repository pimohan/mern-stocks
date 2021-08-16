import React, { useContext } from "react";

import { Card } from "primereact/card";
import { Chart } from "primereact/chart";

import { OverlayButtonGroup } from "../OverlayButtonGroup/OverlayButtonGroup";
import { SearchContext } from "../../contexts/SearchContext";

import { basicOptions } from "../../utils/ChartUtil";
import { ChartColumnSelect } from "../ChartColumnSelect/ChartColumnSelect";

import "./ChartView.css";

/**
 * Plot the line chart for the columns selected ex. Open, Close, Hight etc.
 * @returns ChartView Component
 */
export const ChartView = () => {
  const { key, chartData, data } = useContext(SearchContext);

  return (
    <div className="Chart-View">
      {data && data.length > 0 && chartData && key ? (
        <React.Fragment>
          <h4>Chart</h4>
          <div className="Chart-Filters">
            <OverlayButtonGroup closeHandle={{}} />
            <ChartColumnSelect inline={true} />
          </div>
          <Card>
            <Chart
              type="line"
              data={chartData}
              options={basicOptions}
              height={"470px"}
            />
          </Card>
        </React.Fragment>
      ) : null}
    </div>
  );
};
