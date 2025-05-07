const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.set("view engine", "ejs");
app.use(express.static("public"));

let emojis = [];

function logEmojiPost(user, emoji) {
  console.log(`[Serverless Log] ${user} posted: ${emoji}`);
}

app.get("/", (req, res) => {
  res.render("index", { emojis });
});

io.on("connection", (socket) => {
  socket.on("new-emoji", (data) => {
    emojis.push(data);
    logEmojiPost(data.user, data.emoji);
    io.emit("update-wall", emojis);
  });
});

http.listen(3000, () => console.log("http://localhost:3000"));