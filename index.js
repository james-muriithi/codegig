const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

let STATIC_DIR = 'src';

if (process.env.DATABASE_URL) {
    STATIC_DIR = 'public'
}

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
// register a helper
exphbs.create({}).handlebars.registerHelper('if_equal', function(a, b, opts) {
    if (a == b) {
        return opts.fn(this)
    } else {
        return opts.inverse(this)
    }
})

const https_redirect = function(req, res, next) {
    if (process.env.NODE_ENV === 'production') {
        if (req.headers['x-forwarded-proto'] != 'https') {
            return res.redirect('https://' + req.headers.host + req.url);
        } else {
            return next();
        }
    } else {
        return next();
    }
};

// force https
app.use(https_redirect);

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json())

// static folder
app.use(express.static(path.join(__dirname, STATIC_DIR)));


// gig route
const gigRoute = require('./routes/gig')
app.use('/gigs', express.static(path.join(__dirname, STATIC_DIR)), gigRoute);

// index route
app.get('/', (req, res) => {
    const Gig = require('./models/Gig');

    Gig.findAll({ raw: true, limit: 3 })
        .then(gigs => {
            res.render('index', { gigs });
        })
        .catch((err) => {
            console.log(err);
        })
});



const PORT = process.env.PORT || 5050
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});