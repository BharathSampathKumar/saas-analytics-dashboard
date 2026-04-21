const express = require("express");
const router = express.Router();
const controller = require("../controllers/workspace.controller");
const authMiddleware = require("../../../middlewares/auth.middleware");

router.post("/", authMiddleware, controller.createWorkspace);
router.get("/", authMiddleware, controller.getWorkspaces);

module.exports = router;