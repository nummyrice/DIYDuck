var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils.js');

/* GET home page. */
router.get('/', asyncHandler(async function(req, res, next) {
  const categories = await db.Category.findAll()
  // get 10 most recent questions for home page
  const questions = await db.Question.findAll({
    order: [['updatedAt', 'DESC']],
    limit: 10,
    include: ['user'],


  });


  // console.log('console.log: ', questions);
  // console.log('Users: ', questions[0].user);
  //How to properly get users array based off of 10 most recent questions
  // also need to query for likes


  res.render( 'index', { questions, categories });
}));

module.exports = router;
