// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dollar) {
    return "JPY " + dollar * 106.58;
}

function fromEuroToDollar(euro) {
    return "USD " + euro * 1.2;
}

function fromYenToPound(yen) {
    return "GBP " + yen * 0.00625;
}
