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

// POST /api/login

server.use("*", (req, res, next) => {
  res.send(`<h1>API is UP!</h1>`);
});

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

const port = process.env.PORT || 9000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
