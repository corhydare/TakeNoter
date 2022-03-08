const router = require("express").Router();
const database = require("../db/db.json");
// reworking inclass "helper" functions
const { addNewNote, removeNote } = require("../routes/innards");

router.get("/notes", (req, res) => {
  let results = database;
  res.json(results);
});

router.post("/notes", (req, res) => {
  req.body.id = database.length.toString();

  const noteAdd = addNewNote(req.body, database);
  res.json(noteAdd);
});

router.delete("/notes/:id", (req, res) => {
  const newNotes = removeNote(req.params.id, database);
  res.json(newNotes);
});

module.exports = router;
