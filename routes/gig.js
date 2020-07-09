const express = require('express');
const router = express.Router();
const Gig = require('../models/Gig');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// get the gigs
router.get('/', (req, res) => {
    Gig.findAll({
            raw: true,
            order: [
                ['createdAt', 'DESC']
            ],
        })
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
    let { term } = req.query
    term = term.toLowerCase()
    Gig.findAll({
            raw: true,
            where: {
                [Op.or]: [{
                        technologies: {
                            [Op.iLike]: `%${term}%`
                        }
                    },
                    {
                        title: {
                            [Op.iLike]: `%${term}%`
                        }
                    },
                    {
                        description: {
                            [Op.iLike]: `%${term}%`
                        }
                    }
                ],
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
    let { title, technologies, budget, description, contact_email, company, category } = req.body

    let errors = []
    if (!title) {
        errors.push({ message: 'Please add a title.', field_name: 'title' })
    }
    if (!technologies) {
        errors.push({ message: 'Please add the technologies.', field_name: 'technologies' })
    }
    if (!description) {
        errors.push({ message: 'Please add a description.', field_name: 'description' })
    }
    if (!contact_email) {
        errors.push({ message: 'Please add a contact email.', field_name: 'contact_email' })
    } else {
        let pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        if (!contact_email.match(pattern)) {
            errors.push({ message: 'Please provide a valid contact email.', field_name: 'contact_email' })
        }
    }
    if (!company) {
        errors.push({ message: 'Please add a company.', field_name: 'company' })
    }
    if (!category) {
        errors.push({ message: 'Please add a category for the job.', field_name: 'category' })
    }

    if (errors.length > 0) {
        res.json({
            errors
        });
    } else {
        if (!budget) {
            budget = 'Unknown'
        }

        technologies = technologies.toLowerCase().replace('/, /g', ',')

        Gig.count({
            where: {
                title: {
                    [Op.iLike]: `%${title}%`
                }
            }
        }).then(count => {
            if (count == 0) {
                Gig.create({
                        title,
                        technologies,
                        budget,
                        description,
                        contact_email,
                        company,
                        category
                    })
                    .then(gig => {
                        res.json({ success: "Your job post was successfully saved." });
                    })
                    .catch(err => console.log(err))
            } else {
                res.json({ error: "That job title already exists." });
            }
        });
    }

});


module.exports = router