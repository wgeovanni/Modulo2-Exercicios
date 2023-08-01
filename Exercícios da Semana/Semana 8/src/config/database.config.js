const { config } = require('dotenv');
config();

module.exports = {
    dialect: process.env.DIALECT,       //Banco de dados utilizado
    host: process.env.HOST,             //Qual servidor está sendo usado
    username: process.env.USERNAMEDB,   //Nome do usuário no Postgres
    password: process.env.PASSWORDDB,   //Senha do usuário no Postgres
    database: process.env.DATABASE,     //Nome do banco de dados no Postgres
    port: process.env.PORT,              //Porta do Postgres
    define: { //Serve para colocarmos configurações de conexão auxiliares

        underscored: true,              //Traduz os campos para snake_case
        underscoredAll: true,           //Traduz TODOS os campos para snake_case
        paranoid: true
    }
};