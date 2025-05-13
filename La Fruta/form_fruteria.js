const form = document.getElementById('formFruta');

form.onsubmit = function (e) {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const apellido = form.apellido.value.trim();
    const email = form.email.value.trim();
    const confirmar = form.confirmar.value.trim();
    const mensaje = form.mensaje.value.trim();
    const motivo = form.motivo.value;

    const soloLetras = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/;
    const emailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (nombre.length < 2 || !soloLetras.test(nombre)) {
        alert('Nombre invalido');
        return;
    }

    if (apellido.length < 2 || !soloLetras.test(apellido)) {
        alert('Apellido invalido')
        return;
    }

    if (!emailValido.test(email)) {
        alert('Correo electrónico invalido');
        return;
    }

    if (email !== confirmar) {
        alert("Los correos no coinciden");
        return;
    }

    if (!motivo) {
        alert('Selecciona un motivo de contacto');
    }

    if (mensaje.length < 10) {
        alert("El mensaje debe tener al menos 10 caracteres");
        return;
    }

    alert('Formulario enviado');
    form.reset();

};