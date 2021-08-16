const mongoose = require("mongoose");

const InstrumentSchema = new mongoose.Schema({
  Key: {
    type: String,
    require: true,
  },
  Description: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Instrument", InstrumentSchema);
