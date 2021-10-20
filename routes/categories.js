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




// router.get('/users/:id(\\d+)', asyncHandler(async (req,res) => {
//     const userId = req.params.id
//     const user = await db.User.findByPk(userId)
//     res.render('profile', { user })
//   }))


//pass back the category id as a parameter art/
//categories/:id

// router.get("/art", asyncHandler(async (req, res, next) => {
//     // console.log("hello!")
//     const questions = await db.Question.findAll({ where : {categoryId : 1 }})


//     // const categoryId = await db.Category.findAll({ where: { name: "Art" } });
//     // // console.log(categoryId[0].id)
//     // console.log('this is for questions', questions)
//     // const questions = await db.User.findAll({
//     // //   where: { categoryId: categoryId },
//     // //   include: ['Category']
//     // });
//     console.log(questions)
//     //res.render("categories", {questions});


// //   })
// }));

// router.get("/art", asyncHandler(async (req, res) => {
//     const searchCategoryIdArray = await db.Category.findAll({ where: { name: "Art" } });
//     const searchCategoryId = searchCategoryIdArray[0].id
//     const questions = await db.Question.findAll({
//       where: { categoryId: searchCategoryId },
//     });
//     res.render("categories");
//   })
// );

// router.get("/furnishing", asyncHandler(async (req, res) => {
//     const categoryId = await db.Category.findAll({ where: { name: "Furnishing" } });
//     // console.log(categoryId[0].id)
//     const questions = await db.Question.findAll({
//       where: { categoryId: categoryId },
//     });
//     res.render("categories");
//   })
// );

// router.get("/cooking", asyncHandler(async (req, res) => {
//     const categoryId = await db.Category.findAll({ where: { name: "Cooking" } });
//     // console.log(categoryId[0].id)
//     const questions = await db.Question.findAll({
//       where: { categoryId: categoryId },
//     });
//     res.render("categories");
//   })
// );

// router.get("/fashion", asyncHandler(async (req, res) => {
//     const categoryId = await db.Category.findAll({ where: { name: "Fashion" } });
//     // console.log(categoryId[0].id)
//     const questions = await db.Question.findAll({
//       where: { categoryId: categoryId },
//     });
//     res.render("categories");
//   })
// );

// router.get("/digital", asyncHandler(async (req, res) => {
//     const categoryId = await db.Category.findAll({ where: { name: "Digital" } });
//     // console.log(categoryId[0].id)
//     const questions = await db.Question.findAll({
//       where: { categoryId: categoryId },
//     });
//     res.render("categories");
//   })
// );

// router.get("/family", asyncHandler(async (req, res) => {
//     const categoryId = await db.Category.findAll({ where: { name: "Family" } });
//     // console.log(categoryId[0].id)
//     const questions = await db.Question.findAll({
//       where: { categoryId: categoryId },
//     });
//     res.render("categories");
//   })
// );

// router.get("/kids", asyncHandler(async (req, res) => {
//     const categoryId = await db.Category.findAll({ where: { name: "Kids" } });
//     // console.log(categoryId[0].id)
//     const questions = await db.Question.findAll({
//       where: { categoryId: categoryId },
//     });
//     res.render("categories");
//   })
// );

// router.get("/pets", asyncHandler(async (req, res) => {
//     const categoryId = await db.Category.findAll({ where: { name: "Pets" } });
//     // console.log(categoryId[0].id)
//     const questions = await db.Question.findAll({
//       where: { categoryId: categoryId },
//     });
//     res.render("categories");
//   })
// );

// router.get("/restoration", asyncHandler(async (req, res) => {
//     const categoryId = await db.Category.findAll({ where: { name: "Restoration" } });
//     // console.log(categoryId[0].id)
//     const questions = await db.Question.findAll({
//       where: { categoryId: categoryId },
//     });
//     res.render("categories");
//   })
// );

// router.get("/seasonal", asyncHandler(async (req, res) => {
//     const categoryId = await db.Category.findAll({ where: { name: "Seasonal" } });
//     // console.log(categoryId[0].id)
//     const questions = await db.Question.findAll({
//       where: { categoryId: categoryId },
//     });
//     res.render("categories");
//   })
// );


module.exports = router;
