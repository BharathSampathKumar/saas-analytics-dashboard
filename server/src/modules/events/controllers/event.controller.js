const eventService = require("../services/event.service");

exports.ingest = async (req, res) => {
  try {
    const { event, metadata } = req.body;

    const result = await eventService.ingestEvent({
      projectId: req.project._id,
      event,
      metadata,
    });

    res.status(201).json({ success: true, id: result._id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};