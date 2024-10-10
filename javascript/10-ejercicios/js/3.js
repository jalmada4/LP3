/*Ejercicio*/
/*Mostrar todos los numeros entre dos numeros ingresados por el usuario
*/ 

'use strict'
var nr1 = parseInt(prompt('Ingrese el numero desde: '));
var nr2 = parseInt(prompt('Ingrese el numero hasta: '));

document.write("<h1>De" + nr1 + 'a' + nr2 + " éstos son los números</h1>")
for (var i = nr1; i<= nr2; i++){
    document.write('<h3>' + i + '</h3>', '<br>');
}
