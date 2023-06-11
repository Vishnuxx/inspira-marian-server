const env = require("dotenv").config();

module.exports.env = {
  PORT,
  NOTION_API_KEY,
  NOTION_PORTAL_DB_ID,
  CLIENT_URL,
  CLIENT_DOMAIN,
  MAILER_ID,
MAILER_PASS
} = process.env;
