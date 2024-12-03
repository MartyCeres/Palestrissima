// Gestire l'invio del form di contatto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Messaggio inviato con successo!');
        document.getElementById('contactForm').reset();
    } else {
        alert('Per favore, compila tutti i campi!');
    }
});
