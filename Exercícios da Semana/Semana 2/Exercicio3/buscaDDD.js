const buscaDDD = (ddd) => {

    if (ddd >= 11 && ddd <= 19) {
        console.log("São Paulo");
    } else if (ddd >= 21 && ddd <= 22 || ddd == 24) {
        console.log("Rio de Janeiro");
    } else if (ddd == 27 || ddd == 28) {
        console.log("Espírito Santo");
    } else if (ddd >= 31 && ddd <= 35 || ddd == 37 || ddd == 38) {
        console.log("Minas Gerais");
    } else if (ddd >= 41 && ddd <= 46) {
        console.log("Paraná");
    } else if (ddd >= 47 && ddd <= 49) {
        console.log("Santa Catarina");
    } else if (ddd == 51 || ddd >= 53 && ddd <= 55) {
        console.log("Rio Grande do Sul");
    } else if (ddd == 61) {
        console.log("Distrito Federal");
    } else if (ddd == 62 || ddd == 64) {
        console.log("Goiás");
    } else if (ddd == 63) {
        console.log("Tocantins");
    } else if (ddd == 65 || ddd == 66) {
        console.log("Mato Grosso");
    } else if (ddd == 67) {
        console.log("Mato Grosso do Sul");
    } else if (ddd == 68) {
        console.log("Acre");
    } else if (ddd == 69) {
        console.log("Rondônia");
    } else if (ddd == 71 || ddd == 75 || ddd >= 73 && ddd <= 75) {
        console.log("Bahia");
    } else if (ddd == 79) {
        console.log("Sergipe");
    } else if (ddd == 81 || ddd == 87) {
        console.log("Pernambuco");
    } else if (ddd == 82) {
        console.log("Alagoas");
    } else if (ddd == 83) {
        console.log("Paraíba");
    } else if (ddd == 84) {
        console.log("Rio Grande do Norte");
    } else if (ddd == 85 || ddd == 88) {
        console.log("Ceará");
    } else if (ddd == 86 || ddd == 89) {
        console.log("Piauí");
    } else if (ddd == 91 || ddd == 93 || ddd == 94) {
        console.log("Pará");
    } else if (ddd == 92 || ddd == 97) {
        console.log("Amazonas");
    } else if (ddd == 95) {
        console.log("Roraima");
    } else if (ddd == 96) {
        console.log("Amapá");
    } else if (ddd == 97 || ddd == 98) {
        console.log("Maranhão");
    } else {
        console.log("Digite um número de ddd válido!")
    }
}

module.exports = buscaDDD;