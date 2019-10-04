const router = require("express").Router();
const MongoClient = require('mongodb').MongoClient;
const {dbName, dbUrl} = require('../../config');

(async()=>{
 const client = await MongoClient.connect(dbUrl, { useNewUrlParser: true});
 const db = client.db(dbName);
 router.get("/", (req, res) => {
    db.collection('materials').find({}).toArray((err, doc)=>{
        if (err) throw err;
        res.json(doc)
    })
  });
})();

module.exports = router;