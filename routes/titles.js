module.exports = (app) => {
    const titles = require('./controllers/controllers');

    // new title
    app.post('/titles', titles.create);

    // get all titles
    app.get('/titles', persons.findAll);

    // get a title with Id
    app.get('/titles/:id', titles.findOne);

    // update a title with id
    app.put('/titles/:id', titles.update);

    // delete a title with id
    app.delete('/titles/:id', titles.delete);
}