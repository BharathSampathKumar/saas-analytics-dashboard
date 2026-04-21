const mongoose = require("mongoose");

const workspaceSchema = new mongoose.Schema(
  {
    name: String,
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    members: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        role: {
          type: String,
          enum: ["owner", "member"],
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workspace", workspaceSchema);