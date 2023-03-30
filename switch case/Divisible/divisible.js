let numero = parseFloat(prompt("ingrese un numero"));
let divisible = numero%5==0;
switch (divisible) {
    case true:
        console.log("el numero es divisible entre 5");
        break;

    default:
        console.log("el numero no es divisible entre 5");
        break;
}