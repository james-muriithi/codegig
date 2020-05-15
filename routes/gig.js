const express = require('express');
const router = express.Router();
const db = require('../db/db');
const Gig = require('../models/Gig');

router.get('/', (req, res) => {
    Gig.findAll()
        .then(gigs => console.log(gigs))
        .catch((err) => {
            console.log(err);
        })
    res.sendStatus(200);
});

module.exports = router