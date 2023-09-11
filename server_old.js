require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const todos = [
  {
    user_id: 1,
    title: "Learn Node.js",
    is_completed: false,
    createdAt: new Date(),
  },
  {
    user_id: 1,
    title: "Learn React.js",
    is_completed: false,
    createdAt: new Date(),
  },
  {
    user_id: 2,
    title: "Learn TailwindCSS",
    is_completed: false,
    createdAt: new Date(),
  },
];

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
};

// authenticateToken middleware
app.get("/todos", authenticateToken, (req, res) => {
  res.json(todos.filter((todo) => todo.user_id === req.user.id));
});

app.post("/signin", (req, res) => {
  const userId = req.body.userId;
  const user = { id: userId };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

app.listen(3000);
