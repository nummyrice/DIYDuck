var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils.js');

/* GET home page. */
router.get('/', asyncHandler(async function(req, res, next) {
  const questions = await db.Question.findAll({
    order: [['updatedAt', 'DESC']],
    limit: 10,
    include: ['user'],
  });

  // console.log('console.log: ', questions);
  // console.log('Users: ', questions[0].user);
  //How to properly get users array based off of 10 most recent questions
  // also need to query for likes

  // const users = await db.User.findAll
  res.render( 'index', { questions });
}));

module.exports = router;
