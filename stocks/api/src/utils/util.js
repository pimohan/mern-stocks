const _ = require("lodash");
const moment = require("moment");
const log4js = require("log4js");
const logger = log4js.getLogger();

const getDate = (input) => {
  return input.substring(0, 6);
};

const getYear = (input) => {
  return _.takeRight(input, 4).join("");
};

const isAllEmpty = (array) => {
  const findEmpty = _.find(array, (ele) => ele.trim() !== "");

  return findEmpty ? false : true;
};

const getMongoDate = (value, separator) => {
  const dateParts = value.split(separator);
  dateParts[1] = moment().month(dateParts[1]).format("MM");
  const date = new Date(dateParts.reverse().join("-"));
  return date;
};

const print = (arr) => {
  _.each(arr, (item) => {
    const keys = _.keys(item);
    const columns = [];
    _.each(keys, (key) => {
      const value =
        key === "date" ? moment(item[key]).format("DD-MM-YYYY") : item[key];
      columns.push(value);
    });
    console.log(columns.join("\t").inverse);
    logger.info(columns.join("\t"));
  });
};

module.exports = {
  getDate,
  getYear,
  isAllEmpty,
  getMongoDate,
  print,
};
