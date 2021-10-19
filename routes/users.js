const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils.js');
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const db = require('../db/models');
const { loginUser, logoutUser} = require('../auth')

/* GET SIGNUP FORM */
router.get('/signup', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render("sign-up-form", {
    title: "Sign Up",
    user,
    csrfToken: req.csrfToken()
  })
})
// SIGNUP VALIDATORS
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



/* SUBMIT SIGNUP FORM */
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
      loginUser(req, res, user);
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

router.get('/login', csrfProtection, asyncHandler((req, res) => {
  res.render('login', {title: "login", csrfToken: req.csrfToken()});
}));

// LOGIN VALIDATORS
const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];

router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      // Attempt to get the user by their email address.
      const user = await db.User.findOne({ where: { email } });

      if (user !== null) {
        // If the user exists then compare their password
        // to the provided password.
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

        if (passwordMatch) {
          // If the password hashes match, then login the user
          // and redirect them to the default route.
          loginUser(req, res, user);
          return res.redirect('/');
        }
      }

      // Otherwise display an error message to the user.
      errors.push('Login failed for the provided email address and password');
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('login', {
      title: 'Login',
      email,
      errors,
      csrfToken: req.csrfToken(),
    });
}))

router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/');
})

router.get('/users/:id(\\d+)', asyncHandler(async (req,res) => {
  const userId = req.params.id
  const user = await db.User.findByPk(userId)
  res.render('profile', { user })
}))

router.post('/users/delete',asyncHandler(async (req,res) => {
    const { userId } = req.body
    const user = await db.User.findByPk(userId)
    await user.destroy()
    res.redirect('/');
}))


/*
--create handler for user/:id
--display user bio info if applicable
--display frequently used question
*/


module.exports = router;
