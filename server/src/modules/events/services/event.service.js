const Event = require("../../../models/Event");

exports.ingestEvent = async ({ projectId, event, metadata }) => {
  // Basic validation (can be expanded later)
  if (!event || typeof event !== "string") {
    throw new Error("Invalid event name");
  }

  if (metadata && JSON.stringify(metadata).length > 5000) {
    throw new Error("Metadata too large");
  }

  return Event.create({
    projectId,
    event,
    metadata,
    timestamp: new Date(),
  });
};