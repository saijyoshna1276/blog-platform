const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let posts = [];

app.get("/", (req, res) => {
  res.send("Blog Platform API Running");
});

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.post("/api/posts", (req, res) => {
  const post = {
    id: Date.now(),
    title: req.body.title,
    content: req.body.content
  };

  posts.push(post);
  res.json(post);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
