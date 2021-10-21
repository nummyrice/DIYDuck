
const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils.js");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");

//
router.get("/categories", asyncHandler(async (req, res) => {
  const categories = await db.Category.findAll();
  res.json(categories);
}));
router.get("/categories/:categoryId(\\d+)", asyncHandler(async (req, res) => {

    const categoryId = req.params.categoryId;
    const categories = await db.Category.findAll()
    // console.log(req.params)
    const questions = await db.Question.findAll({where: {
      categoryId: categoryId},
      include: ['user']
    });

    res.render("index", { questions, categories });
  })
);


module.exports = router;
