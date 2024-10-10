/*Ejercicio*/
/*Utilizar un bucle y mostrar las medidas y el promedio de  un usuario
hasta que el usuario ingrese algún numero negativo
*/ 

var suma = 0;
contador = 0;

do{
    var numero = parseInt(prompt('Ingrese numero hasta que ingreses numeros negativos', 0));
    if(contador == 3 ){
        alert("Si quiere detener ingrese valor negativo");
    }
    if(isNaN(numero)){
        numero=0;
    }else if(numero>=0){
        suma = suma + numero;
        contador++;
    }
}while(numero>=0){
    alert(' La suma es: '+ suma);
    alert('El promedio es ' + suma / contador);
}
