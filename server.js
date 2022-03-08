const express = require("express");
const port = process.env.port || 3001;
const app = express();
const html = require("./routes/htmlRoutes");
const api = require("./routes/apiRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", api);
app.use("/", html);

app.listen(port, () => console.log(`What's wrong with ${port}?`));
