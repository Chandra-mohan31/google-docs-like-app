const {getDocs} = require("./senddata");
const express = require('express');

const router = express.Router();

router.get('/docs',getDocs);

module.exports = router;