/**
 * 
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
const value1 = parseInt(prompt("Ingresa un numero entre 1 y 100"))
value1 % 2 == 0 ? console.log(value1 + " es un numero par") : console.log(value1 + " es un numero impar")
/**
 * 
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */
let day = prompt("Escribe que día es hoy")
day = day.toLowerCase()
switch (day){
    case 'domingo':
        console.log(day + " es el dia 1")
    break;
    case 'lunes': 
        console.log(day +" es el dia 2")
    break;
    case 'martes': 
        console.log(day +" es el dia 3")
    break;
    case 'miercoles': 
        console.log(day +" es el dia 4")
    break;
    case 'jueves': 
        console.log(day +" es el dia 5")
    break;
    case 'viernes': 
        console.log(day +" es el dia 6")    
    break;
    case 'sabado': 
        console.log(day +" es el dia 7")
    break;
    default: 
        console.log(day +" no es un dia valido")
    break;
}
/**
 * 
 * Pedir al usuario 2 numeros 
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */
const value2 = parseInt(prompt("Ingresa un valor numerico"))
const value3 = parseInt(prompt("Ingresa un segundo valor numerico"))
value2 != value3 ? 
    value2 > value3 ? console.log (value2 + " es el mayor y " + value3 + " es el menor") : console.log(value3 + " es el mayor y " + value2 + " es el menor") 
    :
    console.log(value2 + " y " + value3 + " son iguales")