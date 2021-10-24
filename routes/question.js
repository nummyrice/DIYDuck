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
        order: [['updatedAt', 'DESC']],
        where:{
          id : questionId
        },
        include: [{
          model: db.User,
          as: 'user'}, {
          model: db.Answer,
          as:'answers',
          order: [['updatedAt', 'DESC']],
          include: [{
            model: db.User,
            as: 'user'}, {
            model: db.Like,
            as: 'likes',
            include: [{
              model: db.User,
              as: 'user',
            }]
            }, {
            model: db.Comment,
            as:'comments',
            include:[{
                model: db.
                User,as: 'user'
            }]
          }],
        }],
      });

    //   console.log("////////////////////////////")
    //   console.log(question[0].answers)
    const categories = await db.Category.findAll();

      res.render( 'questionIdPage', {
        question,
        categories,

        csrfToken: req.csrfToken()
    });

    // res.send("hello")

  }))


  router.delete('/:id(\\d+)', async(req, res) => {
    const questionId = req.params.id
    const question = await db.Question.findByPk(questionId)
    if (question) {
        await question.destroy()
        res.json({message: "Success"})
     } else {
        res.json({message: "Failure"})
    }
})


 router.post('/:id(\\d+)/edit',csrfProtection, async(req, res) => {
    const questionId = req.params.id
    const {
        title,
        content,
        categoryId,
      } = req.body;

    const question = await db.Question.findByPk(questionId)

    if (question) {
        await question.update({
            title: title,
            content: content,
            categoryId: categoryId
        });
    }

    res.redirect(`/questions/${questionId}`)
 })


module.exports = router;
