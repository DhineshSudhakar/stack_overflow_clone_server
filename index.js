const express = require("express");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();

// dotenv configuration
dotenv.config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

async function clientConnection(url) {
  const client = new MongoClient(url);
  await client.connect();
  console.log("Connected to mongodb");
  return client;
}

const client = clientConnection(MONGO_URL);
// mongo db connection implementation
module.exports = {
  client,
};

// express body parsing middleware
app.use(express.json());

// cors middleware
app.use(cors());

// Welcome routes
app.get("/", (req, res) => {
  res.send("welcome to stack overflow clone api 🎆🎉");
});

// Custom routes

app.listen(PORT, () => console.log("Server running on port:", PORT));
