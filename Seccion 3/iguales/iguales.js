let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));


if (num1 == num2 && num1 == num3) {
  console.log("Los tres números son iguales");
} else {
  let mayor = num1;

  if (num2 > mayor) {
    mayor = num2;
  }

  if (num3 > mayor) {
    mayor = num3;
  }

  console.log("El número mayor es:" , mayor);
}