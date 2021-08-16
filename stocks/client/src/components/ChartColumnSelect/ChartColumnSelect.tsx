import { useContext } from "react";
import { MultiSelect, MultiSelectChangeParams } from "primereact/multiselect";

import { selectedYAxisLabels } from "../../utils/ChartUtil";

import { AppContext } from "../../contexts/AppContext";
import { SearchContext } from "../../contexts/SearchContext";
import { DEFAULT_PAGE, ROWS } from "../../constants/PagingConstants";

interface ChartColumnSelectProps {
  inline: boolean;
}

/**
 * To select chart columns to be displaed on chart
 * @param param0 inline
 * @returns ChartColumnSelect
 */
export const ChartColumnSelect = ({ inline }: ChartColumnSelectProps) => {
  const { chartColumns, setChartColumns } = useContext(AppContext);
  const { key, loadLazyData, startDate, endDate } = useContext(SearchContext);

  const onChange = (e: MultiSelectChangeParams) => {
    setChartColumns(e.value);
    if (inline) {
      loadLazyData(key, DEFAULT_PAGE, ROWS, startDate, endDate);
    }
  };

  return (
    <div className="p-fluid p-grid p-formgrid">
      <div className="p-field p-col-12 p-md-12">
        {!inline ? <label htmlFor="icon">Chart Columns</label> : null}
        <MultiSelect
          value={chartColumns}
          options={selectedYAxisLabels}
          onChange={onChange}
          optionLabel="label"
          placeholder="Select Columns"
          display="chip"
        />
      </div>
    </div>
  );
};
