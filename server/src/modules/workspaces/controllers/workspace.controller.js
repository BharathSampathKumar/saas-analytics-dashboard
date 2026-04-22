const workspaceService = require('../services/workspace.service');

exports.createWorkspace = async (req, res) => {
  try {
    const { name } = req.body;

    const workspace = await workspaceService.createWorkspace({
      name,
      userId: req.user.id,
    });

    res.status(201).json(workspace);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getWorkspaces = async (req, res) => {
  try {
    const workspaces = await workspaceService.getUserWorkspaces(req.user.id);

    res.status(200).json(workspaces);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
