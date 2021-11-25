let weather = prompt("Hola! Como está el día en tu ciudad? \n 1. Soleado \n 2. Lluvioso \n 3. Nevado \n 4. Nublado")
const temperature = parseInt(prompt("Cúal es la temperatura aproximada en grados celsius?"))
if (isNaN(parseInt(weather)) != true){
    switch (parseInt(weather)){
        case 1: 
            weather = 'soleado'
        break 
        case 2: 
            weather = 'lluvioso'
        break
        case 3: 
            weather = 'nevado'
        break 
        case 4: 
            weather = 'nublado'
        break 
        default: 
            console.error ('Esta opción no es válida')
    }
} 
weather = weather.toLowerCase()
console.log(`En tu ciudad, el día está ${weather} con una temperatura de ${(temperature*9/5)+32}°F`)
    
