let producto = prompt("ingrese un producto");

switch (producto) {
    case "crema":
        console.log("Paga IVA");
        break;

    case "vino":
        console.log("Paga IVA");
        break;

    case "arroz":
        console.log("No Paga IVA");
        break;

    case "lenteja":
        console.log("No Paga IVA");
        break;
        
    default:
        console.log("Por favor ingrese un producto valido");
        break;
    
}