require("dotenv").config();
const { Worker } = require("bullmq");
const connection = require("../utilities/redis.util");
const {
  sendVerificationEmail,
  sendWelcomeEmail,
} = require("../utilities/email.util");

console.log("🚀 Email worker started...");
const handlers = {
  sendVerificationEmail: async (data) => {
    console.log("Processing job:", data);
    if (!data.email || !data.code) {
      throw new Error("Missing email or code");
    }

    await sendVerificationEmail(data.email, data.token, data.code, data.role);
  },

  sendWelcomeEmail: async (data) => {
    if (!data.email) {
      throw new Error("Missing email");
    }
    await sendWelcomeEmail(data.email);
  },
};

const emailWorker = new Worker(
  "emailQueue",
  async (job) => {
    const handler = handlers[job.name];

    if (!handler) {
      throw new Error(`No handler for job: ${job.name}`);
    }

    await handler(job.data);
  },
  { connection },
);

emailWorker.on("completed", (job) => {
  console.log(` ${job.name} completed for ${job.data.email}`);
});

emailWorker.on("failed", (job, err) => {
  console.error(` ${job.name} failed: ${err.message}`);
});
