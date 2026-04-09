const emailQueue = require("../queue/emailqueue");

exports.enqueueVerificationEmail = async (email, token, code, role) => {
  await emailQueue.add(
    "sendVerificationEmail",
    { email, token, code, role },
    {
      delay: 0,
      attempts: 5,
      backoff: {
        type: "exponential",
        delay: 5000,
      },
    },
  );
};

exports.enqueueWelcomeEmail = async (email) => {
  await emailQueue.add("sendWelcomeEmail", { email });
};
