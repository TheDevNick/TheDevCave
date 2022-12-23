const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
const Logger = require('../services/logger_service');
const log = new Logger("DATABASE");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(db);
    log.info(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
