let edad = parseFloat(prompt("ingrese edad"));
let mayor = edad >=18;
switch (mayor) {
    case true:
        console.log("Usted es mayor de edad")
        break;

    default:
        console.log("Usted no es mayor de edad")
        break;
}