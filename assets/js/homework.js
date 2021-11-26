// for solution

// const word = prompt('Ingresa una palabra o frase')
// let reversedWord = ''
// let aux = ''
// if(isNaN(word) == true && word != ''){
//     aux = word.toLowerCase().trim().replace(' ','').replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u')
//     for(let i = aux.length - 1; i >= 0; i--){
//         reversedWord = reversedWord.concat(aux[i])
//     }
//     reversedWord === aux ? console.log(`${word.trim()} es un palindromo`) : console.log(`${word.trim()} no es un palindromo`)
// } else {
//     console.error('Debes ingresar una palabra o frase')
// }

// while solution 

// const word = prompt('Ingresa una palabra o frase')
// let reversedWord = ''
// let aux = ''
// if(isNaN(word) == true && word != ''){
//     aux = word.toLowerCase().trim().replace(' ','').replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u')
//     let i = aux.length - 1
//     while(i >= 0){
//         reversedWord = reversedWord.concat(aux[i])
//         i --
//     }
//     reversedWord === aux ? console.log(`${word.trim()} es un palindromo`) : console.log(`${word.trim()} no es un palindromo`)
// } else {
//     console.error('Debes ingresar una palabra o frase')
// }

// multiples of 3 and 5
let suma = 0
for(let i = 1; i<101; i++){
    i % 3 == 0 ? suma += i : i % 5 == 0 ? suma += i : null 
}
console.log(`La suma de los múltiplos de 3 y 5 contenidos entre el 1 y el 100 es igual a ${suma}`)
