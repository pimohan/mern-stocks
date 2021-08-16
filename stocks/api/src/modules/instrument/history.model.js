const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
  Key: {
    type: String,
    require: true,
  },
  Date: {
    type: Date,
  },
  Open: {
    type: Number,
  },
  High: {
    type: Number,
  },
  Low: {
    type: Number,
  },
  Close: {
    type: Number,
  },
  AdjClose: {
    type: Number,
  },
  Volume: {
    type: Number,
  },
});

module.exports = mongoose.model("History", HistorySchema);
