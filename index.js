const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

// static folder
app.use(express.static(path.join(__dirname, 'public')));


// gig route
const gigRoute = require('./routes/gig')
app.use('/gigs', gigRoute);

// index route
app.get('/', (req, res) => {
    res.render('index', { layout: 'landing' });
});


const PORT = process.env.PORT || 5050
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});