console.log("Selecciona un sabor de helado:");
console.log("1. chocolate");
console.log("2. vainilla");
console.log("3. fresa");
console.log("4. limon");

let opcion = parseInt(prompt("Ingresa el número de la opción que deseas seleccionar:"));


switch (opcion) {
  case 1:
    console.log("Su eleccion es el helado de chocolate");
    break;
  case 2:
    console.log("Su eleccion es el helado de vainilla");
    break;
  case 3:
    console.log("Su eleccion es el helado de fresa");
    break;
  case 4:
    console.log("Su eleccion es el helado de limon");
    break;
  default:
    console.log("La opción seleccionada no es válida.");
}