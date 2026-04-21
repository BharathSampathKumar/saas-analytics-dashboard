const Workspace = require("../../../models/Workspace");

exports.createWorkspace = async ({ name, userId }) => {
  const workspace = await Workspace.create({
    name,
    ownerId: userId,
    members: [
      {
        userId,
        role: "owner",
      },
    ],
  });

  return workspace;
};

exports.getUserWorkspaces = async (userId) => {
  return Workspace.find({
    "members.userId": userId,
  }).sort({ createdAt: -1 });
};

exports.getWorkspaceById = async (workspaceId) => {
  return Workspace.findById(workspaceId);
};