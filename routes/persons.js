module.exports = (app) => {
    const persons = require('./controllers/controllers');

    // new person
    app.post('/persons', persons.create);

    // get all persons
    app.get('/persons', persons.findAll);

    // get a person with Id
    app.get('/persons/:id', persons.findOne);

    // update a person with id
    app.put('/persons/:id', persons.update);

    // delete a person with id
    app.delete('/persons/:id', persons.delete);
}