
const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils.js");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");
// const { Category } = db;

router.get("/categories/:categoryId(\\d+)", asyncHandler(async (req, res) => {
    console.log("hello")
    const categoryId = req.params.categoryId;
    const categories = await db.Category.findAll()
    // console.log(req.params)
    const questions = await db.Question.findAll({where: {categoryId: categoryId}});
    console.log(questions)
    res.render("index", {questions, categories});
  })
);


module.exports = router;
