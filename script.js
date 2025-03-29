/* **************************************** Pagina Servizi *************************************************** */ 

/* -------------- Transizione Introduzione Pagina Servizi ------------------------- */

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

/* ------------------------------ Transizione Sezione Allenamento One to One -------------------------- */

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

/* --------------------------- Small Group - Effetto transizione e scorrimento frecce -------------------------- */
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

/* ---------------------------- Percorsi personalizzati Online - effetto transizione --------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {
    const elementsToObserve = document.querySelectorAll('.intro-section h2, .intro-section p, .arrow-down, .subtitle, .main-title, .service-table'); 

    // Osservatore per la transizione
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Aggiunge la classe .visible
                    observer.unobserve(entry.target); // Interrompe l'osservazione dopo la transizione
                }
            });
        },
        { threshold: 0.5 } // L'elemento deve essere almeno al 50% visibile
    );

    // Avvia l'osservazione su tutti gli elementi
    elementsToObserve.forEach((element) => observer.observe(element));
});


/* ------------------------ Fisioterapia, Osteopatia e Nutrizionista - Effetto trasizione e zoom su colonne ------------------------------------------------ */

document.addEventListener('DOMContentLoaded', function () {
    const healthServicesSection = document.querySelector('.health-services-section');
    const columns = document.querySelectorAll('.column'); // Colonne individuali
    const dividers = document.querySelectorAll('.health-divider'); // Linee separatrici

    // Osservatore per la transizione della sezione, delle colonne e dei divider
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Attiva la transizione per la sezione principale
                    if (entry.target === healthServicesSection) {
                        healthServicesSection.classList.add('visible');
                    }

                    // Attiva la transizione per ogni colonna
                    if (entry.target.classList.contains('column')) {
                        entry.target.classList.add('visible');
                    }

                    // Attiva la transizione per i divider
                    if (entry.target.classList.contains('health-divider')) {
                        entry.target.classList.add('visible');
                    }

                    // Interrompe l'osservazione per l'elemento visibile
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 } // Soglia di visibilità al 50%
    );

    // Avvia l'osservazione della sezione, delle colonne e dei divider
    observer.observe(healthServicesSection);
    columns.forEach((column) => observer.observe(column));
    dividers.forEach((divider) => observer.observe(divider));
});

/* ---------------------------- Form recensioni ----------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-review");
    const reviewContainer = document.querySelector(".reviews-container");

    // Carica le recensioni salvate
    loadReviews();

    submitButton.addEventListener("click", function () {
        const name = document.getElementById("review-name").value.trim();
        const text = document.getElementById("review-text").value.trim();
        const rating = document.querySelector('input[name="rating"]:checked');

        if (!name || !text || !rating) {
            alert("Compila tutti i campi e seleziona il numero di stelle!");
            return;
        }

        const ratingValue = parseFloat(rating.value);
        const starsHTML = getStarsHTML(ratingValue);

        const newReview = {
            id: Date.now(), // Identificativo unico
            name: name,
            text: text,
            stars: ratingValue
        };

        // Aggiunge la recensione all'archivio locale
        saveReview(newReview);

        // Aggiunge la recensione alla pagina
        appendReviewToPage(newReview);

        // Reset del form
        document.getElementById("review-name").value = "";
        document.getElementById("review-text").value = "";
        document.querySelectorAll('input[name="rating"]').forEach(radio => radio.checked = false);
    });

    // Funzione per generare le stelle
    function getStarsHTML(ratingValue) {
        let starsHTML = "";
        for (let i = 1; i <= 5; i++) {
            if (ratingValue >= i) {
                starsHTML += '<i class="fa-solid fa-star"></i>'; // Stella piena
            } else if (ratingValue + 0.5 === i) {
                starsHTML += '<i class="fa-regular fa-star-half-stroke"></i>'; // Mezza stella
            } else {
                starsHTML += '<i class="fa-regular fa-star"></i>'; // Stella vuota
            }
        }
        return starsHTML;
    }

    // Funzione per salvare la recensione nel Local Storage
    function saveReview(review) {
        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.push(review);
        localStorage.setItem("reviews", JSON.stringify(reviews));
    }

    // Funzione per caricare le recensioni salvate
    function loadReviews() {
        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.forEach(review => appendReviewToPage(review));
    }

    // Funzione per eliminare la recensione
    function deleteReview(id) {
        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews = reviews.filter(review => review.id !== id);
        localStorage.setItem("reviews", JSON.stringify(reviews));
        document.getElementById(`review-${id}`).remove();
    }

    // Funzione per aggiungere la recensione alla pagina
    function appendReviewToPage(review) {
        const starsHTML = getStarsHTML(review.stars);

        const newReview = document.createElement("div");
        newReview.classList.add("review-box");
        newReview.id = `review-${review.id}`;

        newReview.innerHTML = `
            <div class="review-header">
                <div class="user-icon">
                    <i class="fa-solid fa-user"></i>
                </div>
                <h3>${review.name}</h3>
                <button class="delete-review" onclick="deleteReview(${review.id})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
            <div class="stars">
                ${starsHTML}
            </div>
            <p>${review.text}</p>
        `;

        reviewContainer.prepend(newReview);
    }

    // Rende la funzione deleteReview globale
    window.deleteReview = deleteReview;
});

/* ******************* GALLERIA ****************************************** */

document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".close");

    galleryItems.forEach(img => {
        img.addEventListener("click", function () {
            lightboxImg.src = this.src;
            lightbox.classList.add("active");
        });
    });

    closeBtn.addEventListener("click", function () {
        lightbox.classList.remove("active");
        lightboxImg.src = "";
    });
});



















