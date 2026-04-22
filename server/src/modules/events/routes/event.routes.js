const express = require('express');
const router = express.Router();
const controller = require('../controllers/event.controller');
const apiKeyMiddleware = require('../../../middlewares/apiKey.middleware');

// No JWT — API key based
router.post('/', apiKeyMiddleware, controller.ingest);

module.exports = router;
