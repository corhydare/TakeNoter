const express = require("express");

const routing = require("./routes/routes1")(app);

const app = express();

app.get("/api", (req, res) => res.send("yo"));

const port = process.env.PORT || 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(port, () => console.log(`app listening on port ${port}!`));
