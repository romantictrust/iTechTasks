const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const auth = require('../auth');

const Users = mongoose.model('Users');

router.post('/', auth.required, (req, res, next) => {
  const { isAdmin } = req.body.adminPassport;
  const { id, status } = req.body.userTarget;

  console.log(req.body);

  if (!isAdmin) {
    return res.status(422).json({
      errors: 'You are not allowed to do this',
    });
  }

  return Users.findByIdAndUpdate(id, {
    $set: { isBlocked: status },
  }).exec((err, user) => {
    user = { _id: user._id, isBlocked: status, email: user.email };
    if (err) {
      res.status(500).json({
        errors: err,
      });
    } else {
      res.status(200).send(user);
    }
  });
});

module.exports = router;
