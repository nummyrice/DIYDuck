var express = require('express');
// const { like } = require('sequelize/types/lib/operators');
var router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils.js');
const { requireAuth } = require('../auth');


// posts answers to the database
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


// updates answers on the database
router.post('/answers/:answerId(\\d+)/edit', csrfProtection, requireAuth, asyncHandler(async (req, res, next) => {
  const answerId = req.params.answerId;
  const userId = res.locals.user.id;
  const questionId = req.body.questionId;
  const answerEditText = req.body.answerEditText;
  try {
    await db.Answer.update({
      answer: answerEditText
      },{
        where: {
          id: answerId,
        }
      })
  console.log('////////////////////')
  console.log('Successfully updated answer')
  } catch (error) {
    console.log('//////////////////')
    console.log('Error updating answer')
    // if (questionId) {
    //   res.redirect(`/questions/${questionId}`);
    // }
    // res.redirect(`/users/${userId}/answers`);
  // }
  // if update is succesfully,  this route will be taken
  }

  if (questionId) {
    res.redirect(`/questions/${questionId}`);
  }
  // res.redirect(`/users/${userId}/answers`);
}))

// deletes associated answer
router.delete('/answers/:id(\\d+)', async (req,res) => {
  const answerId = req.params.id
  const answer = await db.Answer.findByPk(answerId)
  if (answer){
      await answer.destroy()
      res.json({message: "Success"})
  } else {
      res.json({message: "Failure"})
  }
});

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
    res.json({likes});
  };
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

  module.exports = router;
