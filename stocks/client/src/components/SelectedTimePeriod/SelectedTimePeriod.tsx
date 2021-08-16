import { Toast } from "primereact/toast";

import moment from "moment";
import { useEffect, useRef } from "react";

import "./SelectedTimePeriod.css";

interface SelectedTimePeriodProps {
  start: Date;
  end: Date;
}

/**
 * Shows the selected time period date range
 * @param param0 start, end
 * @returns SelectedTimePeriod Component
 */
export const SelectedTimePeriod = ({ start, end }: SelectedTimePeriodProps) => {
  const toast = useRef(null);
  const periodSelection =
    moment(start).format("MMM DD, YYYY") +
    " - " +
    moment(end).format("MMM DD, YYYY");

  useEffect(() => {
    (toast as any).current.show({
      severity: "success",
      summary: "Success",
      detail: `Feching ${periodSelection}`,
      life: 3000,
    });
  }, [periodSelection]);

  return (
    <div className="Period-Label">
      <Toast ref={toast} />
      Time Period: <span className="Period-Duration">{periodSelection}</span>
    </div>
  );
};
