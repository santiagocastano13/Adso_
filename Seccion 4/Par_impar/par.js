let numero = parseFloat(prompt("ingrese un numero"));
let par = numero%2==0;
switch (par) {
    case true:
        console.log("el numero es par");
        break;

    default:
        console.log("el numero es impar");
        break;
}