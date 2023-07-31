module.exports = {

    async criarBaseDeDadosDeUsuario(req, res) {
    try {
        const { nomeDoArquivo, dados } = req.body
        criarOuAtualizar(nomeDoArquivo, dados)
    
        return res.status(201).send(
        {
            mensagem: "Criação e/ou atualização de arquivo concluída"
        }
        )
    } catch (error) {
        return res.status(400).send({
        mensagem: "Falha ao criar o arquivo", 
        causa: error.message
        })
    }
    }
}