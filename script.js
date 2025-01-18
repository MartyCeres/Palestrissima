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

/* Transizione Introduzione Pagina Servizi */

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

/* Transizione Sezione Allenamento One to One */
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

/* Small Group - Effetto transizione e scorrimento frecce */
document.addEventListener('DOMContentLoaded', function () {
    const smallGroupContent = document.querySelector('.small-group-content');
    const cards = document.querySelectorAll('.card-sm.transition');
    const slider = document.querySelector('.card-sm-slider');
    const leftArrow = document.querySelector('.arrowsm-left'); // Selettore aggiornato
    const rightArrow = document.querySelector('.arrowsm-right'); // Selettore aggiornato
    const cardWidth = slider.querySelector('.card-sm').offsetWidth + 20; // Larghezza card + gap

    // Funzione per attivare la visibilità
    const activateVisibility = (entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Interrompe l'osservazione
        }
    };

    // Osservatore per la transizione
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(activateVisibility);
        },
        { threshold: 0.5 } // La sezione deve essere visibile almeno al 50%
    );

    // Avvia l'osservazione della sezione e delle card
    if (smallGroupContent) observer.observe(smallGroupContent);
    cards.forEach((card) => observer.observe(card));

    // Scorrimento con le frecce (se esistono)
    if (leftArrow && rightArrow && slider) {
        leftArrow.addEventListener('click', () => {
            slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });
    
        rightArrow.addEventListener('click', () => {
            slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });
    }
});






