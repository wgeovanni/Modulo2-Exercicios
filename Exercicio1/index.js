const soma = (num, num2) => {
    return Number(num) + Number(num2);
}

const subtrai = (num, num2) => {
    return Number(num) - Number(num2);
}

const multiplica = (num, num2) => {
    return Number(num) * Number(num2);
}

const divide = (num, num2) => {
    return Number(num) / Number(num2);
}

module.exports = { soma, subtrai, multiplica, divide };

//Caso queira transformar as funções em módulos
// const funcSoma = require("./soma.js");
// const funcSubtrai = require("./subtrai.js");
// const funcMultiplica = require("./multi.js");
// const funcDivide = require("./divide.js");

// console.log(funcSoma(8, 2));
// console.log(funcSubtrai(8, 2));
// console.log(funcMultiplica(8, 2));
// console.log(funcDivide(8, 2));