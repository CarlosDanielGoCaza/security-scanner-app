const { ipcRenderer } = require('electron');

// Botón rojo: regresar
document.getElementById('boton-rojo').addEventListener('click', () => {
    ipcRenderer.send('navigate', 'index'); // Asumiendo que el archivo se llama index.html
});

// Botón verde: validar y enviar
document.getElementById('boton-verde').addEventListener('click', function () {
    const form = document.querySelector('.formulario');
    const campos = form.querySelectorAll('.campo');
    let valido = true;

    // Limpiar mensajes previos
    campos.forEach(campo => {
        const error = campo.querySelector('.error');
        if (error) error.remove();
    });

    // Validaciones
    const nombre = document.getElementById('nombre');
    const apellidoP = document.getElementById('apellidoP');
    const apellidoM = document.getElementById('apellidoM');
    const fechaNacimiento = document.getElementById('fechaNacimiento');
    const correo = document.getElementById('correo');
    const matricula = document.getElementById('matricula');
    const telefono = document.getElementById('telefono');

    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/;
    const soloNumeros = /^\d+$/;
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function mostrarError(input, mensaje) {
        const campo = input.parentElement;
        const error = document.createElement('span');
        error.className = 'error';
        error.style.color = '#f77474';
        error.style.fontSize = '12px';
        error.textContent = mensaje;
        campo.appendChild(error);
        valido = false;
    }

    // Nombre y apellidos
    if (!soloLetras.test(nombre.value)) {
        mostrarError(nombre, 'Ingrese un nombre válido (solo letras, 2-50 caracteres)');
    }
    if (!soloLetras.test(apellidoP.value)) {
        mostrarError(apellidoP, 'Ingrese un apellido válido');
    }
    if (!soloLetras.test(apellidoM.value)) {
        mostrarError(apellidoM, 'Ingrese un apellido válido');
    }

    // Fecha de nacimiento (5 a 100 años)
    const hoy = new Date();
    const fecha = new Date(fechaNacimiento.value);
    const edad = hoy.getFullYear() - fecha.getFullYear();
    if (edad < 5 || edad > 100 || isNaN(edad)) {
        mostrarError(fechaNacimiento, 'Debe tener entre 5 y 100 años');
    }

    // Correo electrónico
    if (!correoValido.test(correo.value)) {
        mostrarError(correo, 'Ingrese un correo válido');
    }

    // Matrícula: 8 dígitos
    if (!/^\d{8}$/.test(matricula.value)) {
        mostrarError(matricula, 'La matrícula debe tener exactamente 8 dígitos numéricos');
    }

    // Teléfono: solo números, 10 a 15 dígitos
    if (!soloNumeros.test(telefono.value) || telefono.value.length < 10 || telefono.value.length > 15) {
        mostrarError(telefono, 'El teléfono debe contener entre 10 y 15 dígitos numéricos');
    }

    if (valido) {
        // Aquí puedes hacer ipcRenderer.send si el envío es local
        alert("Formulario válido. Puedes continuar con el registro.");
        // form.submit(); // O manejarlo con otra lógica según tu app
    }
});
