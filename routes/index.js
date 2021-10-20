var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils.js');

/* GET home page. */
router.get('/',csrfProtection, function(req, res, next) {
  res.render('index',
  { title: 'a/A Express Skeleton Home' ,
    csrfToken: req.csrfToken()
});
});

module.exports = router;
