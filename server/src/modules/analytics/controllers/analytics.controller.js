const analyticsService = require("../services/analytics.service");

exports.eventsOverTime = async (req, res) => {
  try {
    const { projectId, range } = req.query;

    const data = await analyticsService.getEventsOverTime({
      projectId,
      range,
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.topEvents = async (req, res) => {
  try {
    const { projectId, range } = req.query;

    const data = await analyticsService.getTopEvents({
      projectId,
      range,
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.topPages = async (req, res) => {
  try {
    const { projectId, range } = req.query;

    const data = await analyticsService.getTopPages({
      projectId,
      range,
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};