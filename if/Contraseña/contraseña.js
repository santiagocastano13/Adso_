
let contraseña = prompt("ingrese una contraseña que contenga espacio");
let espacio = (contraseña.includes(" "));

if (contraseña.length >= 8 && contraseña.length <= 15 && espacio) {
    console.log("Contraseña valida");
}
else {
    console.log("Contraseña invalida");
}