<h1>Funciones</h1>
<?php
/*
function NombreDelaFuncion(parametros){
    instrucciones de códigos;
}
*/

function HolaMundo(){
    echo "Hola mundo desde una función";
    return;
}
HolaMundo();//llamar a la función

echo"<h1>Funciones pasandole argumentos</h1>";
function NombreFamiliar($nombre){
    echo "El nombre del familiar es : <strong>$nombre</strong><br>";
}
//utilizar o llamar a la función
NombreFamiliar("Juan");
NombreFamiliar("Maria");
NombreFamiliar("Liliana");

echo"<h1>Funciones pasandole 2 argumentos</h1>";
function NombreAño($nombre, $año){
    echo "$nombre su año de Nacimiento es : $año <br>";
}
NombreAño("Sonia", "1994");
NombreAño("Raquel", "1998");
NombreAño("Julio", "1988");


echo"<h1>Función de suma de valores</h1>";
function SumaNumeros(int $nr1, int $nr2){
    return $nr1+$nr2;
}
echo "La suma es : ".SumaNumeros(10,5);
?>