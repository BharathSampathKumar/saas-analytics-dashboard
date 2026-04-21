const Event = require("../../../models/Event");

const getDateRange = (range) => {
  const now = new Date();
  const days = parseInt(range.replace("d", ""), 10);

  const start = new Date();
  start.setDate(now.getDate() - days);

  return { start, end: now };
};

exports.getEventsOverTime = async ({ projectId, range = "7d" }) => {
  const { start, end } = getDateRange(range);

  return Event.aggregate([
    {
      $match: {
        projectId,
        timestamp: { $gte: start, $lte: end },
      },
    },
    {
      $group: {
        _id: {
          $dateToString: { format: "%Y-%m-%d", date: "$timestamp" },
        },
        count: { $sum: 1 },
      },
    },
    { $sort: { _id: 1 } },
  ]);
};

exports.getTopEvents = async ({ projectId, range = "7d" }) => {
  const { start, end } = getDateRange(range);

  return Event.aggregate([
    {
      $match: {
        projectId,
        timestamp: { $gte: start, $lte: end },
      },
    },
    {
      $group: {
        _id: "$event",
        count: { $sum: 1 },
      },
    },
    { $sort: { count: -1 } },
    { $limit: 10 },
  ]);
};

exports.getTopPages = async ({ projectId, range = "7d" }) => {
  const { start, end } = getDateRange(range);

  return Event.aggregate([
    {
      $match: {
        projectId,
        event: "page_view",
        timestamp: { $gte: start, $lte: end },
      },
    },
    {
      $group: {
        _id: "$metadata.url",
        count: { $sum: 1 },
      },
    },
    { $sort: { count: -1 } },
    { $limit: 10 },
  ]);
};