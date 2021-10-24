var express = require('express');
// const { like } = require('sequelize/types/lib/operators');
var router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils.js');
const { requireAuth } = require('../auth');

// posts question to the database
router.post("/answers", csrfProtection, asyncHandler(async(req, res, next) => {
  const questionId = req.body.questionId;
  const userId = res.locals.user.id;
  const answerText = req.body.answerText;
  try {
    await db.Answer.create({
      userId: userId,
      questionId: questionId,
      answer: answerText
    });
    res.redirect(`/questions/${questionId}`);
  } catch(error) {
    console.log('/////////////////////////');
    console.log('Error creating new question in database');
    res.redirect('/');
  }
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
  router.post("/answers/:answerId(\\d+)/likes", requireAuth, asyncHandler(async (req, res) => {
    const answerId = req.params.answerId;
    const userId = res.locals.user.id;
    try {
      await db.Like.create({
        userId: userId,
        answerId: answerId,
      });
    } catch(error) {
      console.log('error deleting like record');
      res.json({message: 'Error'});
    }
    console.log('successfully unliked answer');
    res.json({message: 'Success'});
  }));

  // deletes like
  router.delete("/answers/:answerId(\\d+)/likes", requireAuth, asyncHandler(async (req, res, next) => {
    const answerId = req.params.answerId;
    const userId = res.locals.user.id;
    try {
      await db.Like.destroy({
        where:{
          userId: userId,
          answerId: answerId,
        }
      });
    } catch(error) {
      console.log('error deleting like record');
      res.json({message: 'Error'});
    }
    console.log('successfully unliked answer');
    res.json({message: 'Success'});
  }));

  // authorizes likes
  // router.get("/answers/:answerId(\\d+)/likes/auth", requireAuth, asyncHandler((req, res, next) => {
  //   const answerId = req.params.answerId;
  //   const userId = res.locals.user.id;
  //   const likeExists = await db.Like.findAll({
  //     where:{
  //       userId: userId,
  //       answerId: answerId,
  //     }
  //   });

  //   if (likeExists) {
  //     // console.log('////////////////')
  //     // console.log('Success');
  //     res.json({message: 'Success'});
  //   } else {
  //     // console.log('////////////////')
  //     // console.log('Failure');
  //     res.json({message: 'Failure'});
  //   };
  // }));

  module.exports = router;
