/*ARRAY*/
/*Arreglos predeterminados en Js
*/
'use strict'
//variable normal
var normal = " Andrade Almada";
//Definir un array
var nombres = ["Juan Perez", "JOSE lopez", "jesus Almada",
    "carlos Gonzales", 52, true
];
//otra forma de establecer un array
var lenguajes = new Array("Java", "PHP", "Javascript", "Python", "C++");
console.log(nombres);
console.log(lenguajes);

//Acceder a elementos 
console.log("El lenguaje 2 es: "+lenguajes[2]);

//Imprimir un elemento ingresando el numero de indice
var selleccion = parseInt(prompt("Que lenguaje seleccionarás??",0));
if(selleccion>=lenguajes.length){
    alert("Introduce un número menor, no existe esa posición "+ lenguajes.length);
}else{
    alert(lenguajes[selleccion]);
}

//Recorre un array 
//1- for
document.write("<h1>Imprimir elementos con for</h1>");
document.write("<ul>");
for(var i =0; i<lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>")

//2- foreach recomendada
document.write("<h1>Imprimir elementos con foreach</h1>");
document.write("<ul>");
lenguajes.forEach((elemento, indice, array) => {
    console.log(elemento);
    console.log(indice);
    console.log(array);
    document.write("<li>" + "El índice es: " + indice + " = " + elemento + "</li>");
});
document.write("</lu>");


//3-Recorrer con for in
document.write("<h1>Imprimir elementos con foreach</h1>");
document.write("<ul>");
for(let lenguaje in lenguajes){
    document.write("<li>" + " El lenguaje es: "+ lenguajes[lenguaje] + "</li>");
}
document.write("</lu>");
