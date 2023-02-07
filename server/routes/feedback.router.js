const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');

//post command to send feedback to database
router.post('/', (req, res) => {
    console.log('in router.post');
    let newFeedback = req.body;
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4)`;
    pool.query(queryText, [newFeedback.feelings, newFeedback.understand, newFeedback.supportLevel, newFeedback.comment])
    .then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error with POST request', error);
        res.sendStatus(500);
    });
});

module.exports = router;