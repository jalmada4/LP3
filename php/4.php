<h1>Estructura For</h1>
<?php
/*
for(variable iteradora; condicion variable; variable++){
    bloque de instrucciones
}
*/
//for
for($i = 0; $i <=10; $i++){
    echo"El número es : $i <br>";
}

//foreach1
echo"<h1>Foreach para recorrer matrices</h1>";
$colores = array ("rojo", "verde", "azul", "amarillo");
foreach($colores as $valores){
    echo"$valores<br>";
};

//foreach2
echo"<h1>Foreach para recorrer matrices con índice de datos</h1>";
$año = array("Pedro"=>"35","Juan"=>"37","Maria"=>"28");
foreach($año as $nombre => $edad){
    echo"$nombre = $edad <br>";
}

//break
echo"<h1>Break para parar una ejecucion</h1>";
    for($a =0; $a<=10; $a++){
        if($a == 5){
            break;
        }
        echo "El número es: $a <br>";
    }
  
//continue  
echo"<h1>Continue para parar una ejecucion</h1>";
    for($b =0; $b<=10; $b++){
        if($b == 5){
            continue;
        }
        echo "El número es: $b <br>";
    }


?>