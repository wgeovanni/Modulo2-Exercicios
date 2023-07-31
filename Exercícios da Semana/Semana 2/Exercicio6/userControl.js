// Importação do módulo File System
const fs = require("fs");

async function cadastra(usuario) {

    // Verifica se os campos forma enviados
    if (!usuario.nome || !usuario.email || !usuario.senha) {
        return console.log("Os campos nome, email e senha são obrigatórios")
    }

    try {

        // Verifica a existência do arquivo. Se não existir cria um.
        const fileExist = fs.existsSync('./usuarios.json');
        if (!fileExist) {
            await fs.writeFileSync('./usuarios.json', JSON.stringify({ "usuarios": [usuario] }));
            return console.log("Usuário criado com sucesso!");
        }

        // Captura os dados do arquivo e depois busca o usuario através do email
        const dados = JSON.parse(fs.readFileSync('./usuarios.json', "utf-8"));
        const emailEncontrado = dados.usuarios.filter(user => user.email === usuario.email);

        // Verifica se existe um usuário com o email recebido como argumento.
        // Caso não exista adiciona no arquivo.
        // Caso exista apresenta mensagem de erro.
        if (emailEncontrado.length === 0) {
            dados.usuarios.push(usuario);
            fs.writeFileSync("./usuarios.json", JSON.stringify(dados));
        } else {
            return console.log("Email já cadastrado!");
        }
    } catch (error) {
        console.log(`Usuário não pode ser cadastrado. Erro: ${error.message}`);
    }
}

function login(userEmail, userSenha) {

    try {
        const { usuarios } = JSON.parse(fs.readFileSync('./usuarios.json', 'utf-8'));
        const userExist = usuarios.filter(user => user.email === userEmail);

        console.log(usuarios)
        if (userExist.length === 0) {
            return console.log("Email incorreto!")
        }

        console.log(senha)
        if (userSenha === userExist) {
            return console.log("Login efetuado com sucesso!")
        } else {
            return console.log("Senha incorreta!");
        }
    } catch (error) {
        console.log(`Não foi possível efetuar o login! Erro: ${error.message}`);
    }
}

function deleta(email, senha) {
    try {
        const data = fs.readFileSync('./usuarios.json', 'utf-8');
        const userExist = data.map((user) => user.email == email);

        if (userExist.senha == senha) {

            console.log("Login efetuado com sucesso!");
        } else {
            console.log("Email ou senha incorretos!")
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    cadastra,
    login,
    deleta
}