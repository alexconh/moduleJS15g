// let degrees = parseInt(prompt("Ingresa la temperatura actual en grados celsius"))
// !isNaN(degrees) ? alert("La temperatura en grados farenheit es " + ((degrees*9/5)+32)) : alert("El valor que ingresastegit no es valido")

const value1 = parseInt(prompt("Dame el primer valor numérico"))
const value2 = parseInt(prompt("Dame el segundo valor numérico"))
const value3 = parseInt(prompt("Dame el tercer valor numérico"))

if (!isNaN(value1) && !isNaN(value2) && !isNaN(value3)) {
    value1 != value2 && value1 != value3 ? 
        value1 > value2 ? value1 > value3 ? console.log (value1 + " es el mayor") : console.log (value3 + " es el mayor") : 
                          value2 > value3 ? console.log (value2 + " es el mayor") : console.log (value3 + " es el mayor") :
        console.log ("Los valores deben ser diferentes entre sí")
}