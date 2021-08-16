import moment from "moment";
import { SelectButton } from "primereact/selectbutton";
import { useContext } from "react";
import { getDate } from "../../utils/Util";

import * as _ from "lodash";
import { FILTER_OPTIONS } from "../../constants/FilterConstants";
import { SearchContext } from "../../contexts/SearchContext";
import { DEFAULT_PAGE, ROWS } from "../../constants/PagingConstants";
import { OverlayButtonGroupProps } from "../../interfaces/OverlayButtonGroupProps";
import { FilterContext } from "../../contexts/FilterContext";

import "./OverlayButtonGroup.css";

/**
 * Perform period selection of 1M, 3M, YTD, 1Y, 2Y, 3Y & 5M
 * @param param0 closeHandle of Overlay
 * @returns OverlayButtonGroup Component
 */
export const OverlayButtonGroup = ({
  closeHandle,
}: OverlayButtonGroupProps) => {
  const { key, loadLazyData, setStartDate, setEndDate } =
    useContext(SearchContext);
  const {
    periodSelectOption,
    setPeriodSelectOption,
    setCalenderStartDate,
    setCalenderEndDate,
  } = useContext(FilterContext);
  const options = FILTER_OPTIONS;

  const selectButtonClickHandler = (e: any) => {
    let startDate;
    let endDate;
    let calendarStartDate: Date | Date[] | undefined;
    let calendarEndDate: Date | Date[] | undefined;

    const period = e.value;
    const today = getDate();

    setPeriodSelectOption(e.value);

    if (_.endsWith(period, "M") || _.endsWith(period, "Y")) {
      const unit = _.endsWith(period, "M") ? "months" : "years";
      const periodIndex = +period[0];
      calendarStartDate = moment(today).subtract(periodIndex, unit).toDate();
      startDate = +moment(today).subtract(periodIndex, unit).format("x");
    } else {
      calendarStartDate = moment(new Date(today.getFullYear(), 0, 1)).toDate();
      startDate = +moment(new Date(today.getFullYear(), 0, 1)).format("x");
    }

    endDate = +moment(today).format("x");
    calendarEndDate = moment(today).toDate();

    setStartDate(startDate);
    setEndDate(endDate);

    setCalenderStartDate(calendarStartDate);
    setCalenderEndDate(calendarEndDate);

    loadLazyData(key, DEFAULT_PAGE, ROWS, startDate, endDate);

    closeHandle?.current?.hide();
  };

  return (
    <div className="Overlay-Button-Group">
      <SelectButton
        value={periodSelectOption}
        options={options}
        onChange={selectButtonClickHandler}
      />
    </div>
  );
};
