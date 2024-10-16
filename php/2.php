<h1>Condicionales en php</h1>
<h2>Condicional if</h2>
<?php
/*
if(condicion){
    bloque de instrucciones
}else{
        bloque de instrucciones

}
*/
$hora = date("h");
if($hora < "19"){
    echo "Que tengas un buen dia";
}
?>
<hr>
<h2>Condicional if else</h2>
<?php
if($hora > "19"){
    echo "Que tengas un buen dia";
}else{
    echo "Que tengas buenas noches";
}

?>

<hr>
<h2>Condicional else if </h2>
<?php
if($hora > "10"){
    echo "Que tengas un buen dia";
}elseif($hora < "20"){
    echo "Que tengas buena tarde";
}
else{
    echo "Que tengas buenas noches";
}

?>
<hr>
<h1>SWITCH</h1>
<?php
$color = "";
switch($color){
    case "rojo":
        echo " -mi color fav es rojo";
    break;
    case "azul":
        echo " -mi color fav es azul";
    break;
    case "verde":
        echo " -mi color fav es verde"; 
    break;
    default:
    echo "Mi color fav no se encuentra aquí";
}
?>