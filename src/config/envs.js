const env = require("dotenv").config();

module.exports.env = {
  PORT,
  MAILER_ID,
  MAILER_PASS,
  ALLOWED_DOMAINS,
  CORS_ORIGINS
} = process.env;
