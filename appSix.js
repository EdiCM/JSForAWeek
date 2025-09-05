let flag = true;
let fruitsAndVegs = [];
let lactose = [];
let cereal = [];
let could1;
let could2;

while(flag == true) {
    let choice = prompt(`Quieres agregar/eliminar algo a tus listas? 
        Escribe "1" para agregar, "2" para eliminar y "3" para no.`);
    if(choice == 1) {
        could1 = true;
        let typeList = prompt(`A que lista quieres agregar algo? 
            (1) Frutas y verduras (2) Lacteos (3) cereales: `);
            could1 = addingToList(typeList);
            if(could1 == true) {
                alert("Accion realizada correctamente.")
            } else {
                alert("Accion erronea, hubo errores");
            }
    } else if(choice == 2) {
        could2 = true;
        let typeList = prompt(`A que lista quieres eliminarle algo? 
            (1) Frutas y verduras (2) Lacteos (3) cereales: `);
            let element = printItems();
            could2 = erasingFromList(typeList, element);
            if(could2 == true) {
                alert("Accion realizada correctamente.")
            } else {
                alert("Accion erronea, hubo errores");
            }
    } else if(choice == 3){
        alert("Okay, espera un momento...");
        flag = false;
    } else {
        alert("Esa opcion no era valida");
    }
}

function addingToList(typeList) {
    let flag = true;
    let thing = prompt("Escribe aqui lo que quieres agregar: ");
    if(typeList == 1) {
        fruitsAndVegs.push(thing);
    } else if(typeList == 2) {
        lactose.push(thing);
    } else if(typeList == 3) {
        cereal.push(thing);
    } else {
        alert("Esa opcion no era valida.");
        flag = false;
    }
    return flag;
}

function erasingFromList(typeList, element) {
    let flag = true;
    if(fruitsAndVegs.length == 0 && cereal.length == 0 && lactose.length == 0) {
        alert("No hay nada que eliminar");
        flag = false;
    }
    else if(typeList == 1) {
        fruitsAndVegs.splice(fruitsAndVegs.indexOf(element), 1);
    } else if(typeList == 2) {
        lactose.splice(lactose.indexOf(element), 1);
    } else if(typeList == 3) {
        cereal.splice(cereal.indexOf(element), 1);
    } else {
        alert("Esa opcion no era valida.");
        flag = false;
    }
    return flag;
}

function printItems() {
    let nameOfElement = prompt(`Las cosas que pusiste en tus lista son: 
    Frutas y verduras: ${fruitsAndVegs}.
    Lacteos: ${lactose}.
    y Cereales: ${cereal}. Que quieres eliminar? Escribe el nombre del
    articulo tal cual aqui: `);
    if(!fruitsAndVegs.includes(nameOfElement) && !lactose.includes(nameOfElement) && !cereal.includes(nameOfElement)) {
        alert("Ese elemento no existe!");
        return;
    }
    return nameOfElement;
}