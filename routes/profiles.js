var express = require('express');
var profiles = require('../data/profiles.json');
var router = express.Router();

var isEmpty = function(v) {
    if (v === "" ||
        v === undefined ||
        v === null) {
        return true;
    } else {
        return false;
    }
}
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(profiles);
});

router.get('/details', function(req, res, next) {
    if (isEmpty(req.query.id)) {
        console.log("no id");
        return res.redirect('/');
    }
    for (var i = 0; i < profiles.length; i++) {
        if (profiles[i].Id == Number(req.query.id) &&
            profiles[i].Profile) {
            return res.render('profiles', profiles[i]);
        }
    }
    console.log("no profile found");
    return res.redirect('/');
});

module.exports = router;
