var express = require('express');
const db = require('../db/models/index.js');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils.js');

/* GET home page. */


//key into different database, sent to same render
router.get('/', asyncHandler(async function(req, res, next) {
  const categories = await db.Category.findAll()
  
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
  res.render( 'index', { questions, categories });
}));

module.exports = router;
