const nodemailer = require("nodemailer");
const { env } = require("./envs");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.MAILER_ID,
    pass: env.MAILER_PASS,
  },
});

console.log(env.MAILER_ID)
console.log(env.MAILER_PASS)

module.exports.mailer = transporter


