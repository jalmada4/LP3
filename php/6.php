<h1>Arrays</h1>
<?php
$autos = array("volvo", "Toyota", "kia");
echo "Tengo un auto: ".$autos[0].", ".$autos[1]. " y " . $autos[2]. ".";

echo"<h2>Recorrer Array con foreach y traer el valor del array y el índice</h2>";
foreach($autos as $index => $auto){
    echo "El índice es:".$index. " y la marca es: ".$auto. "<br>";
}

echo "<h1>Bidimensionales</h1>";
$auto=array(
    array("volvo",22,18),
    array("BMW",15,13),
    array("Toyota",15,12),
    array("Nissan",20,13),
);
    echo $auto[0][0]." En stock: ".$auto[0][1]. " El saldo es: ".$auto[0][2]."<br>";
    echo $auto[1][0]." En stock: ".$auto[1][1]. " El saldo es: ".$auto[1][2]."<br>";
    echo $auto[2][0]." En stock: ".$auto[2][1]. " El saldo es: ".$auto[2][2]."<br>";
    echo $auto[3][0]." En stock: ".$auto[3][1]. " El saldo es: ".$auto[3][2]."<br>";

?>