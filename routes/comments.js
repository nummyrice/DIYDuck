const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils.js');
const {check, validationResult} = require('express-validator')
const db = require('../db/models');

router.post('/comments/:answerId(\\d+)',csrfProtection, asyncHandler(async (req, res) => {

    //   console.log('printing Body', req.body)
    //   console.log('Printing User', res.locals.user.id)

    const answerId = req.params.answerId

      const {
        comment
      } = req.body;

      const comments = await db.Comment.create({
        comment : comment,
        answerId : answerId,
        userId : res.locals.user.id
      });

      const answer = await db.Answer.findByPk(answerId);
      let  questionId = answer.questionId

        res.redirect(`/questions/${questionId}`);

    }));


    router.delete('/comments/:id(\\d+)', async(req, res) => {
        const commentId = req.params.id
        const comment = await db.Comment.findByPk(commentId)
        if (comment) {
            await comment.destroy()
            res.json({message: "Success"})
        } else {
            res.json({message: "Failure"})
        }
    })

    router.post('/comments/:id(\\d+)/edit',csrfProtection, async(req, res) => {
      const commentId = req.params.id
      const {
          comment
        } = req.body;

      const oldComment = await db.Comment.findByPk(commentId)

      if (oldComment) {
          await oldComment.update({
              comment : comment
          });
      }

      let answerId = oldComment.answerId

      const answer = await db.Answer.findByPk(answerId)

      let questionId = answer.questionId

      res.redirect(`/questions/${questionId}`)
   })


    module.exports = router;
