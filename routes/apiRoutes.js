const router = require("express").Router();
const database = require("../db/db.json");
// reworking inclass "helper" functions
const { addNewNote } = require("../routes/innards");

router.get("/notes", (req, res) => {
  let output = database;
  res.json(output);
});

router.post("/notes", (req, res) => {
  req.body.id = database.length.toString();

  const noteAdd = addNewNote(req.body, database);
  res.json(noteAdd);
});

module.exports = router;
