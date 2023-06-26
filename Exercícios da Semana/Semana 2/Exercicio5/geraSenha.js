const geraSenhas = (tamanho) => {

    //Criação de variável para receber senha aleatória
    let password = "";

    //Caracteres usados para geração de senha
    let string = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    //Iteração para escolha de caractere até completar o tamanho
    for (let i = 1; i <= tamanho; i++) {
        var char = Math.floor(Math.random() * string.length);
        password += string.charAt(char);

    }

    console.log(password);
}

module.exports = geraSenhas;