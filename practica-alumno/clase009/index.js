// numeros, cadenas de texto, booleanos
// Number, String, Boolean

var numero = 1234567890;
console.log(numero.toString().split("").reverse().join(""))

var cadena = "jorge gomez"
console.log(cadena.split("").reverse().join(""))

// Operadores matemáticos
var suma = 4 + 5
console.log(suma)

var resta = 4 - 5
console.log(resta)

var multiplicacion = 4 * 5
console.log(multiplicacion)

var division = 4 / 5
console.log(division)

// Operadores de comparación
var mayor = 4 > 5
console.log(mayor)

var menor = 4 < 5
console.log(menor)

var mayorOIual = 4 <= 5
console.log(mayorOIual)

var menorOIual = 4 >= 5
console.log(menorOIual)

console.log(1 == "1")
console.log(1 === "1")
console.log(1 != "1")
console.log(1 !== "1")

var nan = "hola" * 3.7
console.log(nan) 

var nul = null
console.log(nul)

var indefinida;
console.log(indefinida)

function suma2() {
    return 4 + 5
}
console.log(suma2())

function suma3(a, b) {
    return a + b
}
console.log(suma3(4, 9))

function funcionDeclarada() {
    console.log("hola mundo")
}
funcionDeclarada()

function funcionDeclarada2() {
    return "mundo hola"
}
console.log(funcionDeclarada2())

var funcionExpresada = function () {
    console.log("adios mundo")
}
funcionExpresada()
