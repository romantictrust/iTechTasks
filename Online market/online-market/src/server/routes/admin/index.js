const express = require('express');

const router = express.Router();

router.use('/usersList', require('./usersList'));
router.use('/userStatus', require('./userStatus'));

module.exports = router;
