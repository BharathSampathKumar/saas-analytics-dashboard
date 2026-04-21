const request = require("supertest");
const app = require("../../src/app");
const { registerAndLogin } = require("../helpers/authHelper");

describe("Project API", () => {
  let token;
  let workspaceId;

  beforeEach(async () => {
    token = await registerAndLogin();

    const wsRes = await request(app)
      .post("/api/workspaces")
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Test Workspace" });

    workspaceId = wsRes.body._id;
  });

  it("should create a project", async () => {
    const res = await request(app)
      .post("/api/projects")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Project 1",
        workspaceId,
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Project 1");
    expect(res.body.apiKey).toBeDefined();
  });

  it("should fetch projects for workspace", async () => {
    await request(app)
      .post("/api/projects")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Project 1",
        workspaceId,
      });
    const res = await request(app)
      .get(`/api/projects?workspaceId=${workspaceId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });

  it("should reject unauthorized workspace access", async () => {
    const otherToken = await registerAndLogin();

    const res = await request(app)
      .post("/api/projects")
      .set("Authorization", `Bearer ${otherToken}`)
      .send({
        name: "Hacked Project",
        workspaceId,
      });

    expect(res.statusCode).toBe(400);
  });
});