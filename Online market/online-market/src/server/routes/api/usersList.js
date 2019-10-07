const router = require("express").Router();
const MongoClient = require("mongodb").MongoClient;
const auth = require("../auth");
const { dbName, dbUrl } = require("../../config");

router.get("/", auth.required, (req, res, next) => {
  MongoClient.connect(dbUrl, (err, database) => {
    const omDB = database.db(dbName);
    omDB
      .collection("users")
      .find({ isAdmin: false }, { fields: { email: 1, isBlocked: 1} })
      .toArray((err, doc) => {
        if (err) throw err;
        res.json(doc);
      });
  });
});

module.exports = router;
