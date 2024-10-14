/*EVENTOS */
/*Son funciones que se ejecutan cada vez que se realiza algo
eje: movimientos del ratón, teclado, borrar, etc
*/

//Corregir llamar en las etiquetas correspondientes al script.js
window.addEventListener('load', () =>{



//1-
var boton2 = document.querySelector("#boton2");

//2-
function cambiarcolor(){
    var bg = boton2.style.background;
    if(bg == "green"){
        boton2.style.background = "red";
    }else{
        boton2.style.background = "green";
    }
}

//3-Evento clic
var boton3 = document.querySelector("#boton3");
boton3.addEventListener('click', function(){
    cambiarcolor();
});

//4-Evento mouse over
boton3.addEventListener('mouseover', function(){
    boton3.style.background = "#521987"
});

//5-EVENTO MOUSE OUT
boton3.addEventListener('mouseout', function(){
    boton3.style.background = "yellow";
});

//6-Evento focus
var input = document.querySelector("#nombre");
input.addEventListener('focus', function() {
    console.log("Estás haciendo focus en éste input");
});


//7-Evento blur
input.addEventListener('blur', function(){
    console.log("Estás fuera del input");
});

//8-Evento keydown (al escribir dentro del input)
input.addEventListener('keydown', function(event){
    console.log("Estás pulsando la tecla : ", String.fromCharCode(event.keyCode));
});

//9-Evento keypress
input.addEventListener('keypress', function(event){
    console.log("Tecla presionada con Keypress", String.fromCharCode(event.keyCode));
});

//10-keyup
input.addEventListener('keyup', function(event){
    console.log("La tecla soltada es ", String.fromCharCode(event.keyCode));
});

});//fin del load