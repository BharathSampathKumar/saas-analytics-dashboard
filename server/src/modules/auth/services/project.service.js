const Project = require('../../../models/Project');
const generateApiKey = require('../../../utils/generateApiKey');

exports.createProject = async ({ name, workspaceId }) => {
  const apiKey = generateApiKey();

  const project = await Project.create({
    name,
    workspaceId,
    apiKey,
  });

  return project;
};

exports.getProjectsByWorkspace = async (workspaceId) => {
  return Project.find({ workspaceId }).sort({ createdAt: -1 });
};
