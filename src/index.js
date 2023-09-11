const express = require("express");
const bodyParser = require("body-parser");

const v1TodoRouter = require("./v1/routes/todoRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api/v1/todos", v1TodoRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
