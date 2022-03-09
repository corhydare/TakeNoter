const express = require("express");
const port = process.env.PORT || 3001;
const app = express();
const html = require("./routes/htmlRoutes");
const api = require("./routes/apiRoutes");
const { clog } = require("./middleware/clog");

app.use(clog);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", api);
app.use("/", html);
app.get("/", html);

app.listen(port, () => console.log(`What's wrong with ${port}?`));
