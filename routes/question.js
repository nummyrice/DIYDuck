const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils.js');
const {check, validationResult} = require('express-validator')
const db = require('../db/models');

router.post('/new',csrfProtection, asyncHandler(async (req, res) => {

//   console.log('printing Body', req.body)
//   console.log('Printing User', res.locals.user.id)

  const {
    title,
    content,
    categoryId,
  } = req.body;

  const question = await db.Question.create({
    title : title,
    content : content,
    userId : res.locals.user.id,
    categoryId: categoryId
  });
    res.redirect('/');
}));

router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req,res) => {
    const questionId = req.params.id

    const question = await db.Question.findAll({
        where:{
            id : questionId
        },
        include: ['user','answers']
      });

    //   console.log("////////////////////////////")
    //   console.log(question[0].answers[0].id)


      const comments = await db.Comment.findAll({
        where : {
          answerId : 1, //change after answer is configured
        },
        order: [['updatedAt', 'DESC']],
        include: ['user'],
      })

    //   console.log(question)

    let answerId = 1 //hard coding

      res.render( 'questionIdPage', {
        question,
        comments,
        answerId,
        csrfToken: req.csrfToken()});

    // res.send("hello")

  }))







module.exports = router;
