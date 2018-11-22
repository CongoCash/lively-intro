var express = require('express');
var router = express.Router();
const path = require('path');
var parentDir = path.normalize(__dirname+"/..");


/* GET home page. */

router.get('/success', function(req, res, next) {
  res.sendfile(parentDir + '/public/html/success.html');
});
router.get('/', function(req, res, next) {
  res.sendfile(parentDir + '/public/html/form.html');
});


module.exports = router;
