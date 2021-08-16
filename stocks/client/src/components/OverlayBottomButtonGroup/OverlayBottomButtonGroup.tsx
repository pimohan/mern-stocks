import { useContext } from "react";

import { Button } from "primereact/button";
import moment from "moment";

import { SearchContext } from "../../contexts/SearchContext";
import { FilterContext } from "../../contexts/FilterContext";

import { DEFAULT_PAGE, ROWS } from "../../constants/PagingConstants";
import { OverlayButtonGroupProps } from "../../interfaces/OverlayButtonGroupProps";

import "./OverlayBottomButtonGroup.css";

/**
 * Composed of Done & Cancel button to perform filter operation
 * @param param0 closeHandle of Filter Overlay
 * @returns OverlyBottomButtonGroup Component
 */
export const OverlayBottomButtonGroup = ({
  closeHandle,
}: OverlayButtonGroupProps) => {
  const { key, loadLazyData } = useContext(SearchContext);
  const { calenderStartDate, calenderEndDate } = useContext(FilterContext);
  const doneButtonClickHandler = (e: any) => {
    const startDate = +moment(calenderStartDate?.toString()).format("x");
    const endDate = +moment(calenderEndDate?.toString()).format("x");

    loadLazyData(key, DEFAULT_PAGE, ROWS, startDate, endDate);
    closeHandle.current.hide();
  };

  return (
    <div className="Overlay-Bottom-Button-Group">
      <Button label="Done" onClick={doneButtonClickHandler} />
      <Button
        label="Cancel"
        className="p-button-secondary"
        onClick={(e) => closeHandle.current.hide()}
      />
    </div>
  );
};
