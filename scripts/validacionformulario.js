document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío automático del formulario

    const fullname = document.getElementById('fullname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const message = document.getElementById('message').value.trim();

    let valid = true;
    let errorMessage = '';

    // Validar que fullname no contenga números
    if (fullname === '') {
        valid = false;
        errorMessage += 'El campo "Nombre Completo" no puede estar vacío.\n';
    } else if (/\d/.test(fullname)) { // Verificar si contiene números
        valid = false;
        errorMessage += 'El campo "Nombre Completo" no puede contener números.\n';
    }

    // Validar que lastname no contenga números
    if (lastname === '') {
        valid = false;
        errorMessage += 'El campo "Apellido" no puede estar vacío.\n';
    } else if (/\d/.test(lastname)) { // Verificar si contiene números
        valid = false;
        errorMessage += 'El campo "Apellido" no puede contener números.\n';
    }

    // Validar correo electrónico
    if (email === '') {
        valid = false;
        errorMessage += 'El campo "Correo Electrónico" no puede estar vacío.\n';
    } else if (!/\S+@\S+\.\S+/.test(email)) { // Validar formato de email
        valid = false;
        errorMessage += 'Ingrese un correo electrónico válido.\n';
    }

    // Validar que mobile no contenga letras y no esté vacío
    if (mobile === '') {
        valid = false;
        errorMessage += 'El campo "Número de Teléfono" no puede estar vacío.\n';
    } else if (/[a-zA-Z]/.test(mobile)) { // Verificar si contiene letras
        valid = false;
        errorMessage += 'El campo "Número de Teléfono" no puede contener letras.\n';
    }

    // Validar que el mensaje no esté vacío
    if (message === '') {
        valid = false;
        errorMessage += 'El campo "Mensaje" no puede estar vacío.\n';
    }

    // Mostrar mensaje de éxito o errores
    if (valid) {
        alert('Formulario enviado exitosamente.');
        // Aquí puedes enviar el formulario por AJAX o como necesites
    } else {
        alert(errorMessage);
    }
});