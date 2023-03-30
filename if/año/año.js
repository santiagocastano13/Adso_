let año = prompt("Ingrese el año");
if ((año % 4 ==0 && año % 100!= 0) || año % 400 == 0) {
    console.log(año,"Es un año bisiesto");
}
else{
    console.log(año,"No es un año bisiesto");
}