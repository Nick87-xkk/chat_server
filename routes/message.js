const express = require('express');
const router = express.Router();

const messageController  = require('../controllers/messageController')

router.post('/add',messageController.addMessage)
router.post('/search',messageController.searchMessage)

module.exports = router;