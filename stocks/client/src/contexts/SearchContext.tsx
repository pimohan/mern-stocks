import React, { createContext, useContext, useState } from "react";

import { DEFAULT_PAGE, ROWS } from "../constants/PagingConstants";

import { HistoryModel } from "../models/HistoryModel";
import { HistoryResponseModel } from "../models/HistoryResponseModel";

import { StockService } from "../services/StockService";
import { getChartData } from "../utils/ChartUtil";

import { AppContext } from "./AppContext";

interface SearchContextParams {
  key: string;
  startDate: number;
  setStartDate: (value: number) => void;
  endDate: number;
  setEndDate: (value: number) => void;
  data: HistoryModel[];
  chartData: any;
  totalRecords: number;
  loadLazyData: (
    key: string,
    page: number,
    rows: number,
    period1: number,
    period2: number
  ) => void;
}

export const SearchContext = createContext<SearchContextParams>({
  key: "",
  startDate: 0,
  setStartDate: (value: number) => {},
  endDate: 0,
  setEndDate: (value: number) => {},
  data: [],
  chartData: {},
  totalRecords: 0,
  loadLazyData: (
    key: string,
    page: number = DEFAULT_PAGE,
    rows = ROWS,
    period1 = 0,
    period2 = 0
  ) => {},
});

/**
 * Stores and manage Search Context and states amoung components
 * @param param0 children
 * @returns SearchContextProvider
 */
export const SearchContextProvider: React.FC = ({ children }) => {
  const { setLoading } = useContext(AppContext);
  const [key, setKey] = useState("");
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);
  const [data, setData] = useState<HistoryModel[]>([]);
  const [chartData, setChartData] = useState({});
  const [totalRecords, setTotalRecords] = useState(0);

  const { chartColumns } = useContext(AppContext);
  const stockService = new StockService();

  const loadLazyData = (
    key: string,
    page: number = DEFAULT_PAGE,
    rows = ROWS,
    period1 = 0,
    period2 = 0
  ) => {
    setLoading(true);
    setKey(key);
    setStartDate(period1);
    setEndDate(period2);
    stockService
      .getHistory(key, period1, period2, page, rows)
      .then((data: HistoryResponseModel) => {
        setTotalRecords(data.count);
        setData(data.data.tableData);
        setChartData(getChartData(data.data.chartData, chartColumns));
        setLoading(false);
      })
      .catch((error) => setLoading(false));
  };

  return (
    <SearchContext.Provider
      value={{
        key,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        data,
        chartData,
        totalRecords,
        loadLazyData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
