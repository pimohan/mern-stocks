import { HistoryResponseModel } from "../models/HistoryResponseModel";
import { InstrumentResponseModel } from "../models/InstrumentResponseModel";
import { getBaseUrl } from "../utils/ConfigUtil";

/**
 * Stock Service API to perform get instruments, histories of selected instrument key
 */
export class StockService {
  baseUrl = getBaseUrl();

  getInstruments(text: string) {
    return fetch(`${this.baseUrl}/api/v1/instruments?text=${text}`)
      .then((res) => {
        return res.json();
      })
      .then((d: InstrumentResponseModel) => d.data);
  }

  getHistory(
    key: string,
    period1: number,
    period2: number,
    page: number,
    limit: number
  ) {
    return fetch(
      `${this.baseUrl}/api/v1/instruments/${key}/history?page=${page}&limit=${limit}&period1=${period1}&period2=${period2}`
    )
      .then((res) => {
        return res.json();
      })
      .then((d: HistoryResponseModel) => d);
  }
}
