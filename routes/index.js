var express = require('express');
const db = require('../db/models/index.js');
var router = express.Router();
const db = require('../db/models');
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
  res.render( 'index', { questions, categories });
}));

module.exports = router;
