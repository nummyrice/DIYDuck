var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils.js');
const { Op } = require("sequelize")

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

router.post("/", asyncHandler(async (req, res, next) =>{
  const search = req.body.search
  console.log(req.body)
  const questions = await db.Question.findAll({
      where: {
        title: {[Op.substring]: `${search}`},
      },
      include: 'user',
  })

  res.render("searchResults", {search, questions})
}))

module.exports = router;
