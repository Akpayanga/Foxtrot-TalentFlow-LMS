const IORedis = require("ioredis");
const dotenv = require("dotenv");
dotenv.config();

const connection = new IORedis(process.env.REDIS_URL, {
  // BullMQ requirement
  maxRetriesPerRequest: null,
});

module.exports = connection;
