const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils.js');
const db = require('../db/models');

/* GET home page. */
router.get('/categories',csrfProtection, async (req, res) => {

   const categories =  await db.Category.findAll();

    res.json(categories)

});


module.exports = router;
