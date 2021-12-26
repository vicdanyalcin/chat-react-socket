const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
    setTimeout(() => {
      io.volatile.emit("message", {
        name: "mock user",
        message: "Lorem ipsum dolor sit amet.",
      });
    }, 2000);
  });
});

httpServer.listen(8000, function () {
  console.log("listening on port 8000");
});
