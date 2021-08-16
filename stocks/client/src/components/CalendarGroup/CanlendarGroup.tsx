import { useContext } from "react";

import { Calendar, CalendarChangeParams } from "primereact/calendar";

import { FilterContext } from "../../contexts/FilterContext";

/**
 * To show the date pickers for star & end date selection
 * @returns CalendarGroup
 */
export const CalendarGroup = () => {
  const {
    calenderStartDate,
    setCalenderStartDate,
    calenderEndDate,
    setCalenderEndDate,
  } = useContext(FilterContext);

  return (
    <div className="Calendar-Group">
      <div className="p-fluid p-grid p-formgrid">
        <div className="p-field p-col-12 p-md-7">
          <label htmlFor="icon">Start</label>
          <Calendar
            id="icon"
            value={calenderStartDate}
            onChange={(e: CalendarChangeParams) =>
              setCalenderStartDate(e.value)
            }
            showIcon
          />
        </div>
        <div className="p-field p-col-12 p-md-7">
          <label htmlFor="icon">End</label>
          <Calendar
            id="icon"
            value={calenderEndDate}
            onChange={(e: CalendarChangeParams) => setCalenderEndDate(e.value)}
            showIcon
          />
        </div>
      </div>
    </div>
  );
};
