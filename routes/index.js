var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('list', { title: 'Value Your Votes' });
});

router.get('/list', function(req, res, next) {
  res.render('list', { title: 'listing' });
});

module.exports = router;
