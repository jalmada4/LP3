/*ARRAY BUSQUEDA */
'use strict'
var lenguajes = ["Javascript", "Java", "PHP", "C++", "Python"];

//find
var buscafind = lenguajes.find(lenguajes => lenguajes == "Java");
console.log(buscafind); 

//findIndex
var buscaIndex = lenguajes.findIndex(lenguajes => lenguajes == "PHP");
console.log(buscaIndex);

//Busquedas de valores numericos con some ( devuelve true o false)
var numeros = [10, 20, 30, 40 , 50, 60, 70, 80, 90, 100, 30];
var buscaposinum = numeros.some(numeros => numeros >=130);
console.log(buscaposinum);

