import { Router } from "express";
import connection from "../database/database.js";

const router = Router();

//GET ALL
router.get("/operations", (req, res) => {
  connection.query(`SELECT * FROM operations`, (err, rows) => {
    err ? res.status(204).send(err) : res.status(200).json(rows);
  });
});

//GET ONE
router.get("/operations/:id", (req, res) => {
  connection.query(
    `SELECT * FROM operations WHERE operation_id = ?`,
    [req.params.id],
    (err, rows) => {
      err ? res.status(204).send(err) : res.status(200).json(rows);
    }
  );
});

//POST
router.post("/operations", (req, res) => {
  connection.query(`INSERT INTO operations set ?`, [req.body], (err, rows) => {
    err ? res.status(204).send(err) : res.status(200).json(rows);
  });
});

//UPDATE
router.put("/operations/:id", (req, res) => {
  connection.query(
    `UPDATE operations set ? WHERE operation_id = ?`,
    [req.body, req.params.id],
    (err, rows) => {
      err ? res.status(204).send(err) : res.status(200).json(rows);
    }
  );
});

//DELETE
router.delete("/operations/:id", (req, res) => {
  connection.query(
    `DELETE operations WHERE operation_id = ?`,
    [req.params.id],
    (err, rows) => {
      err
        ? res.status(204).send(err)
        : res.status(200).json({ message: "operation deleted!" });
    }
  );
});

export default router;
