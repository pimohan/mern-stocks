const express = require("express");

const {
  getInstrumentHistory,
  getInstruments,
} = require("./instrument.controller");
const History = require("./history.model");
const Instrument = require("./instrument.model");
const advancedResults = require("../../middleware/advancedResults");

const router = express.Router();

router.route("/").get(getInstruments);

router
  .route("/:Key/history")
  .get(advancedResults(History, null), getInstrumentHistory);

module.exports = router;
