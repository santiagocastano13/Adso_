let numero = parseFloat(prompt("ingrese un numero entre 1 y 15"));
let primo = (numero%2 || numero%numero)==1;

switch (primo) {
    case true:
        console.log("el numero", numero,"es primo");
        break;

    default:
        console.log("el numero", numero,"no es primo");
        break;
}