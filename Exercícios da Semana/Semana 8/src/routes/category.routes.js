const { createCategory, listCategory } = require('../controllers/category.controller');
const { Router } = require('express');

class CategoryRouter {

    routesCategory() {
        const categoryRoutes = Router();
        categoryRoutes.post('/createcategory', createCategory);
        categoryRoutes.get('/listcategories', listCategory);

        return categoryRoutes;
    }
}

module.exports = new CategoryRouter();