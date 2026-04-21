const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoutes = require("./modules/auth/routes/auth.routes");
const projectRoutes = require("./modules/projects/routes/project.routes");
const workspaceRoutes = require("./modules/workspaces/routes/workspace.routes");
const eventRoutes = require("./modules/events/routes/event.routes");
const analyticsRoutes = require("./modules/analytics/routes/analytics.routes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/workspaces", workspaceRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/analytics", analyticsRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

module.exports = app;