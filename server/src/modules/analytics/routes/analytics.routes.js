const express = require("express");
const router = express.Router();
const controller = require("../controllers/analytics.controller");
const authMiddleware = require("../../../middlewares/auth.middleware");

router.get("/events-over-time", authMiddleware, controller.eventsOverTime);
router.get("/top-events", authMiddleware, controller.topEvents);
router.get("/top-pages", authMiddleware, controller.topPages);

module.exports = router;