const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
      index: true,
    },
    event: {
      type: String,
      required: true,
      index: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
      index: true,
    },
    metadata: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true },
);

// Compound index (important for analytics queries)
eventSchema.index({ projectId: 1, timestamp: -1 });

module.exports = mongoose.model('Event', eventSchema);
