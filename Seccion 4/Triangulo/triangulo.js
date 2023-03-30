let angulo1 = parseFloat(prompt("ingrese el primer angulo"));
let angulo2 = parseFloat(prompt("ingrese el segundo angulo"));
let angulo3 = parseFloat(prompt("ingrese el tercer angulo"));
let resultado = angulo1+angulo2+angulo3 == 180;

switch (resultado) {
    case true:
        console.log("los tres angulos pertenecen al triangulo");
        break;
    case false:
        console.log("los tres angulos no pertenecen al triangulo");
        break;
    default:
        break;
}