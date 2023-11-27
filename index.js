require("dotenv").config();

const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

// GET /api/users
server.get("/api/users", (req, res) => {
  res.json(["jwbw29", "justinbyrd7", "truesonMIZ", "justinwbyrd"]);
});

// POST /api/register
server.post("/api/register", (req, res) => {
  const { username, password } = req.body;
  res.json({ username, password });
});

// POST /api/login -- Checks { username, password } in the request body, responds with a welcome message.

server.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  username === "justin" && password === "byrd"
    ? res.json({ message: `Welcome ${username}!` })
    : res.status(400).json({ message: "Please provide username and password" });
});

server.use("*", (req, res) => {
  res.send(`<h1>API is UP!</h1>`);
});

server.use((err, req, res) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

const port = process.env.PORT || 9000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
