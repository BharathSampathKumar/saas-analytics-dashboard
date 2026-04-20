const request = require("supertest");
const app = require("../../src/app");

describe("Auth API", () => {
  describe("POST /api/auth/register", () => {
    it("should register a new user", async () => {
      const res = await request(app)
        .post("/api/auth/register")
        .send({
          name: "Test User",
          email: "test@example.com",
          password: "123456",
        });
      console.log(res.body);
      expect(res.statusCode).toBe(201);
      expect(res.body.token).toBeDefined();
      expect(res.body.user.email).toBe("test@example.com");
    });

    it("should not allow duplicate emails", async () => {
      await request(app).post("/api/auth/register").send({
        name: "Test",
        email: "dup@example.com",
        password: "123456",
      });

      const res = await request(app)
        .post("/api/auth/register")
        .send({
          name: "Test",
          email: "dup@example.com",
          password: "123456",
        });

      expect(res.statusCode).toBe(400);
    });
  });
});

describe("POST /api/auth/login", () => {
  it("should login existing user", async () => {
    await request(app).post("/api/auth/register").send({
      name: "Test",
      email: "login@example.com",
      password: "123456",
    });

    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "login@example.com",
        password: "123456",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  it("should fail with wrong password", async () => {
    await request(app).post("/api/auth/register").send({
      name: "Test",
      email: "wrong@example.com",
      password: "123456",
    });

    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "wrong@example.com",
        password: "wrongpass",
      });

    expect(res.statusCode).toBe(401);
  });
});