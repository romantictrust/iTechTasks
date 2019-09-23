const port = 8000;
const adress = "localhost";
const express = require("express");
const session = require("express-session");
const cors = require('cors');
const mongoose = require('mongoose');
const dbUrl = "mongodb://admin:admin1@ds255403.mlab.com:55403/online-market";

const app = express();

app.listen(port, adress, () => {
  console.log("Server started on port:", adress + ":" + port);
});

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configure Mongoose
mongoose.connect(dbUrl);
mongoose.set('debug', true);

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

//Models && routes
require('./models/Users');
require('./config/passport');
const materials = require("./routes/api/materials");
const archive = require("./routes/api/archive");
app.use(require('./routes'))

app.get("/api/materials", materials);
app.get("/api/archive", archive);
