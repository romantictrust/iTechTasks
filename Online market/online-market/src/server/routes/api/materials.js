const router = require("express").Router();
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const auth = require("../auth");
const Materials = mongoose.model("Materials");
const { dbName, dbUrl } = require("../../config");

(async () => {
  const client = await MongoClient.connect(dbUrl, { useNewUrlParser: true });
  const db = client.db(dbName);
  router.get("/", (req, res) => {
    db.collection("materials")
      .find({})
      .toArray((err, doc) => {
        if (err) throw err;
        res.json(doc);
      });
  });
})();

router.post("/update", auth.required, (req, res, next) => {
  const { _id, price, date } = req.body.data;
  const { isAdmin } = req.body.admin;

  if (!isAdmin) {
    return res.status(422).json({
      errors: "You are not allowed to do this"
    });
  }

  return Materials.findByIdAndUpdate(_id, {
    $set: { price: price, date: date }
  }).exec((err, material) => {
    if (err) {
      res.status(500).json({
        errors: err
      });
    } else {
      res.status(200).send(material);
    }
  });
});

module.exports = router;
