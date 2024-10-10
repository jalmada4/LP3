/*Funciones predeterminadas en JS*/
/*
Funciones para transformar textos*/

var numero = 888;
var text1 = "  Bienvenidos al curso de Javascript  ";
var text2 = " TEXTO EN MAYÚSCULAS";

//1- transformar de numero a string 
var nroconvertido = numero.toString();
console.log(nroconvertido);
console.log(typeof(nroconvertido));

//2- Cambiar valores de minúscula a mayúscula
var text1MAYUS = text1.toUpperCase();
console.log(text1MAYUS);

//3-cambiar valores de mayúsculas a minúsculas
var text2minus = text2.toLocaleLowerCase();
console.log(text2minus);

//4-Longitud de un String
var Longitud = "Jesús  Almada";
console.log(Longitud.length);

//5-Concatenar
console.log(text1+text2);

//6-Arraay longitud
var array = ["Hola", "cómo", "estás?", " yo bien"];
console.log(array.length);

//7-Buscar por indice(es el mas utilizado)
var busqueda = text1.indexOf("curso");
console.log(busqueda);

//8-Buscar por indice 2
var busqueda2 = text1.lastIndexOf("de");
console.log(busqueda2);

//9-Buscar por indice 3
var busqueda3 = text1.search("Javascript");
console.log(busqueda3);

//10-busqueda math
var busqueda4 = text1.match("al");
console.log(busqueda4);

//11-Quitar espacios de adelante o de atras
var sustraerespacios  = text1.substring(14, 6);
console.log(sustraerespacios);

//12-Quitar letra
var Quitar = text1.charAt(2);
console.log(Quitar);

//13-Busqueda con Startswith cuando las palabras inician con un valor ésto devuelve true o false
var busqueda5 = text1.startsWith("Bienve");
console.log(busqueda5);

//14-Includes
var busqueda6 = text1.includes("Javascript");
console.log(busqueda6);

//15-Reemplazar una palabra por otra
var reemplazar = text1.replace("Javascript", "JAVA");
console.log(reemplazar);

//16-Borrar una parte y devolver el valor indicado
var borrarparte = text1.slice(12, 20);
console.log(borrarparte);

//17-Split es para convertir texto en array
var textarray = text1.split();
var textarray = text1.split(" ");
console.log(textarray);

//18-Sirve para quitar espacios con trim
var quitarespacios = text1.trim();
console.log(quitarespacios);

//19-Uso de plantillas
var nombre = prompt("Ingrese el nombre");
var apellido = prompt("Ingrese el apellido");
//alt + 96 ``
var plantilla = `
<h1>Hola que tal</h1>
<h3>El nombre es : ${nombre}</h3>
<h3>El apellido es : ${apellido}</h3>
`;

document.write(plantilla);