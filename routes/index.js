const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/demo', (req, res, next) => {
  res.send(JSON.stringify({
    name: '李四',
    age: 23,
    job: 'programer'
  }))
});



module.exports = router;
