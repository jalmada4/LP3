<!DOCTYPE html>
<html>
    <body>
        <?php
            //Ésto es un omentario de línea simple
            /*Ésto es un comentario extendido */
            //Variable
            $variable = 5;
            echo $variable;
            echo "<hr>";//ingresar c+odigo html en php
            $cadena = "Hola mundo dede php";
            print $cadena;
            echo "<hr>";//ingresar c+odigo html en php
            $cadena2 = 'Hola mundo dede php';
            echo "<h1>$cadena2</h1>";
            echo "Ésto es", "String", "Se pueden escribir separados entre  ',' ";
            echo "<hr>";
            $variablebuleana = true;
            var_dump($variablebuleana);//sirve para saber que contiene una variable
            echo "<hr>";
            $variabledecimal = 3.14;
            var_dump($variabledecimal);
        ?>
        <h1>Tipo de datos objetos</h1>
        <?php
        
        class auto {
            
        
                
            function __construct() {
                $this->marca = "KIA";
                $this->modelo = "Picanto";
                $this->motor = "2.0";
            }
        }

        $automovil = new auto();
        echo $automovil->marca. "<br>";
        echo $automovil->modelo. "<br>";
        echo $automovil->motor;

        echo "<h1>Variables null</h1>";
        $x = "Hola mundo";
        $x = null;
        var_dump($x);

        ?>
    </body>
</html>