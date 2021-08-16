import React, { useContext, useRef } from "react";

import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";

import { CalendarGroup } from "../CalendarGroup/CanlendarGroup";
import { OverlayBottomButtonGroup } from "../OverlayBottomButtonGroup/OverlayBottomButtonGroup";
import { OverlayButtonGroup } from "../OverlayButtonGroup/OverlayButtonGroup";
import { ChartColumnSelect } from "../ChartColumnSelect/ChartColumnSelect";
import { SelectedTimePeriod } from "../SelectedTimePeriod/SelectedTimePeriod";

import { FilterContext } from "../../contexts/FilterContext";

/**
 * Composed of Button, Overlay, Selected Period on Filter
 * @returns Filter Component
 */
export const Filter = () => {
  const op = useRef(null);
  const { calenderStartDate, calenderEndDate } = useContext(FilterContext);

  return (
    <React.Fragment>
      <Button
        type="button"
        icon="pi pi-calendar"
        label="Select Period"
        onClick={(e) => (op as any).current.toggle(e)}
        aria-haspopup
        aria-controls="overlay_panel"
        className="select-product-button"
      />
      <OverlayPanel
        ref={op}
        showCloseIcon
        id="overlay_panel"
        style={{ width: "475px" }}
        className="overlaypanel-demo"
      >
        <OverlayButtonGroup closeHandle={op} />
        <ChartColumnSelect inline={false} />
        <CalendarGroup />
        <OverlayBottomButtonGroup closeHandle={op} />
      </OverlayPanel>
      <SelectedTimePeriod start={calenderStartDate} end={calenderEndDate} />
    </React.Fragment>
  );
};
