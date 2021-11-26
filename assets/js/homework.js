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
    case 'miércoles': 
        console.log(day +" es el dia 4")
    break;
    case 'jueves': 
        console.log(day +" es el dia 5")
    break;
    case 'viernes': 
        console.log(day +" es el dia 6")    
    break;
    case 'sabado':
    case 'sábado': 
        console.log(day +" es el dia 7")
    break;
    default: 
        console.error(day +" no es un dia valido")
    break;
}