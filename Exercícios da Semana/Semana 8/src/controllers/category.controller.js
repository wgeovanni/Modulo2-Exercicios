const { Category } = require("../models/category");

class CategoryController {

    async createCategory(req, res) {

        try {
            const { name } = req.body;

            const data = await Category.create({
                name
            })
            return res.status(201).send(data)
        } catch (error) {
            return res.status(400).send({ msg: "Não foi possível cadastrar a categoria", cause: error.message })
        }
    }

    async listCategory(req, res) {

        try {
            const data = await Category.findAll();

            return res.status(200).send(data)
        } catch (error) {
            return res.status(400).send({ msg: "Não foi possível acessar o banco de dados", cause: error.message });
        }
    }
}

module.exports = new CategoryController();