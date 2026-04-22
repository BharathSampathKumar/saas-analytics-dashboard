import api from "./client";

export const getProjects = async (workspaceId: string) => {
  const res = await api.get(`/projects?workspaceId=${workspaceId}`);
  return res.data;
};