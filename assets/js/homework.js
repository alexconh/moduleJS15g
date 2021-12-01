// function tables(num=10){
//     for(let i = 1; i < 11; i++){
//         for(let j = 1; j <= num; j++){
//             console.log (`${i} x ${j} = ${i*j}`)
//         }
//     }
// }

// tables ()

function sum(num = 10) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
}

// let number = parseInt(prompt('Dame un number del 1 al 100'))
// if (!isNaN(number) && number > 0 && number < 101) {
//     console.log(`El resultado de la suma de 1 a ${number} es igual a ${sum(number)}`)
// } else {
//     console.error('Debes introducir un valor numerico entre 1 y 100')
// }

// function isPalindrome(wordToCheck) {
//   let palindrome = false;
//   let auxWord = wordToCheck.trim().toLowerCase().replace(/ /g, "");
//   let reversedWord = "";
//   for (let i = auxWord.length - 1; i >= 0; i--) {
//     reversedWord += auxWord[i];
//   }
//   auxWord === reversedWord ? palindrome = true : null;
//   return palindrome;
// }

// const word = prompt("Escribe una palabra o frase");
// isNaN(parseInt(word)) == true
//   ? isPalindrome(word) == true
//     ? console.log(`"${word}" es un palindromo`)
//     : console.log(`"${word}" no es un palindromo`)
//   : console.error("Debes introducir una palabra o frase");

// function sumDigits (num='1234') {
//     let result = 0
//     for (let i = 0; i < num.length; i++){
//         result += parseInt(num[i])
//     }
//     return result
// }

// const number = prompt('Dame un numero')
// !isNaN(parseInt(number)) && number > 0 ? console.log(`La sumatoria de los digitos de ${number} es igual a ${sumDigits(number)}`) :
//     console.error('Debes ingresar un número')

function sumMultiples(num = 'default') {
  let result = 0;
  if (num === 'default') {
    for (let i = 1; i < 101; i++) {
      i % 3 == 0 ? result += i : i % 5 == 0 ? result += i : null
    }
  } else {
    for (let i = 1; i < 101; i++) {
        i % num === 0 ? result += i : null
      }
  }
  return result
}

// console.log(`La suma de los multiplos de 3 y 5 entre 1 y 100 es ${sumMultiples()}`)
