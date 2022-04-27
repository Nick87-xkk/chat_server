const express = require('express');
const router = express.Router();

const fileController = require("../controllers/fileUploadController.js")

router.post('/upFile',fileController.upLoad);

module.exports = router