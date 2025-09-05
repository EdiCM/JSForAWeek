let flag = true;
let fruitsAndVegs = [];
let lactose = [];
let cereal = [];

while(flag == true) {
    let choice = prompt(`Quieres agregar algo a tus listas? 
        Escribe "1" para si y "2" para no.`);
    if(choice == 1) {
        let typeList = prompt(`A que lista quieres agregar algo? 
            (1) Frutas y verduras (2) Lacteos (3) cereales: `);
            addingToList(typeList);
    } else if(choice == 2){
        alert("Okay, espera un momento...");
        flag = false;
    } else {
        alert("Esa opcion no era valida");
    }
}
alert(`Listo, las cosas que pusiste en tus lista son: 
    Frutas y verduras: ${fruitsAndVegs}.
    Lacteos: ${lactose}.
    y Cereales: ${cereal}.
    Que te vaya bien en tus compras!`);

function addingToList(typeList) {
    let thing = prompt("Escribe aqui lo que quieres agregar: ");
    if(typeList == 1) {
        fruitsAndVegs.push(thing);
    } else if(typeList == 2) {
        lactose.push(thing);
    } else if(typeList == 3) {
        cereal.push(thing);
    } else {
        alert("Esa opcion no era valida.");
    }
}