const router = require("express").Router();
const database = require("../db/db.json");
// reworking inclass "helper" functions
const { addNewNote, removeNote } = require("../routes/innards");

router.get("/notes", (req, res) => {
  let output = database;
  res.json(output);
});

router.post("/notes", (req, res) => {
  req.body.id = database.length.toString();

  const noteAdd = addNewNote(req.body, database);
  res.json(noteAdd);
});

router.delete("/notes/:id", (req, res) => {
  const noteDel = removeNote(req.params.id, database);
  res.json(noteDel);
});

module.exports = router;
