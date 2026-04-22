const Project = require('../models/Project');

module.exports = async (req, res, next) => {
  try {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey) {
      return res.status(401).json({ message: 'API key missing' });
    }

    const project = await Project.findOne({ apiKey });

    if (!project) {
      return res.status(401).json({ message: 'Invalid API key' });
    }

    req.project = project;
    next();
  } catch {
    res.status(500).json({ message: 'API key validation failed' });
  }
};
