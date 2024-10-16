<h1>Funciones con cadena</h1>
<?php
echo strlen("Hola mundo desde php");//cantidad de valores que contiene una cadena
echo "<hr>";
$cadena = " hola mundo ";
echo trim($cadena);//sacar espacios de cadenas de textos
echo "<hr>";
echo str_word_count("Hola mundo desde php");//CONTADOR DE PALABRAS 
echo "<hr>";
$cadena = "hola mundo desde php";
echo strrev($cadena);//sirve para invertir valores
echo "<hr>";
echo strpos("hola mundo desde php", "mundo");
echo "<hr>";
echo str_replace("mundo", "planeta", "hola mundo");
echo "<hr>";
echo (pi());//devuelve el numero pi(3.14)
echo "<hr>";
echo (min(0,150,30,85,-10,-100));//trae el valor minimo de una cadena de numeros
echo "<hr>";
echo (max(0,150,30,85,-10,-100));//trae el valor maximo de una cadena de numeros
echo "<hr>";
echo "<h1>Variables constantes</h1>";
define("nombredeconstante", "bienvenidos al curso de php");//se define primero el nombre y luego el valor
echo nombredeconstante;//se imprime de esta forma con el nombre de la constante
echo "<hr>";
define("autos", ["BMW", "TOYOTA", "NISSAN", "KIA"]);
echo autos[3];

?>
