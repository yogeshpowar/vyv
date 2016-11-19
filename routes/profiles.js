var express = require('express');
var profiles = require('../data/profiles.json');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(profiles);
});

module.exports = router;
