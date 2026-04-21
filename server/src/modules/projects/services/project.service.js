const generateApiKey = require("../../../utils/generateApiKey");
const Project = require("../../../models/Project");
const Workspace = require("../../../models/Workspace");

exports.createProject = async ({ name, workspaceId, userId }) => {
  const workspace = await Workspace.findOne({
    _id: workspaceId,
    "members.userId": userId,
  });

  if (!workspace) {
    throw new Error("Unauthorized workspace access");
  }

  const apiKey = generateApiKey();

  return Project.create({
    name,
    workspaceId,
    apiKey,
  });
};

exports.getProjectsByWorkspace = async (workspaceId) => {
  return Project.find({ workspaceId }).sort({ createdAt: -1 });
};