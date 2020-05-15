const express = require('express');
const router = express.Router();
const Gig = require('../models/Gig');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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
});

router.get('/search', (req, res) => {
    const { term } = req.query
    term = term.toLowerCase()
    Gig.findAll({
            raw: true,
            where: {
                technologies: {
                    [Op.like]: `%${term}%`
                }
            }
        })
        .then(gigs => {
            res.render('gigs', { gigs });
        })
        .catch(err => {
            console.log(err);
        })
});

router.post('/add', (req, res) => {
    let { title, technologies, budget, description, contact_email } = req.body

    let errors = []
    if (!title) {
        errors.push({ message: 'Please add a title.' })
    }
    if (!technologies) {
        errors.push({ message: 'Please add the technologies.' })
    }
    if (!description) {
        errors.push({ message: 'Please add a description.' })
    }
    if (!contact_email) {
        errors.push({ message: 'Please add a contact email.' })
    }

    if (errors.length > 0) {
        res.render('add', {
            errors,
            title,
            technologies,
            budget,
            description,
            contact_email
        });
    } else {
        if (!budget) {
            budget = 'Unknown'
        } else {
            budget = `$${budget}`
        }

        technologies = technologies.toLowerCase().replace('/, /g', ',')

        Gig.create({
                title,
                technologies,
                budget,
                description,
                contact_email
            })
            .then(gig => res.redirect('/gigs'))
            .catch(err => console.log(err))
    }

});


module.exports = router