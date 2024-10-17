window.addEventListener('load', ()=>{

    $('#nombre').bind('keyup blur', function(){
        var node = $(this);
        node.val(node.val().replace(/[^a-z && A-Z]/g,''));
    });

    $('#apellido').bind('keyup blur', function(){
        var node = $(this);
        node.val(node.val().replace(/[^a-z && A-Z]/g,''));//para que acepte solo letras 
    });

    $('#ci').bind('keyup blur', function(){
        var node = $(this);
        node.val(node.val().replace(/[^0-9]/g,''));//para que acepte solo numeros
    });

    document.getElementById('email').addEventListener('input', function(event){
        campo = event.target;
        valido = document.getElementById('emailok');

        emailreg = /^[-\w.%+]{1,64}@(?:[A-z0-9-]{1,64}\.){1,50}[A-Z]{2,10}$/i;
        if(emailreg.test(campo.value)){
            valido.innerText = "Email válido";
        }else{
            valido.innerText = "Email incorrecto!";
        }
    });

});