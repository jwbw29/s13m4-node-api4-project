require("dotenv").config();

const express = require("express");
const server = express();

server.use(express.json());

// GET /api/users
server.get("", (req, res) => {
  res.json();
});

// POST /api/register

// POST /api/login

server.use("*", (req, res) => {
  res.json({ message: "API is UP!" });
});

const port = process.env.PORT || 9000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
