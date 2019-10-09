const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const UsersSchema = new Schema({
  confirmed: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 50,
  },
  balance: {
    type: Number,
    default: 0,
  },
  materials: {
    type: Object,
    default: [
      {
        material: 'Wood',
        amount: 0,
        cost: 12,
      },
      {
        material: 'Iron',
        amount: 0,
        cost: 34,
      },
      {
        material: 'Oil',
        amount: 0,
        cost: 26,
      },
    ],
  },
  orders: {
    type: Array,
    default: [],
  },
  hash: String,
  salt: String,
}, { minimize: false });

UsersSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex');
};

UsersSchema.methods.validatePassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex');
  return this.hash === hash;
};

UsersSchema.methods.generateJWT = function () {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    },
    'secret',
  );
};

UsersSchema.methods.toAuthJSON = function () {
  if (this.isAdmin) {
    return {
      id: this._id,
      email: this.email,
      confirmed: this.confirmed,
      isAdmin: this.isAdmin,
      token: this.generateJWT(),
    };
  }
  return {
    id: this._id,
    email: this.email,
    confirmed: this.confirmed,
    isAdmin: this.isAdmin,
    isBlocked: this.isBlocked,
    balance: this.balance,
    materials: this.materials,
    orders: this.orders,
    token: this.generateJWT(),
  };
};

mongoose.model('Users', UsersSchema);
