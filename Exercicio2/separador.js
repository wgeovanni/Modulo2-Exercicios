const separador = (array, option) => {

    // const arrayPar = [];
    // const arrayImpar = [];

    // for (num in array) {

    //     if (array[num] % 2 == 0) {
    //         arrayPar.push(array[num]);
    //     } else {
    //         arrayImpar.push(array[num]);
    //     }
    // }

    const arrayPar = array.filter(num => num % 2 == 0);
    const arrayImpar = array.filter(num => num % 2 != 0);

    switch (option) {
        case option = 1:

            return arrayImpar;

        case option = 2:

            return arrayPar;

        case option = 3:

            return objeto = { arrayPar, arrayImpar }

        // default:

        //     return objeto = { arrayPar, arrayImpar };
    }
}

module.exports = separador;