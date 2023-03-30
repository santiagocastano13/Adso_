let EstadoCivil = prompt("ingrese soltero o casado");
let casado = EstadoCivil == "casado";

switch (casado) {
    case true:
        console.log("Nice")
        break;
    case false:
        console.log("nice x2")
        break;
    default:
        break;
}