window.addEventListener('load', () => {
    const nombreInput = document.getElementById('nombres');
    const apellidoInput = document.getElementById('apellido');
    const mensajeInput = document.getElementById('mensaje');
    
    // Solo permitir letras en el campo de nombres
    nombreInput.addEventListener('keyup', function() {
        this.value = this.value.replace(/[^a-z && A-Z\s]/g,'');
    });

    // Validar el formulario al enviarlo
    document.querySelector('.formulario').addEventListener('submit', function(event) {
        const nombre = nombreInput.value.trim();
        const mensaje = mensajeInput.value.trim();

        if (nombre === '' || mensaje === '') {
            alert('Por favor, completa todos los campos.');
            event.preventDefault(); // Evita el envío del formulario
        }
    });
});