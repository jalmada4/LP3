<html>
    <body>
       <?php
         if(isset($_POST['nombre'])&& isset($_POST['email'])){
            $nombre = $_POST['nombre'];
            $email = $_POST['email'];
         }else{
            echo "No se ha ingresado el nombre o el email";
         }
       ?>
       HOLA: <?php echo $nombre; ?><br>
       Tu email es: <?= $email; ?>
    </body>
</html>