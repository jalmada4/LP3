/*Array arreglos multidimensionales
Predeterminadas en Js*/ 
'use strict'

var categorias =  ["z", "x", "Accion", "Comedia", "Terror"];
var peliculas = ["Peli acción", "Peli Comedia", "Peli Terror"];

var cine = [categorias, peliculas];
console.log(cine[0][1]);
console.log(cine[1][2]);

//1.1-Operaciones con array
//Añadir  elementos "push"
peliculas.push("Batman");
console.log(peliculas);

//1.2-Quitar elementos "pop" (elimina las ultimas agregadas)
peliculas.pop();
peliculas.pop();
console.log(peliculas);

//1.3-Añadir elementos con prompt
var elemento ="";
do{
    elemento = prompt("Introduce una peli ");
    peliculas.push(elemento);
    
}while(elemento != "parar");

//1.4-Recorre array y mostrar valores en pantalla
peliculas.forEach((pelis)=>{
    document.write("Peliculas: " + pelis + "<br>");
});

//2-Convertir array en texto "join"
var pelistring = peliculas.join();
console.log(typeof pelistring, pelistring);

//Convertir texto a array "split"
var cadena = "text1, text2, text3";
cadena.split();
console.log(cadena.split());

//4-Ordenar el orden alfabético "sort"
categorias.sort();
console.log(categorias);

//5-Invertir orden = orden inverso "reverse"
peliculas.reverse();
console.log(peliculas);
