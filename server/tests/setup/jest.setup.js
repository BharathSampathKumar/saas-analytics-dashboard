process.env.JWT_SECRET = 'testsecret';

const { connectDB, clearDB, closeDB } = require('./testSetup');

beforeAll(async () => {
  await connectDB();
});

afterEach(async () => {
  await clearDB();
});

afterAll(async () => {
  await closeDB();
});
