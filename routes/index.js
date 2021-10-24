var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils.js');

const { Op } = require("sequelize");

/* GET home page. */
router.get('/',csrfProtection, asyncHandler(async function(req, res, next) {
  const categories = await db.Category.findAll()

  // get 10 most recent questions for home page
  const questions = await db.Question.findAll({
    //change back to DSC before production
    order: [['updatedAt', 'DESC']],
    limit: 10,
    include: [{
      model: db.User,
      as: 'user'
      }, {
      model: db.Answer,
      as:'answers',
      limit: 1,
      order: [['updatedAt', 'DESC']],
      include: [{
        model: db.User,
        as: 'user'
        },  {
        model: db.Like,
        as: 'likes',
        include: [{
          model: db.User,
          as: 'user'
        }]
      }],
    }],
  });
  // console.log('///////////////////////////////////////////')
  // console.log(questions[0])

  res.render( 'index', {
    questions,
    categories,
    csrfToken: req.csrfToken()});

}));

router.post("/", asyncHandler(async (req, res, next) =>{
  const search = req.body.search
  console.log(req.body)
  const questions = await db.Question.findAll({
      where: {
        title: {[Op.substring]: `${search}`},
      },
      include: [{model: db.User, as: 'user'}],
  })

  res.render("searchResults", {search, questions})
}));

// generates like totals for each answer on page
router.get("/answers/:answerId(\\d+)/likes", asyncHandler(async (req, res, next)=> {
  const answerId = req.params.answerId;
  const likes = await db.Like.findAll({
    where: {
      answerId: answerId,
    }
  });

  try {
    const likeStatus = await db.Like.findAll({
    where: {
      userId: res.locals.user.id,
      answerId: answerId
    }
  });
  res.json({likes, likeStatus});
} catch(error) {
  console.log('<like loading error>', error);
}


}));
// creates like
router.post("/answer/:answerId(\\d+)/likes", asyncHandler(async (req, res, next) => {
  const answerId = req.params.answerId;
  const userId = res.locals.user.id;
  try {
    await db.Like.create({
      userId: userId,
      answerId: answerId,
    });
    res.send('Like Succesfully Created');
  } catch(error) {
    res.send('Error Creating Like');
  }
}));

// deletes like
router.post("/answer/:answerId(\\d+)/likes", asyncHandler(async (req, res, next) => {
  const answerId = req.params.answerId;
  const userId = res.locals.user.id;
  try {
    await db.Like.destroy({
      where:{
        userId: userId,
        answerId: answerId,
      }
    });
    res.json('Like Succesfully Deleted');
  } catch(error) {
    res.send('Error Deleting Like');
  }
}));

router.get("/answers/:answerId(\\d+)/likes", asyncHandler((req, res, next) => {
  const answerId = req.params.answerId;
  if (answerId === res.locals.user.id) {
    res.json({message: 'Success'});
  } else {
    res.json({message: 'Failure'});
  };
}))


module.exports = router;
