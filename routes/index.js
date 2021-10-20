var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils.js');

/* GET home page. */
router.get('/', asyncHandler(async function(req, res, next) {
  const questions = await db.Question.findAll({
    order: [['updatedAt', 'DESC']],
    limit: 10,
  });

  const users = questions.map(async function(question) {
    const user_id = question.userId;
    const users = await db.User.findByPk(user_id);
    console.log("id: ", user_id);
    console.log("users: ", users)
    return users;
  });
  console.log(users);
  //How to properly get users array based off of 10 most recent questions
  // also need to query for likes

  // const users = await db.User.findAll
  res.render('index', { title: 'a/A Express Skeleton Home', questions});
}));

module.exports = router;
