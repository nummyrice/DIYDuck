const express = require('express');
const router = express.Router();
const session =  require('express-session');
const { csrfProtection, asyncHandler } = require('./utils.js');
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const db = require('../db/models');
const {User} = db;
//const { loginUser, logoutUser} = require('../auth')

router.get('/signup', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render("sign-up-form", {
    title: "Sign Up",
    user,
    csrfToken: req.csrfToken()
  })
})

const userValidators = [
  check('name')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Name')
    .isLength({ max: 255 })
    .withMessage('Name must not be more than 255 characters long'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 255 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    // .isLength({ max: 50 })
    // .withMessage('Password must not be more than 50 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('confirmedPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    // .isLength({ max: 50 })
    // .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
];

router.post('/signup', csrfProtection, userValidators,
  asyncHandler(async (req, res) => {

    console.log(req.body)

    const {
      name,
      email,
      password,
      biography,
      profilePhoto,
      profession
    } = req.body;

    const user = db.User.build({
      name,
      email,
      password,
      biography,
      profilePhoto,
      profession
    });

    const validatorErrors = validationResult(req);

    console.log(validatorErrors)

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await user.save();
      //loginUser(req, res, user);
      res.redirect('/');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('sign-up-form', {
        title: 'Sign up',
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));


module.exports = router;
