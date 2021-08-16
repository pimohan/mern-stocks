import { InstrumentModel } from "./InstrumentModel";

export interface InstrumentResponseModel {
  success: boolean;
  data: Array<InstrumentModel>;
}
