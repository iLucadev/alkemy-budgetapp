import mysql from "mysql";
import config from "./config.js";
import { promisify } from "util";

const pool = mysql.createPool(config);

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has to many connections");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused");
    }
  }
  if (connection) connection.release();
  console.log("Database connected!");
  return;
});

/**
 * Promisify pool queries
 * Allows us to use async functions to query data.
 */
pool.query = promisify(pool.query);

export default pool;
