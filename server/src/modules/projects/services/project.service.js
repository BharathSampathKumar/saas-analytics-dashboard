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