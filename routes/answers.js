const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils.js');
const {check, validationResult} = require('express-validator')
const db = require('../db/models');

router.delete('/answers/:id(\\d+)', async (req,res) => {
    const answerId = req.params.id
    const answer = await db.Answer.findByPk(answerId)
    if (answer){
        await answer.destroy()
        res.json({message: "Success"})
    } else {
        res.json({message: "Failure"})
    }
});


module.exports = router;
