/*Condicionales*/ 
/*if(condicion){
bloque de instrucciones
}else{
bloque de instrucciones

}else if(){

}

switch

*/
var numero = 8;
if(numero>10){
    alert(" El numero es: "+numero);
}else if(numero == 10){
    alert("El numero: "+numero);
}else{
    alert(" El numero seria: "+numero);
}

//switch
var edad = 800;
var imprimir = "";

switch(edad){
    case 18:
        imprimir = " Eres menor de Edad ";
        break;
    case 50:
        imprimir = " Ya eres Adulto ";
        break;
    case 80:
        imprimir = "Eres muy adulto";
        break;
    default:
        imprimir = "Tienes otra edad";
}
    document.write(imprimir);