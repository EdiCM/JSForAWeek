let flag = true;

while(flag == true) {
    let number1 =  parseInt(prompt(`Ingresaras numeros para tu calculadora, primero
        mete el primer numero con el que realizaras operaciones: `));
    let number2 = parseInt(prompt("Y ahora tu segundo numero: "));
    let choice = prompt(`Y bien, bienvenido, tus opciones son: 
        1.- Sumar
        2.- Restar
        3.- Multiplicar
        4.- Dividir
        5.- Salir
        Escribe la que quieras realizar: `)
    switch(choice) {
        case "1": 
            alert(`El resultado de la suma de ${number1} y ${number2} es: ${number1 + number2}`)
            break;
        case "2":
            alert(`El resultado de la resta de ${number1} y ${number2} es: ${number1 - number2}`)
            break;
        case "3":
            alert(`El resultado de la multiplicacion de ${number1} y ${number2} es: ${number1 * number2}`)
            break;
        case "4":
            alert(`El resultado de la division de ${number1} y ${number2} es: ${number1 / number2}`)
            break;
        case "5":
            flag = false;
            break;
        default:
            alert("Esa opcion no existe");
            break;
    }
}