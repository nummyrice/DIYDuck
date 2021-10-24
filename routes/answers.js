const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils.js');
const {check, validationResult} = require('express-validator')
const db = require('../db/models');

router.post('/questions/:id(\\d+)', csrfProtection, asyncHandler(async(req, res) => {
    const questionId = req.params.questionId
    const {answer} = req.body
    const answers = await db.Answer.create({
        answer: answer,
        questionId: questionId,
        userId: res.locals.user.id
    })
    // const question = await db.Question.findByPk(questionId)
    // let questionId = question.questionId

    res.redirect(`/questions/${questionId}`)
}))


router.post('answers/:id(\\d+)', csrfProtection, asyncHandler(async (req,res) => {
    const { answerId } = req.body
    const answer = await db.Answer.findByPk(answerId)
    await answer.destroy()
    res.redirect(`/questions/${questionId}`);
}));

router.post('/answers/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req,res) => {
    const{answer, answerId} = req.body

    const answerEdit = await db.Answer.findByPk(answerId)

    answerEdit.answer = answer

    user.save()

    res.redirect(`/questions/${questionId}`)
  }))


  module.exports = router
