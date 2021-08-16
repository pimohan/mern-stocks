const log4js = require("log4js");

const loadLogger = () => {
  log4js.configure({
    appenders: {
      fileAppender: {
        type: "file",
        filename: "./logs/api.log",
      },
    },
    categories: {
      default: {
        appenders: ["fileAppender"],
        level: "info",
      },
    },
  });

  const logger = log4js.getLogger();

  logger.info("Logger lodded...");
};

module.exports = loadLogger;
