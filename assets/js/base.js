function printName () {
    let userName = prompt ('Cual es tu nombre?')
    console.log (`Hola ${userName}!`)
}

printName ()

function reversedWord(wordToReverse){
    let result = ''
    for(let i = wordToReverse.length - 1; i >= 0; i--){
        result += wordToReverse [i]
    }
    return result
}

let word = prompt('Escribe una palabra').trim().toLowerCase()
console.log(`La palabra al reves es ${reversedWord(word)}`)