const { cadastra, login, deleta } = require("./userControl.js");

const usuario1 = {
    nome: "João",
    email: "joão@teste.com",
    senha: "asdjkl"
}

const usuario2 = {
    nome: "Pedro",
    email: "pedro@teste.com",
    senha: "123456"
}

//cadastra(usuario1);
//cadastra(usuario2);

login(usuario1.email, usuario1.senha);

// deleta(usuario2);