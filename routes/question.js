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

    const question = await db.Question.findAll(
        {
        order: [['updatedAt', 'DESC']],
        where:{
            id : questionId
        },
        include: [
          {model: db.User,
          as: 'user'},
          {model: db.Answer,
          as:'answers',
          order: [['updatedAt', 'DESC']],
        include: [{model: db.User, as: 'user'},
          {model: db.Comment, as:'comments', order: [['updatedAt', 'DESC']], include:[{model: db.User,as: 'user' }]}],
      }],
      });

    //   console.log("////////////////////////////")
    //   console.log(question[0].answers)

    let authtica

    const categories = await db.Category.findAll();

      res.render( 'questionIdPage', {
        question,
        categories,

        csrfToken: req.csrfToken()
    });

    // res.send("hello")

  }))







module.exports = router;
