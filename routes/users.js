const express = require('express');
const router = express.Router();
const session =  require('express-session');
const { csrfProtection, asyncHandler } = require('./utils.js');
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const db = require('../db/models')
//const { loginUser, logoutUser} = require('../auth')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', csrfProtection, (req, res) => {
  //const user = db.User.create();
  res.render("sign-up-form", {
    title: "Sign Up",
    //user,
    csrfToken: req.csrfToken()
  })
})



module.exports = router;
