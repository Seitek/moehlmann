const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const passport = require('passport');
const path = require('path');
var cors = require('cors')

// Add Routes
//const users = require('./routes/api/users');
//const profile = require('./routes/api/profile');
//const items = require('./routes/api/items');
//const posts = require('./routes/api/posts');
//const documents = require('./routes/api/documents');
//const school = require('./routes/api/school');
const nutzer = require('./routes/api/nutzer');
const fahrten = require('./routes/api/fahrten');
const kunden = require('./routes/api/kunden');

const app = express();

app.use(cors())
// Body-parser Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


// DB Config
const db = 'mongodb://127.0.0.1:27017/moehlmann';

// Connect Mongo
mongoose
    .connect(db, {
        useNewUrlParser: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

    mongoose.set('useFindAndModify', false);



app.use('/api/fahrten', fahrten);
app.use('/api/nutzer', nutzer);
app.use('/api/kunden', kunden);


// Server static assets if in production
/*if (process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}*/


const port = process.env.PORT || 5002;
const url = process.env.URL || '127.0.0.1';

app.listen(port, () => console.log(`Server started on ${url}:${port}`));