import express from "express";
import morgan from "morgan";
import cors from "cors";
import mysql from "mysql";
import config from "./database/config.js";
import operations from "./routes/operations.js";
import auth from "./routes/auth.js";
import users from "./routes/users.js";
import dotenv from "dotenv";

//Initialize the app
const app = express();

//Settings
app.set("port", process.env.PORT);

//Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Global variables
app.use((req, res, next) => {
  next();
});

//Routes
app.use(auth);
app.use(operations);
app.use(users);

//Testing
app.get("/", (req, res) => {
  res.send("Hey there!");
});

export default app;
