/* BOM*/
/* Brouser Objet Model
Manipular el navegador y obtener datos
*/

//1-Tamaño ancho de la ventana del navegador
console.log(window.innerWidth, "Ancho de la página");

//2-Alto del navegador
console.log(window.innerHeight, "Alto del navegador");

//3-Crear una funcion para traer el alto y el ancho del navegador
function traerbom(ancho, largo){
    var ancho = console.log(window.innerWidth, "Ancho de la página con una función");
    var alto = console.log(window.innerHeight, "Alto de la pagina con una función");
}
traerbom();

//4-Traer el tamaño real
console.log(screen.width, " Este es el ancho de la pag");
console.log(screen.height, " Este es el alto de la pag");

//5-Traer un url
console.log(window.location, "Este es el URL donde estás ahora");

//6-Función para redireccionar a otra URL
function redirec(url){
    window.location.href = url;
}
redirec(url);

//7-Abrir otra ventana del navegador
function abrirventana(url){
    window.open(url, "", "width=400, heigth=300");
}
abrirventana(url);

