const path = require("path");
const express = require("express");
const log4js = require("log4js");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("../config/db");
const loadLogger = require("../config/logger");
const colors = require("colors");
const errorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const logger = log4js.getLogger();
const cors = require("cors");

// Load env vars
dotenv.config({
  path: "./config/config.env",
});

// Logger
loadLogger();

// Connect to database
connectDB();

// Route files
const instruments = require("./modules/instrument/instrument.route");

const app = express();

app.use(cors());

// Body Parser
app.use(express.json());

app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

// Dev Logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount routers
app.use("/api/v1/instruments", instruments);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
  logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhanled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  logger.error(`Error: ${err.message}`);

  // Close server & exit process
  server.close(() => process.exit(1));
});
