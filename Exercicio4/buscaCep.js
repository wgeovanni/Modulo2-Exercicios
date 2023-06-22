async function buscaCep(cep) {

    //Criação do objeto
    const endereco = {};

    //Retirada de caracteres especiais
    const cepString = cep.replace(/\D/g, '');

    //Variável usada na validação do cep
    const validacao = /^[0-9]{8}$/;

    //Verificação de caracteres e tamanho do cep
    if (cepString.length == 8 && validacao.test(cepString)) {

        //Vai tentar executar este bloco de código
        try {
            await fetch(`http://viacep.com.br/ws/${cepString}/json/`)
                .then((response => response.json()))
                .then(dados => {

                    //Verifica se o CEP informado é inválido ou não existe
                    if (dados.erro == true) {
                        console.log("CEP INVÁLIDO!!")
                    } else {
                        endereco.cidade = dados.localidade;
                        endereco.bairro = dados.bairro;
                        endereco.logradouro = dados.logradouro;
                        console.log(endereco);
                    }
                })

                //Mostra erro referente à informação enviada para o servidor
                .catch(error => console.log("Erro: CEP INVÁLIDO", error));

            //Caso não consiga executa esse
        } catch (error) {
            console.log("Erro: ", error);
        }

        //Se não passar na condição de formato válido
    } else {
        console.log("INFORME CEP EM UM FORMATO VÁLIDO!!");
    }
}

module.exports = buscaCep;