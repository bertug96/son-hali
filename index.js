const dbSetup = require('./db-setup');
const express = require('express');
const Person = require('./models/person');
const Title = require('./models/title');
const bodyParser = require('body-parser')

dbSetup();

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({"message": "Welcome to app."})
});
require('./routes/persons')(app)


/*
app.get('/person/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const person = await Person.query().findById(id);
        res.json(person);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

app.get('/title/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const title = await Title.query().findById(id);
        res.json(title);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});
*/

app.listen(8080, () => console.log('Server running on port 8080'));