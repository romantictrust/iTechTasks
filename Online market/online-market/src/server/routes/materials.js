const express = require("express");
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const dbName = 'online-market'
const dbUrl = "mongodb://admin:admin1@ds255403.mlab.com:55403/online-market";

(async()=>{
 const client = await MongoClient.connect(dbUrl, { useNewUrlParser: true});
 const db = client.db(dbName);
 router.get("/api/materials", function(req, res) {
    db.collection('materials').find({}).toArray((err, doc)=>{
        if (err) throw err;
        res.json(doc)
    })
  });
})();

module.exports = router;