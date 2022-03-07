const fs = require("fs");
const path = require("path");

const addNewNote = (body, notesArray) => {
  const newNote = body;
  notesArray.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArray)
  );
  return newNote;
};

module.exports = { addNewNote };
