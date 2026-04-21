const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST);
};

const clearDB = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    await collections[key].deleteMany();
  }
};

const closeDB = async () => {
  await mongoose.connection.close();
};

module.exports = { connectDB, clearDB, closeDB };