/*Ejercicio*/
/*
Crear una tabla de multiplicar*/

'use strict'
var nro = parseInt(prompt('Ingrese valor'));
document.write('<h1>la tabla de </h1>'+ nro);

for(var i =0; i <=10; i++){
    document.write(i + "x" + nro + "=" + (i*nro)+ "<br>");
}

//tabla de los numeros hasta el 10
for(var c =0; c <=10; c++){
    document.write("La tabla de  "  + c + " es ");
    for(var d=1; d <=10; d++){
        document.write(d+ "x" +c+ "=" + (d*c) + "<br>");
    }
}
