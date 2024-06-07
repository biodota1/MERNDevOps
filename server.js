import express from "express";

const server = express();
const port = 3200;

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
