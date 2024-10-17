<h1>Estructura while</h1>
<?php
/*
while (condicion){
    bloque de instrucciones
    iterador ++;
}
*/
$x =1;
while($x <=5){
    echo "El número es : $x <br>";
    $x++;
}
echo"<h1>Estructura while</h1>";
$variable = 0;
while($variable<=100){
    echo"El número es: $variable <br>";
    $variable+=10;
}

/*do while */
/*do{
    bloque de instrucciones 
    operador de incremento o decremento
}while(condicion);

*/
echo"<h1>Do while</h1>";
$z=1;
do{
    echo"El número es : $z <br>";
    $z++;
}while($z<=5);

echo"<h1>Do while2</h1>";
$z=0;
do{
    echo"El número es : $z <br>";
    $z+=10;
}while($z<=100);
?>