/*Ejercicio*/
/*Moastrar los números que son pares e impares entre dos valores ingresados
*/ 

'use strict'
var nr1 = parseInt(prompt('Ingrese el primer valor: '));
var nr2 = parseInt(prompt('Ingrese el segundo valor: '));

while (nr1 < nr2) {
    nr1++;
    if(nr1 % 2 !=0){
        document.write(nr1, ' Es impar <br>');
    
    } else if ( nr1 % 2 == 0) {
    document.write(nr1, 'Es par <br>');
    }
}
