/*TIPOS DE DATOS*/ 
//NUMERICOS

var nro1 = 50;
var nro2 = 25;
var suma = nro1+nro2;
var resta = nro1-nro2;
var multi = nro1*nro2;
var divi = nro1/nro2;
var porcent = nro1%nro2;
var decimal = 25.5;
var verdadero = true;
var falso = false;

var texto = "El resultado de laoperacion es: ";
document.write(texto, suma, "<br>");
document.write(texto, resta, "<br>");
document.write(texto, multi, "<br>");
document.write(texto, divi, "<br>");
document.write(texto, porcent, "<br>");
document.write(texto, decimal, "<br>");
document.write(texto, verdadero, "<br>", falso, "<br>");

//funciones para convertir datos
document.write("<hr>");
document.write("<h1>Funciones para convertir datos</h1>");

var numerico = '30';
document.write(numerico);
var tipodatostring = typeof(numerico);
document.write(tipodatostring,"<br>");
//convertir string a numero
var numerico_convertido = Number(numerico);
document.write(numerico_convertido);
//ver tipo de datos
var tipodato = typeof(numerico_convertido);
document.write(tipodato,"<br>");

//convertir nro a string
var nroentero = 40;
var convertidostring = String(nroentero);
var tipostring = typeof(convertidostring);
document.write(convertidostring,tipostring,"<br>");

//parsetInt
var nrostring = '100';
var parse = parseInt(nrostring);
document.write(" El numero es: " + parse);
console.log(typeof(parse));