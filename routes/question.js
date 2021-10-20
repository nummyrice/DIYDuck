const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils.js');
const {check, validationResult} = require('express-validator')
const db = require('../db/models');
const {Question} = db;

router.post('/new',csrfProtection, asyncHandler(async (req, res) => {

//   console.log('printing Body', req.body)
//   console.log('Printing User', res.locals.user.id)

  const {
    title,
    content
  } = req.body;

  const question = db.Question.create({
    title : title,
    content : content,
    userId : res.locals.user.id,
    categoryId:1
  });
    res.redirect('/');
}));









module.exports = router;
