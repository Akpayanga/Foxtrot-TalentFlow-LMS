const IORedis = require("ioredis");

const connection = new IORedis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASSWORD || undefined,
  db: process.env.REDIS_DB || 0,

  // BullMQ requirement
  maxRetriesPerRequest: null,
});

connection.on("connect", () => {
  console.log("Connected to Redis successfully");
});

connection.on("error", (err) => {
  console.error("Redis connection error:", err);
});

module.exports = connection;