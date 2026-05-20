alert("Bienvenidos");
console.log ("Hola");


document.querySelector("h3").innerHTML = "Recepcion de Donaciones";
let Direccion = "Calle 123 #45-67";
let telefono ="123456789";
let correo = "correo@ejemplo.com";

document.getElementById("Direccion").innerHTML = Direccion;
document.getElementById("Telefono").innerHTML = telefono;
document.getElementById("Correo").innerHTML = correo;


document.querySelector("#boton").onclick = function(){
    document.body.style.backgroundColor = 'lightblue';
}



