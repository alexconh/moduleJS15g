// let word = (prompt('Escribe una palabra'))
// let consonants = 0 
// let vowels = 0 
// if (word.length != 0){ 
//     if (isNaN (parseInt(word)) == true) {
//         word = word.toLowerCase ()
//         for (let i = 0; i<word.length; i++){
//             switch (word[i]){
//                 case 'a':
//                 case 'á':
//                 case 'e':
//                 case 'é':
//                 case 'i':
//                 case 'í':
//                 case 'o':
//                 case 'ó':
//                 case 'u':
//                 case 'ú':
//                 case 'ü':
//                     vowels ++
//                 break
//                 case ' ':
//                 break
//                 default:
//                     consonants ++
//             }
//         }
//         console.log (`${word} contiene ${vowels} vocales y ${consonants} consonantes`) 
//     } else {
//         console.error(word + ' no es una palabra válida')
//     }
// } else {
//     console.error('Debes escribir una palabra')
// }

// const word = prompt('Ingresa una palabra o frase con espacios al inicio y al final')
// let result = ''
// let aCount, eCount, spaces = 0
// if (word.length != 0 && isNaN(word) == true) {
//     result = word.trim().toLowerCase()
//     for (let i = 0; i<result.length; i++){
//         result[i] == 'a' || result[i] == 'á' ? aCount++ : 
//             result[i] == 'e' || result [i] == 'é' ? eCount++ : 
//                 result[i] == ' ' ? spaces++ : null  
//         }
//     console.log(`${result} tiene ${aCount} 'a', ${eCount} 'e' y ${spaces} espacios`)
// } else
//     console.error('Debes ingresar una palabra')

// const number = parseInt(prompt('Dame un número entre 1 y 100'))
// let result = 0
// if (isNaN(number) != true && number>0 && number<101){
//     for (let i=1; i<=number;i++){
//         result += i
//     }
//     alert(`La suma es ${result}`)
// } else {
//     console.error ('Dame un número entre 1 y 100')
// }

const word = prompt('Ingresa una palabra o frase')
let reversedWord = ''
let aux = ''
if(isNaN(word) == true && word != ''){
    aux = word.toLowerCase().trim().replace(' ','').replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u')
    for(let i = aux.length - 1; i >= 0; i--){
        reversedWord = reversedWord.concat(aux[i])
    }
    reversedWord === aux ? console.log(`${word.trim()} es un palindromo`) : console.log(`${word.trim()} no es un palindromo`)
} else {
    console.error('Debes ingresar una palabra o frase')
}