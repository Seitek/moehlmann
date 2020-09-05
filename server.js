const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
var cors = require('cors')

// Add Routes
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
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

    mongoose.set('useFindAndModify', false);



app.use('/api/fahrten', fahrten);
app.use('/api/nutzer', nutzer);
app.use('/api/kunden', kunden);


app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})

const port = process.env.PORT || 5002;
const url = process.env.URL || '127.0.0.1';

app.listen(port, () => console.log(`Server started on ${url}:${port}`));