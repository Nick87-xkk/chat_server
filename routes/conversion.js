const express = require('express');
const router = express.Router();

const conversionController = require("../controllers/conversionController");

router.post('/create',conversionController.createConversion)
router.post('/search',conversionController.searchConversion)
router.post('/update',conversionController.updateConversionLatestMessage)

module.exports = router;