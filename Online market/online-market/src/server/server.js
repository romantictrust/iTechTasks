const port = 8000;
const adress = "localhost";
const express = require("express");

const app = express();

app.listen(port, adress, function() {
  console.log("Server started on port:", adress + ":" + port);
});

app.use(express.json());
app.set('json spaces', 2);


app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});


const index = require("./routes/index");
const materials = require("./routes/materials");
const archive = require("./routes/archive")
const users = require("./routes/users")


app.get("/", index);
app.get("/api/materials", materials);
app.get("/api/archive", archive)
app.get("/api/users", users)
