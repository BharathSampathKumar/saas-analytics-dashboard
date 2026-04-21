module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/server/tests"],
  testMatch: ["**/tests/**/*.test.js"],
  setupFilesAfterEnv: ["<rootDir>/server/tests/setup.js"],
};