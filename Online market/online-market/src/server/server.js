const express = require('express');

const app = express();
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');

const dbUrl = 'mongodb://admin:admin1@ds255403.mlab.com:55403/online-market';
require('dotenv').config();

// Socket connection
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { ADRESS, PORT } = require('./config');

console.log('Server started on port:', `${ADRESS}:${PORT}`);

// Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

// To get rid of all those semi-annoying Mongoose deprecation warnings.
const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};

// Configure Mongoose
mongoose.connect(dbUrl, options);
mongoose.set('debug', true);

// Configure app
app.use(cors());
app.use(express.json());
app.set('json spaces', 2);
app.use(
  session({
    secret: 'online-market',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  }),
);

// Socket
io.sockets.on('connect', (socket) => {
  console.log(`Socket ${socket.id} connected.`);
  console.log(`${io.engine.clientsCount} sockets connected`);

  socket.on('updateMaterial', (data) => {
    io.sockets.emit('updateMaterial', data);
  });

  socket.on('disconnect', () => {
    console.log(`Socket ${socket.id} disconnected.`);
    console.log(`${io.engine.clientsCount} sockets connected`);
  });
});

// Models && routes
require('./models/Users');
require('./models/Materials');
require('./config/passport');

app.use(require('./routes'));

server.listen(PORT);
