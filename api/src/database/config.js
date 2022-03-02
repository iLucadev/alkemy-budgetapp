import dotenv from "dotenv";
dotenv.config();

/**
 * Exports database keys stored in the .env. This way the sensitive
 * data remains private.
 */
export default {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE: process.env.DATABASE,
};
