import { createContext, useState } from "react";

import { selectedYAxisLabels } from "../utils/ChartUtil";

/**
 * Stores Application level states shared among components
 */
export const AppContext = createContext({
  loading: false,
  setLoading: (value: boolean) => {},
  tableView: true,
  chartColumns: selectedYAxisLabels.slice(0, selectedYAxisLabels.length - 2),
  setChartColumns: (value: any) => {},
  toggleView: () => {},
});

export const AppContextProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [tableView, setTableView] = useState(true);
  const [chartColumns, setChartColumns] = useState(
    selectedYAxisLabels.slice(0, selectedYAxisLabels.length - 2)
  );

  const toggleView = () => {
    setTableView(!tableView);
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        tableView,
        chartColumns,
        setChartColumns,
        toggleView,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
