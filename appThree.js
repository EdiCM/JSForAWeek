let answer1 = prompt("Escribe 1 si quieres desarrollarte en el area Front-End o 2 para el Back-End: ");
let answer2 = 0;
if(answer1 == 1) {
    answer2 = prompt("Escribe 1 si quieres aprender React y 2 para Vue: ");
} else if(answer1 == 2) {
    answer2 = prompt("Escribe 1 si quieres aprender C# y 2 para Java: ");
} else {
    console.log("Respuesta no valida!");
}

let answer3 = prompt(`Quieres seguir desarrollandote como
    o... te gustaria ser FullStack? Presiona 1 para tu eleccion o 2 para FullStack: `);
if(answer3 == 1) {
    console.log("Excelente, mucha suerte en tu camino!");
} else if(answer3 ==2) {
    console.log("Que valiente, suena a un camino muy completo!");
} else {
    console.log("Fue una respuesta no valida!");
}

let techs = [];
let flag = true;

while(flag) {
    techs.push(prompt("Que tecnologias te gustaria aprender o conocer? Escribe una aqui: "));
    let breaker = prompt("Te gustaria agregar otra? Escribe 1 para si y 2 para no: ");
    flag = breaker == 1 ? true : false;
}

console.log(`Tus tecnologias fueron: ${techs}, felicidades! todas suenan a excelentes ideas.`);