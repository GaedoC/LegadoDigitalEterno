document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Email:', email);
    console.log('Message:', message);

    alert('Gracias por tu mensaje. Te contactaremos pronto.');
});
