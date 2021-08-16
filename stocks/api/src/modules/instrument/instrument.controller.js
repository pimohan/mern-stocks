const path = require("path");
const log4js = require("log4js");
const logger = log4js.getLogger();
const _ = require("lodash");
const colors = require("colors");
const asyncHandler = require("../../middleware/async");
const Instrument = require("./instrument.model");

// @desc    Search Instruments
// @route   GET/api/v1/Instruments?text='a'
// @access  Public
exports.getInstruments = asyncHandler(async (req, res, next) => {
  const result = await Instrument.find({
    Key: { $regex: new RegExp(`^${req.query.text}`, "i") },
  });

  logger.info(`GET/api/v1/Instruments?text=${req.query.text}`);
  res.status(200).json({ success: true, data: result });
});

// @desc    Get Instrument History
// @route   GET/api/v1/instruments/:Key/history
// @access  Public
exports.getInstrumentHistory = asyncHandler(async (req, res, next) => {
  logger.info(
    `GET/api/v1/instruments/${req.params.Key}/history?page=${req.query.page}&limit=${req.query.limit}&period1=${req.query.period1}&period2=${req.query.period2}`
  );
  res.status(200).json(res.advancedResults);
});
