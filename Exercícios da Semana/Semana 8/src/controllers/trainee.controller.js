const { Trainee } = require('../models/trainee');

class TraineeController {

    async createTrainee(req, res) {

        try {
            const {
                name,
                email,
                rg,
                cpf,
                primaryPhoneContact,
                secondaryPhoneContact,
                dateBirth,
                fatherName,
                motherName,
                haveSpecialNeeds
            } = req.body;

            const data = await Trainee.create({
                name,
                email,
                rg,
                cpf,
                primaryPhoneContact,
                secondaryPhoneContact,
                dateBirth,
                fatherName,
                motherName,
                haveSpecialNeeds
            })

            return res.status(201).send(data);
        } catch (error) {
            return res.status(400).send({ message: "Não foi possível cadastrar", cause: error.message })
        }
    }

    async listTrainee(req, res) {
        const data = await Trainee.findAll();

        return res.status(200).send(data)
    }

    async listOneTrainee(req, res) {
        try {
            const { id } = req.params;

            const data = await Trainee.findByPk({
                where: {
                    id
                }
            }
            );

            res.status(200).send(data);
        } catch (error) {
            res.status(400).send({ msg: "Não foi possível listar o estagiário", cause: error.message })
        }
    }

    async updateTrainee(req, res) {

        try {

            const { id } = req.params;

            const {
                name,
                email,
                rg,
                cpf,
                primaryPhoneContact,
                secondaryPhoneContact,
                dateBirth,
                fatherName,
                motherName,
                haveSpecialNeeds
            } = req.body;

            const data = Trainee.update({
                name,
                email,
                rg,
                cpf,
                primaryPhoneContact,
                secondaryPhoneContact,
                dateBirth,
                fatherName,
                motherName,
                haveSpecialNeeds
            },
                {
                    where: {
                        id
                    }
                })
        } catch (error) {
            res.status(400).send({ msg: "Não foi possível atualizar os dados do Estagiário", cause: error.message });
        }
    }
}

module.exports = new TraineeController();