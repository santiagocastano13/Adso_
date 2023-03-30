let nombre = prompt("ingrese su nombre");
let cedula = prompt("ingrese su numero de cedula");
let estado = prompt("desea editar su informacion o solo visualizar");

switch (estado) {
    case "editar":
        nombre = prompt("ingrese su nombre");
        cedula = prompt("ingrese su numero de cedula");
        console.log("sus datos actualizados son: ", nombre , cedula);
        break;
    case "visualizar":
        console.log("Ok");
        break;
    default:
        console.log("Opcion invalida");
        break;
}