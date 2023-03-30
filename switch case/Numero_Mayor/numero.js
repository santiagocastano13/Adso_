let numero1 = parseFloat(prompt("ingrese un numero"));
let numero2 = parseFloat(prompt("ingrese un numero"));
let mayor = numero1>numero2;
let menor = numero1<numero2;
let igual = numero1==numero2;

switch (true) {
    case mayor:
        console.log("el numero", numero1," es mayor al numero", numero2);
        break;
    case menor:
        console.log("el numero", numero1," es menor al numero", numero2);
        break;
    case igual:
        console.log("ambos numeros son iguales");
        break;
    default:
        break;
}