const express = require('express');
const router = express.Router();
const db = require('../db/db');
const Gig = require('../models/Gig');

// get the gigs
router.get('/', (req, res) => {
    Gig.findAll({ raw: true })
        .then(gigs => {
            res.render('gigs', { gigs });
        })
        .catch((err) => {
            console.log(err);
        })
});

router.get('/add', (req, res) => {
    res.render('add');

    // const data = {
    //     title: 'Looking for a react developer',
    //     technologies: 'React, JS, HTML, css',
    //     budget: "$3000",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vero sequi corporis, vitae iste esse a ratione nemo natus accusamus, assumenda impedit blanditiis, eum consequatur hic. Laboriosam voluptas aperiam consectetur.",
    //     contact_email: 'john@doe.com'
    // }

    // let { title, technologies, budget, description, contact_email } = data

    // Gig.create({
    //         title,
    //         technologies,
    //         budget,
    //         description,
    //         contact_email
    //     })
    //     .then(gig => res.redirect('/gigs'))
    //     .catch(err => console.log(err))

});


module.exports = router