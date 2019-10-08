const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));
router.use("/materials", require("./materials"));

module.exports = router;
