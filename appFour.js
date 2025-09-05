let tries = 1;
let max = 50;
let min = 20;
let number = Math.floor(Math.random() * (max - min + 1) + min); // the one they have to guess

console.log(number);

while(tries <= 3) {

    let guess = prompt("Adivina el numero, escribe uno del 1 al 10: ");
    
    if(guess == number) {
        alert("Felicidades, adivinaste");
        break;
    } else {
        alert(`Fue incorrecto, este es tu intento ${tries}`);
    }
    tries++;
}

if(tries == 4) {
    alert("No lo adivinaste :(");
}