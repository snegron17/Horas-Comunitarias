var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('refugio', { title: 'Refugio' });
});

module.exports = router;
