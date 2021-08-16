import * as _ from "lodash";
import { ChartDataModel } from "../models/ChartDataModel";

import { HistoryModel } from "../models/HistoryModel";
import { getFormattedDate } from "./Util";

interface ChartData {
  labels: Array<string>;
  datasets: Array<ChartDataModel>;
}

export const lineColors = [
  "#42A5F5",
  "#FFA726",
  "green",
  "orangered",
  "purple",
  "grey",
];

export interface ChartItem {
  label: string;
  color: string;
}

export const selectedYAxisLabels: ChartItem[] = [
  { label: "Open", color: lineColors[0] },
  { label: "Close", color: lineColors[1] },
  { label: "High", color: lineColors[2] },
  { label: "Low", color: lineColors[3] },
  { label: "AdjClose", color: lineColors[4] },
  { label: "Volume", color: lineColors[5] },
];

export const basicOptions = {
  maintainAspectRatio: false,
  aspectRatio: 0.6,
  plugins: {
    legend: {
      labels: {
        color: "#495057",
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#495057",
      },
      grid: {
        color: "#ebedef",
      },
    },
    y: {
      ticks: {
        color: "#495057",
      },
      grid: {
        color: "#ebedef",
      },
    },
  },
};

export const getChartData = (
  data: Array<HistoryModel>,
  chartColumns: any[]
): ChartData => {
  const xAxisLabels = data.map((h: HistoryModel) => getFormattedDate(h.Date));
  const datasets: Array<ChartDataModel> = [];

  _.each(chartColumns, (item: ChartItem) => {
    datasets.push({
      label: item.label,
      data: data.map((h: any) => h[item.label]),
      fill: false,
      borderColor: item.color,
      tension: 0.4,
    });
  });

  const chartData: ChartData = { labels: xAxisLabels, datasets };
  return chartData;
};
