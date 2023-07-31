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

function CriarProduto(novoProduto) {
    try {
        const dados = JSON.parse(fs.readFileSync("dados.json", "utf-8"))

        let produto = JSON.parse(novoProduto)
        let ultimoProduto = dados.produtos[dados.produtos.length - 1]
        produto.id = ultimoProduto.id + 1 || 1

        dados.produtos.push(produto)

        fs.writeFileSync("dados.json", JSON.stringify(dados))
        return "Produto cadastrado com sucesso!"
    } catch (erro) {
        return "Erro ao executar: " + erro.message
    }
}

const server = http.createServer((req, res) => {

    switch (req.method) {
        case "GET":
            res.writeHead(200, { "Content-Type": "application/json; charset: utf-8;" })
            res.end(ListarProdutos())
            break
        case "POST":
            // aqui vai a lógica do POST - exercício 7
            break
    }
})
server.listen(3000);
