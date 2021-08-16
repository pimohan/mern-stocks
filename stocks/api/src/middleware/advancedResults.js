const moment = require("moment");

const advancedResults = (model, populate) => async (req, res, next) => {
  let query;

  const period1 = moment(+req.query.period1);
  const period2 = moment(+req.query.period2);

  if (req.params.Key && req.query.period1 && req.query.period2) {
    query = model.find({
      Key: req.params.Key,
      Date: { $gte: period1, $lte: period2 },
    });
  } else {
    query = model.find({ Key: req.params.Key });
  }

  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await model.countDocuments();

  const cresults = await query;

  query = query.skip(startIndex).limit(limit);

  const results = await query;

  console.log("count=>" + results.length);
  console.log("count=>" + cresults.length);

  const pagination = {};
  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    pagination.pre = {
      page: page - 1,
      limit,
    };
  }

  res.advancedResults = {
    success: true,
    count: cresults.length,
    pagination,
    data: { tableData: results, chartData: cresults },
  };

  next();
};

module.exports = advancedResults;
