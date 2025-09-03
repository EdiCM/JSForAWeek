let name = prompt("Hola!, cual es tu nombre? ");
let age = prompt("Okay, y cual es tu edad? ");
let language = prompt("Y por ultimo, cual es el lenguaje de programacion que estas aprendiendo? ");

alert(`Eres ${name}, tienes ${age} años, y estas aprendiendo ${language}, 
       FELICIDADES!`);

let ans = parseInt(prompt(`Me puedes decir decir si te gusta estudiar ${language}?
    Escribe 1 para si y 2 para no: `));

    if(ans === 1) {
    console.log("Sigue practicando! Tendras mucho exito.");
} else if(ans === 2) {
    console.log("Oh, que pena... intentaste aprender otros lenguajes?");
} else {
    console.log("Lo siento, esa fue una respuesta no valida.");
}

