const express = require('express');
const router = express.Router();
const session =  require('express-session');
const asyncHandler = require('express-async-handler')
const { csrfProtection } = require('./utils.js');

app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
}));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
