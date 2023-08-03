import dotenv from "dotenv";

dotenv.config();

const environment = {
  port: process.env.PORT || 4000,
  secretKey: process.env.SECRET_KEY || "secret",
  airtableApiKey: process.env.AIRTABLE_API_KEY || "api key here",
  airtableBaseId: process.env.AIRTABLE_BASE_ID || "base id here",
};

export default environment;
