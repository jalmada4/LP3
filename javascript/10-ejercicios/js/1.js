/*Ejercicio*/
/*Programa que pida al usuario ingresar un valor y un mensaje
que diga cual es mayor o si son iguales
*/ 

var nr1 = parseInt(prompt('Ingrese el valor 1', 0));
var nr2 = parseInt(prompt('Ingrese el valor 2', 0));

while ( nr1 <= 0 || nr2<= 0 || isNaN(nr1) || isNaN(nr2)) {
     nr1 = parseInt(prompt('Vuelva a ingresar el valor 1', 0));
     nr2 = parseInt(prompt('Vuelva a ingresar el valor 2', 0));
    
}

if(nr1>nr2){
    alert("El numero 1 es mayor");
}else if(nr1<nr2){
    alert("El numero 2 es mayor");
}else if(nr1 == nr2){
    alert("Los numeros son iguales");
}else{
    alert("Ingrese algún valor");
}