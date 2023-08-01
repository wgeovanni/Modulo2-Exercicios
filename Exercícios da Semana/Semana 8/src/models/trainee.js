const { connection } = require('../database/connection')
const { STRING, DATE, BOOLEAN } = require('sequelize');

const Trainee = connection.define('trainee', {

    name: STRING,
    email: {
        type: STRING,
        validate: {
            isEmail: {
                msg: "Campo enviado deve ser um e-mail"
            }
        }
    },
    rg: {
        type: STRING,
        validate: {
            len: {
                msg: "O RG deve ter no minimo 10 digitos.",
                args: [7, 20]
            }
        },
        unique: {
            msg: "Este campo já está na aplicação."
        }
    },
    cpf: {
        type: STRING,
        validate: {
            len: {
                msg: "O CPF deve ter 11 digitos.",
                args: [11, 11]
            }
        },
        unique: {
            msg: "Este campo já está na aplicação."
        }
    },
    primaryPhoneContact: STRING,
    secondaryPhoneContact: {
        type: STRING,
        allowNull: true
    },
    dateBirth: DATE,
    fatherName: STRING,
    motherName: STRING,
    haveSpecialNeeds: BOOLEAN,
    createdAt: DATE,
    updatedAt: DATE
},
    { underscored: true, paranoid: true });

module.exports = {
    Trainee
};