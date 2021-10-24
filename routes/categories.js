
const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils.js");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");

// Generate categories from database for drop-down in "Ask a Question"
router.get("/categories", asyncHandler(async (req, res) => {
  const categories = await db.Category.findAll();
  res.json(categories);
}));
// MUST ADD NESTED DATABASE QUERY FOR LIKES
router.get("/categories/:categoryId(\\d+)", asyncHandler(async (req, res) => {

    const categoryId = req.params.categoryId;
    const categories = await db.Category.findAll()

    const questions = await db.Question.findAll(
        {
        order: [['updatedAt', 'DESC']],
        where: {
            categoryId: categoryId,
          },
        include: [
          {model: db.User,
          as: 'user'},
          {model: db.Answer,
          as:'answers',
          limit: 1,
          order: [['updatedAt', 'DESC']],
        include: [{model: db.User, as: 'user'},
          {model: db.Comment, as:'comments', include:[{model: db.User,as: 'user' }]}],
      }],
      });


    res.render("index", { questions, categories });
  })
);


module.exports = router;
