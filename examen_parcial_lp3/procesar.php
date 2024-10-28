<?php
/* procesar.php */
$vhost = 'localhost';
$vuser = 'root';
$vpass = '';
$vbd = 'contactos';

$conexion = mysqli_connect($vhost, $vuser, $vpass, $vbd);
if (!$conexion) {
    die("La conexión a la base de datos no se pudo establecer: " . mysqli_connect_error());
}

// Recibir datos del formulario
$nombre = mysqli_real_escape_string($conexion, $_POST['nombre']);
$mensaje = mysqli_real_escape_string($conexion, $_POST['mensaje']);

// Insertar en la base de datos
$sql = "INSERT INTO contactos (nombre, mensaje) VALUES ('$nombre', '$mensaje')";
if (mysqli_query($conexion, $sql)) {
    echo "Mensaje enviado con éxito.";?>
    <meta http-equiv="refresh"content="3;url=http://localhost/LP3/examen_parcial_lp3/gestionar.php">
<?php } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conexion);
}

// Cerrar la conexión
mysqli_close($conexion);
?>
