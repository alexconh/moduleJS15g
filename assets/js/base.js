// function printName () {
//     let userName = prompt ('Cual es tu nombre?')
//     console.log (`Hola ${userName}!`)
// }

// printName ()

// function reversedWord(wordToReverse){
//     let result = ''
//     for(let i = wordToReverse.length - 1; i >= 0; i--){
//         result += wordToReverse [i]
//     }
//     return result
// }

// let word = prompt('Escribe una palabra').trim().toLowerCase()
// console.log(`La palabra al reves es ${reversedWord(word)}`)

// function tablas(){
//     for(let i = 1; i < 11; i++){
//         for(let j = 1; j < 11; j++){
//             console.log (`${i} x ${j} = ${i*j}`)
//         }
//     }
// }

// tablas ()

// function sum (num){
//     let result = 0
//     for(let i = 1; i <= num; i++){
//         result += i
//     }
//     return result
// }

// let number = parseInt(prompt('Dame un number del 1 al 100'))
// if (!isNaN(number) && number > 0 && number < 101) {
//     console.log(`El resultado de la suma de 1 a ${number} es igual a ${sum(number)}`)
// } else {
//     console.error('Debes introducir un valor numerico entre 1 y 100')
// }

 function isPalindrome(wordToCheck) {
     let auxWord = wordToCheck.trim().toLowerCase()
     let reversedWord = ''
     console.log(auxWord)
     for (let i = auxWord.length - 1; i>=0; i--){
        reversedWord += auxWord[i]
        console.log (reversedWord)
     }
     auxWord === reversedWord ? console.log (`${wordToCheck} es un palindromo`) : console.log (`${wordToCheck} no es un palindromo`)
 }

 const word = prompt('Escribe una palabra o frase')
 isNaN(parseInt(word)) == true ? isPalindrome(word) : console.error ('Debes introducir una palabra o frase')

// function sumMultiples () {
//     let result = 0
//     for (let i=1; i<101;i++){
//         i % 3 == 0 ? result += i : 
//             i % 5 == 0 ? result += i : null
//     }
//     return result
// }

// console.log (`La suma de los multiplos de 3 y 5 entre 1 y 100 es ${sumMultiples()}`)