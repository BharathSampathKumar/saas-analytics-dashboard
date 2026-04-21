const request = require("supertest");
const app = require("../../src/app");

exports.registerAndLogin = async () => {
  const uniqueEmail = `test_${Date.now()}@example.com`;

  const user = {
    email: uniqueEmail,
    password: "password123",
    name: "Test User",
  };

  await request(app).post("/api/auth/register").send(user);

  const res = await request(app)
    .post("/api/auth/login")
    .send({
      email: user.email,
      password: user.password,
    });

  return res.body.token;
};