import express from "express";
import morgan from "morgan";
import cors from "cors";
import mysql from "mysql";
import config from "./database/config.js";
import database from "./database/database.js";

//Initialize the app
const app = express();

//Settings
app.set("port", 4000);

//Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("database connected!");
}); */

//Testing
app.get("/", (req, res) => {
  res.send("Hey there!");
});

export default app;
