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
  res.render( 'index', { questions, categories });
}));

module.exports = router;
