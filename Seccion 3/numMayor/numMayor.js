let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

if (num1 == num2) {
  console.log("Los números son iguales");
} else {
  if (num1 > num2) {
    console.log("El número mayor es:", num1);
  } else {
    console.log("El número mayor es:", num2);
  }
}