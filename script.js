// Gestire l'invio del form di contatto
/* document.getElementById('contactForm').addEventListener('submit', function(event) {
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
}); */

// Transizione Introduzione Pagina Servizi

document.addEventListener('DOMContentLoaded', function () {
    // Seleziona l'elemento con la classe .intro-service-text
    const introText = document.querySelector('.intro-service-text');

    // Controlla se l'elemento esiste
    if (!introText) {
        console.error('Elemento .intro-service-text non trovato!');
        return;
    }

    // Verifica se il browser supporta IntersectionObserver
    if (!('IntersectionObserver' in window)) {
        console.error('IntersectionObserver non supportato nel browser.');
        introText.classList.add('visible'); // Mostra comunque il testo
        return;
    }

    // Configura l'osservatore
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    introText.classList.add('visible'); // Aggiunge la classe
                    observer.unobserve(entry.target); // Interrompe l'osservazione
                }
            });
        },
        { threshold: 0.5 } // La sezione deve essere visibile almeno al 50%
    );

    // Avvia l'osservazione
    observer.observe(introText);
});

document.addEventListener('DOMContentLoaded', function () {
    const oneToOneText = document.querySelector('.one-to-one-text');

    if (!oneToOneText) {
        console.error('Elemento .one-to-one-text non trovato!');
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    oneToOneText.classList.add('visible'); // Aggiunge la classe "visible"
                    observer.unobserve(entry.target); // Interrompe l'osservazione
                }
            });
        },
        { threshold: 0.5 } // Almeno il 50% della sezione deve essere visibile
    );

    observer.observe(oneToOneText);
});




