import { HistoryModel } from "./HistoryModel";

export interface HistoryResponseModel {
  success: boolean;
  count: number;
  data: {
    tableData: Array<HistoryModel>;
    chartData: Array<HistoryModel>;
  };
}
