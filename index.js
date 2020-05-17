const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

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

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json())

// static folder
app.use(express.static(path.join(__dirname, 'public')));


// gig route
const gigRoute = require('./routes/gig')
app.use('/gigs', express.static(path.join(__dirname, 'public')), gigRoute);

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