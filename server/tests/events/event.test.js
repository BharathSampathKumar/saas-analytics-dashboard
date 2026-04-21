const request = require("supertest");
const app = require("../../src/app");
const Project = require("../../src/models/Project");

describe("Event Ingestion API", () => {
  let apiKey;

  beforeEach(async () => {
    const project = await Project.create({
      name: "Test Project",
      workspaceId: "64b000000000000000000000",
      apiKey: "proj_testkey123",
    });

    apiKey = project.apiKey;
  });

  it("should ingest a valid event", async () => {
    const res = await request(app)
      .post("/api/events")
      .set("x-api-key", apiKey)
      .send({
        event: "page_view",
        metadata: { url: "/home" },
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
  });

  it("should fail without API key", async () => {
    const res = await request(app)
      .post("/api/events")
      .send({
        event: "page_view",
      });

    expect(res.statusCode).toBe(401);
  });

  it("should fail with invalid API key", async () => {
    const res = await request(app)
      .post("/api/events")
      .set("x-api-key", "invalid_key")
      .send({
        event: "page_view",
      });

    expect(res.statusCode).toBe(401);
  });

  it("should fail with invalid event name", async () => {
    const res = await request(app)
      .post("/api/events")
      .set("x-api-key", apiKey)
      .send({
        event: "",
      });

    expect(res.statusCode).toBe(400);
  });

  it("should fail if metadata too large", async () => {
    const largeMetadata = {
      data: "x".repeat(6000),
    };

    const res = await request(app)
      .post("/api/events")
      .set("x-api-key", apiKey)
      .send({
        event: "click",
        metadata: largeMetadata,
      });

    expect(res.statusCode).toBe(400);
  });
});