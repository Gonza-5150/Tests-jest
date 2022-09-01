let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;

};

const fromDollarToYen = function(value){
    // convertimos el valor a dolares
    let valueInYen = (value)*106.58;
    // retornamos el valor
    return valueInYen;
};

const fromYenToPound = function(value){
    // convertimos el valor a dolares
    let valueInPound = (value)*0.00625;
    // retornamos el valor
    return Number(valueInPound.toFixed(5));
};

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))




// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };