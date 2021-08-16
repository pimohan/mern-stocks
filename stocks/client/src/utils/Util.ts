import moment from "moment";

export const getDate = () => {
  return new Date();
};

export const getFormattedDate = (date: any) => {
  return moment(date).format("MMM DD, YYYY");
};

export const getNumberByFixedDecimal = (
  value: number,
  noOfdecimals: number = 2
) => {
  return value ? +value.toFixed(noOfdecimals) : null;
};

export const getFormattedNumber = (value: number) => {
  return value.toLocaleString();
};
