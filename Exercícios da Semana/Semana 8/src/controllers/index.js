const { Router } = require('express');
const { routesCategory } = require('./category.routes');
const { routesTrainee } = require('./trainee.routes');

const routes = new Router();

routes.use('/api', [routesCategory(), routesTrainee()]);

module.exports = routes;