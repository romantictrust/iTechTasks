const port = 8000;
const adress = "localhost";
const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
const mongoose = require("mongoose");
const dbUrl = "mongodb://admin:admin1@ds255403.mlab.com:55403/online-market";

//Socket connection
const server = require("http").Server(app);
const io = require("socket.io")(server);
console.log("Server started on port:", adress + ":" + port);

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configure Mongoose
mongoose.connect(dbUrl);
mongoose.set("debug", true);

//Configure app
app.use(cors());
app.use(express.json());
app.set("json spaces", 2);
app.use(
  session({
    secret: "online-market",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
  })
);

//Socket
io.sockets.on("connect", socket => {
  console.log(`Socket ${socket.id} connected.`);
  console.log(`${io.engine.clientsCount} sockets connected`);
  socket.on("disconnect", () => {
    console.log(`Socket ${socket.id} disconnected.`);
    console.log(`${io.engine.clientsCount} sockets connected`);
  });
});

//Models && routes
require("./models/Users");
require("./config/passport");
const materials = require("./routes/api/materials");
app.use(require("./routes"));

app.get("/api/materials", materials);

server.listen(port);
