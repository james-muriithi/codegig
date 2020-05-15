const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();


// gig route
const gigRoute = require('./routes/gig')
app.use('/gigs', gigRoute);


const PORT = process.env.PORT || 5050
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});