<?php
include 'conexion.php'; // Asegúrate de que esta ruta sea correcta

// Manejo de eliminación
if (isset($_GET['eliminar'])) {
    $id = intval($_GET['eliminar']);
    $sql = "DELETE FROM contactos WHERE id = $id";
    mysqli_query($conexion, $sql);
}

// Manejo de modificación
if (isset($_POST['modificar'])) {
    $id = intval($_POST['id']);
    $nombre = mysqli_real_escape_string($conexion, $_POST['nombre']);
    $mensaje = mysqli_real_escape_string($conexion, $_POST['mensaje']);
    
    $sql = "UPDATE contactos SET nombre='$nombre', mensaje='$mensaje' WHERE id=$id";
    mysqli_query($conexion, $sql);
}

// Recuperar contactos
$sql = "SELECT * FROM contactos";
$result = mysqli_query($conexion, $sql);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestionar Contactos</title>
    <link rel="stylesheet" href="gestionar.css"> <!-- Vinculando el archivo CSS -->
</head>
<body>
    <h1>Lista de Contactos</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Mensaje</th>
            <th>Acciones</th>
        </tr>
        <?php while ($row = mysqli_fetch_assoc($result)): ?>
        <tr>
            <td><?php echo $row['id']; ?></td>
            <td><?php echo htmlspecialchars($row['nombre']); ?></td>
            <td><?php echo htmlspecialchars($row['mensaje']); ?></td>
            <td>
                <a href="#modificar-<?php echo $row['id']; ?>" onclick="document.getElementById('modificar-<?php echo $row['id']; ?>').style.display='block';">Modificar</a>
                <a href="?eliminar=<?php echo $row['id']; ?>" onclick="return confirm('¿Estás seguro de que deseas eliminar este contacto?');">Eliminar</a>
            </td>
        </tr>

        <!-- Formulario de Modificación -->
        <div id="modificar-<?php echo $row['id']; ?>" style="display:none;">
            <form action="" method="post">
                <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
                <label for="nombre">Nombre y Apellido:</label>
                <input type="text" id="nombre" name="nombre" value="<?php echo htmlspecialchars($row['nombre']); ?>" required>
                
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" required><?php echo htmlspecialchars($row['mensaje']); ?></textarea>
                
                <button type="submit" name="modificar">Modificar</button>
                <button type="button" onclick="document.getElementById('modificar-<?php echo $row['id']; ?>').style.display='none';" class="cancelar">Cancelar</button>
            </form>
        </div>

        <?php endwhile; ?>
    </table>
    <a href="contactos.html">Volver al formulario</a>

    <?php mysqli_close($conexion); // Cerrar la conexión ?>

    <footer class="footer">
        <p>&copy; Copyrigth Jesus Almada 2024.Derechos reservados.</p>
        <p>Contactos tel : (0982)873-205</p>
        <p><a href="https://www.instagram.com/jesusandrade4/profilecard/?igsh=a29hN3N4ZmRybmw5"><img src="img/icon ig.jfif" alt="instagram" class="icon"></a></p>
    </footer>

</body>
</html>
