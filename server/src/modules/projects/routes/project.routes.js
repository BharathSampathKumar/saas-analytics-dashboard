const express = require('express');
const router = express.Router();
const controller = require('../controllers/project.controller');
const authMiddleware = require('../../../middlewares/auth.middleware');

router.post('/', authMiddleware, controller.createProject);
router.get('/', authMiddleware, controller.getProjects);

module.exports = router;
