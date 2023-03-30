console.log("Seleccione la unidad a la que quiere pasar ese valor:");
console.log("1. kilometros");
console.log("2. metros");


let longitud = parseFloat(prompt("ingrese la longitud"));
let opcion = parseInt(prompt("Ingrese el número de la opción que deseas seleccionar:"));
let unidadDestino;

switch (opcion) {
  case 1:
    unidadDestino = longitud * 0.001;
    console.log("la unidad de destino (kilometros) es: " ,unidadDestino);
    break;
  case 2:
    unidadDestino = longitud * 1000;
    console.log("la unidad de destino (metros) es: " ,unidadDestino);
    break;
    break;
  default:
    console.log("La opción seleccionada no es válida.");
}

