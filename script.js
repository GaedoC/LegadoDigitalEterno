document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Email:', email);
    console.log('Message:', message);

    alert('Gracias por tu mensaje. Te contactaremos pronto.');






});

document.getElementById('scheduleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío tradicional del formulario

    const fecha = document.getElementById('fecha').value;
    const mensaje = document.getElementById('mensaje').value;

    // Aquí puedes añadir la lógica para enviar la información al servidor o manejarla como necesites
    console.log('Fecha de publicación:', fecha);
    console.log('Mensaje:', mensaje);

    // Mostrar confirmación al usuario
    document.getElementById('confirmacion').innerHTML = `Tu mensaje ha sido programado para ser publicado el ${fecha}.`;
});
