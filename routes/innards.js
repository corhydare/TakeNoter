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

const removeNote = (id, notesArray) => {
  notesArray.splice(id, 1);
  for (let i = 0; i < notesArray.length; i++) {
    notesArray[i].id = i;
  }
  return notesArray;
};

module.exports = {
  addNewNote,
  removeNote,
};
