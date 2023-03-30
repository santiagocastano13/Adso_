let numero = parseFloat(prompt("ingrese un número"));

if (numero % 3 == 0 && numero % 5 == 0) {
    console.log("el numero", numero," es divisible por 3 y 5");
} else {
    console.log("el numero", numero," no es divisible por 3 y 5");
}