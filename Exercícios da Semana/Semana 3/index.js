const http = require("http");
const fs = require("fs");

function ListarProdutos() {
    try {
        const dados = JSON.parse(fs.readFileSync("dados.json", "utf-8"))
        console.log(dados)
        return JSON.stringify(dados.produtos)
    } catch (erro) {
        return "Erro ao executar"
    }
}

const server = http.createServer((req, res) => {

    switch (req.method) {
        case "GET":
            // aqui vai a lógica do GET - exercício 5
            break
        case "POST":
            // aqui vai a lógica do POST - exercício 7
            break
    }
})
server.listen(3000);
