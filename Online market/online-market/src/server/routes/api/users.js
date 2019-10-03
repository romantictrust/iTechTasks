const mongoose = require("mongoose");
const passport = require("passport");
const router = require("express").Router();
const auth = require("../auth");
const Users = mongoose.model("Users");
const emailController = require("../../controllers/email.controller");

//POST new user route (optional, everyone has access)
router.post("/", auth.optional, (req, res, next) => {
  const {
    body: { user }
  } = req;

  if (!user.firstName) {
    return res.status(422).json({
      errors: "Firstname is required"
    });
  }

  if (!user.lastName) {
    return res.status(422).json({
      errors: "Lastname is required"
    });
  }

  if (!user.email) {
    return res.status(422).json({
      errors: "Email is required"
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: "Password is required"
    });
  }

  const finalUser = new Users(user);
  emailController.collectEmail(finalUser.toAuthJSON());
  finalUser.setPassword(user.password);

  return finalUser.save(err => {
    if (err) {
      if (err.name === "MongoError" && err.code === 11000) {
        // Duplicate username
        return res.status(422).json({ errors: "User already exists!" });
      }
      return res.status(422).json({ errors: err });
    } else res.json({ user: finalUser.toAuthJSON() });
  });
});

//POST resend confirmation letter
router.post("/reconfirm", auth.optional, (req, res, next) => {
  emailController.collectEmail(req.body);
});

router.get("/confirm/:id", emailController.confirmEmail);

//POST login route (optional, everyone has access)
router.post("/login", auth.optional, (req, res, next) => {
  const {
    body: { user }
  } = req;

  if (!user.email) {
    return res.status(422).json({
      errors: "Email is required"
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: "Password is required"
    });
  }

  return passport.authenticate(
    "local",
    { session: false },
    (err, passportUser, info) => {
      if (err) {
        return next(err);
      }

      if (passportUser) {
        const user = passportUser;
        user.token = passportUser.generateJWT();
        return res.json({ user: user.toAuthJSON() });
      }

      return res.status(400).json({
        errors: "User not found"
      });
    }
  )(req, res, next);
});

//GET current route (required, only authenticated users have access)
router.get("/current", auth.required, (req, res, next) => {
  const {
    payload: { id }
  } = req;

  return Users.findById(id).then(user => {
    if (!user) {
      return res.sendStatus(400);
    }

    return res.json({ user: user.toAuthJSON() });
  });
});

router.post("/update", auth.optional, (req, res, next) => {
  const { id, materials, balance, orders } = req.body;
  return Users.findByIdAndUpdate(id, {
    $set: { materials: materials, balance: balance, orders: orders }
  }).exec((err, user)=>{
    if(err){
      console.log(err);
      res.status(500).json({
        errors: err
      });
    } else {
      res.status(200).send(user)
    }
  })
});

module.exports = router;
