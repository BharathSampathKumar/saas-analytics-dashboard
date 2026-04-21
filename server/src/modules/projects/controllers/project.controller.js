const projectService = require("../services/project.service");

exports.createProject = async (req, res) => {
  try {
    const { name, workspaceId } = req.body;

    const project = await projectService.createProject({
      name,
      workspaceId,
    });

    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const { workspaceId } = req.query;

    const projects = await projectService.getProjectsByWorkspace(
      workspaceId
    );

    res.status(200).json(projects);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};