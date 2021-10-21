var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils.js');
const { Op } = require("sequelize");

/* GET home page. */
router.get('/',csrfProtection, asyncHandler(async function(req, res, next) {
  const questions = await db.Question.findAll({
    order: [['updatedAt', 'DESC']],
    limit: 10,
    include: ['user'],
  });


  const comments = await db.Comment.findAll({
    where : {
      answerId : 1, //change after answer is configured
    },
    order: [['updatedAt', 'DESC']],
    include: ['user'],
  })


  console.log(comments.length)

  // console.log('console.log: ', questions);
  // console.log('Users: ', questions[0].user);
  //How to properly get users array based off of 10 most recent questions
  // also need to query for likes

  // const users = await db.User.findAll
  res.render( 'index', {
    questions,
    comments,
    csrfToken: req.csrfToken()});
}));


module.exports = router;
