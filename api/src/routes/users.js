import { Router } from "express";
import connection from "../database/database.js";
import helpers from "../libs/helpers.js";

const router = Router();

//GET ALL
router.get("/users", (req, res) => {
  connection.query(`SELECT * FROM users`, (err, rows) => {
    err ? res.status(204).send(err) : res.status(200).json(rows);
  });
});

//GET ONE
router.get("/users/:id", (req, res) => {
  connection.query(
    `SELECT * FROM users WHERE user_id = ?`,
    [req.params.id],
    (err, rows) => {
      err ? res.status(204).send(err) : res.status(200).json(rows);
    }
  );
});

//POST
router.post("/users", async (req, res) => {
  const { user_name, user_password, user_email } = req.body;

  const newUser = {
    user_name,
    user_password,
    user_email,
  };

  newUser.user_password = await helpers.encryptPassword(user_password);

  connection.query(
    //First we make sure the user does not already exists in the db
    `SELECT * FROM users WHERE user_email = ?`,
    [user_email],
    (err, rows) => {
      err ? res.status(204).send(err) : res.status(200);
      //If the response array length is more than 0, there is a user with that email
      rows.length != 0
        ? res.status(303).json({ message: "User already exists!" })
        : //If not, then insert the user in the db.
          connection.query(
            `INSERT INTO users set ?`,
            [newUser],
            (err, rows) => {
              err ? res.status(204).send(err) : res.status(200).json(rows);
            }
          );
    }
  );
});

//UPDATE
router.put("/users/:id", (req, res) => {
  connection.query(
    //First we make sure the user exists in the db.
    `SELECT * FROM users WHERE user_id = ?`,
    [req.params.id],
    (err, rows) => {
      err ? res.status(304).send(err) : res.status(200);
      //If the response array length is 0, there is no db matches with that id
      rows.length == 0
        ? res.status(204).json({ message: "User does not exist" })
        : //If not, then update the user
          connection.query(
            `UPDATE users set ? WHERE user_id = ?`,
            [req.body, req.params.id],
            (err, rows) => {
              err ? res.status(304).send(err) : res.status(200).json(rows);
            }
          );
    }
  );
});

//DELETE
router.delete("/users/:id", (req, res) => {
  connection.query(
    //First we make sure the user exists in the db.
    `SELECT * FROM users WHERE user_id = ?`,
    [req.params.id],
    (err, rows) => {
      rows.length == 0
        ? res.status(204).json({ message: "User does not exist" })
        : //If not, then delete the user
          connection.query(
            `DELETE users WHERE user_id = ?`,
            [req.params.id],
            (err, rows) => {
              err ? res.send(err) : res.json({ message: "operation deleted!" });
            }
          );
    }
  );
});

export default router;
