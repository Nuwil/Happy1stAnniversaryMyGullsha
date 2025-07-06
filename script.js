document.getElementById('annivForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim().toLowerCase();
    let age = parseInt(document.getElementById("age").value);
    let annivDate = document.getElementById("annivDate").value.trim().toLowerCase();

    const validNames = [
        "gullsha",
        "gully",
        "gulle",
        "gullsha b. muhsin",
        "gullsha bahzad muhsin",
        "gully b. muhsin",
        "gully bahzad muhsin",
        "most gorgeous woman in whole existence"
    ];

    const validDates = [
        "july 10 2023",
        "july 10, 2023",
        "10 july 2023",
        "10th july 2023",
        "july 10th 2023",
        "july 10",
        "july10",
        "07-10-23",
        "7-10-23",
        "07-10",
        "7-10",
        "07 10 23",
        "7 10 23",
        "07 10",
        "7 10"
    ];

    if (validNames.includes(name) && age === 15 || age === 16 && validDates.includes(annivDate)) {
        // Create button heart explosion
        createHearts();

        // Hide form with transition
        document.querySelector(".form").classList.add("hide-form");

        // Show main content with transition
        const mainContent = document.getElementById("mainContent");
        mainContent.style.display = "flex";
        setTimeout(() => {
            mainContent.classList.add("visible");
        }, 10);

        // Create falling hearts background
        createFallingHearts();

        // Initialize slideshow with navigation buttons
        initSlides();

        // Try to play audio
        const audio = document.getElementById("songPlayer");
        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                audio.controls = true;
            });
        }
    } else {
        alert("Access Denied! Please check your details.");
    }
});

// Heart explosion from submit button
function createHearts() {
    const submitBtn = document.getElementById('submitBtn');
    const btnRect = submitBtn.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    // Create 50 hearts for explosion effect
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';

        // Random angle in radians (full 360 degrees)
        const angle = Math.random() * Math.PI * 2;

        // Random distance (100-300px)
        const distance = 100 + Math.random() * 200;

        // Calculate final position
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        // Set custom properties for animation
        heart.style.setProperty('--tx', `${tx}px`);
        heart.style.setProperty('--ty', `${ty}px`);
        heart.style.left = `${btnCenterX}px`;
        heart.style.top = `${btnCenterY}px`;

        // Random delay for staggered appearance
        heart.style.animationDelay = `${Math.random() * 0.5}s`;

        document.body.appendChild(heart);

        // Remove heart after animation completes
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 2500);
    }
}

// Continuous falling hearts in background
function createFallingHearts() {
    const container = document.createElement('div');
    container.className = 'falling-hearts-container';
    document.body.appendChild(container);

    function addHeart() {
        const heart = document.createElement('div');
        heart.className = 'falling-heart';
        heart.innerHTML = '❤️';

        // Random position
        heart.style.left = `${Math.random() * 100}vw`;

        // Random animation properties
        const duration = 5 + Math.random() * 10;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        heart.style.fontSize = `${15 + Math.random() * 15}px`;

        // Slight horizontal movement
        const xMovement = (Math.random() - 0.5) * 40;
        heart.style.setProperty('--x-movement', `${xMovement}px`);

        container.appendChild(heart);

        // Remove heart after animation completes
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, duration * 1000);
    }

    // Initial hearts
    for (let i = 0; i < 15; i++) {
        setTimeout(addHeart, i * 200);
    }

    // Continuous hearts
    setInterval(addHeart, 300);
}

// Slide navigation with buttons
function initSlides() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const continueBtn = document.getElementById('continueBtn');
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Show first slide
    showSlide(currentSlide);

    // Next button click handler
    nextBtn.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            showSlide(currentSlide);
        }
    });

    // Previous button click handler
    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        }
    });

    // Continue button click handler
    continueBtn.addEventListener('click', () => {
        // Create a heart explosion effect when continuing
        createContinueHearts();

        // Open the next page in a new blank tab after a short delay
        setTimeout(() => {
            window.open("./secondPageFolder/secondPage.html", "_blank");
        }, 1000);
    });

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Show current slide
        slides[index].classList.add('active');

        // Update button visibility
        prevBtn.classList.toggle('hidden', index === 0);
        nextBtn.classList.toggle('hidden', index === totalSlides - 1);
        continueBtn.classList.toggle('hidden', index !== totalSlides - 1);

        // Special animation for last slide
        if (index === totalSlides - 1) {
            createFinalHearts();
        }
    }
}

function createContinueHearts() {
    const continueBtn = document.getElementById('continueBtn');
    const btnRect = continueBtn.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    // Create 30 hearts for explosion effect
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';

        // Random angle in radians (full 360 degrees)
        const angle = Math.random() * Math.PI * 2;

        // Random distance (100-300px)
        const distance = 100 + Math.random() * 200;

        // Calculate final position
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        // Set custom properties for animation
        heart.style.setProperty('--tx', `${tx}px`);
        heart.style.setProperty('--ty', `${ty}px`);
        heart.style.left = `${btnCenterX}px`;
        heart.style.top = `${btnCenterY}px`;
        heart.style.fontSize = `${20 + Math.random() * 15}px`;
        heart.style.color = `hsl(${Math.random() * 60 + 330}, 100%, 70%)`; // Pink-red colors

        // Random delay for staggered appearance
        heart.style.animationDelay = `${Math.random() * 0.3}s`;

        document.body.appendChild(heart);

        // Remove heart after animation completes
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 2000);
    }
}

// Special heart animation for final slide
// Replace the existing createFinalHearts() function with this:
function createFinalHearts() {
    const container = document.querySelector('.slide.five');
    const colors = ['#ff6b6b', '#ff8e8e', '#ffb3b3', '#ffd8d8', '#ffffff'];
    const messages = ['❤️', 'I Love You', 'Forever', 'Always', 'My Love'];

    // Clear any existing animations first
    container.querySelectorAll('.final-heart').forEach(heart => {
        heart.remove();
    });

    // Create 50 hearts with different animations
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'final-heart';

            // Randomly choose between different heart styles
            const heartType = Math.floor(Math.random() * 3);

            if (heartType === 0) {
                // Classic heart with animation
                heart.innerHTML = '❤️';
                heart.style.fontSize = `${20 + Math.random() * 30}px`;
                heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                heart.style.animation = `floatUp ${3 + Math.random() * 4}s ease-in forwards`;
            } else if (heartType === 1) {
                // Pulsing heart message
                heart.textContent = messages[Math.floor(Math.random() * messages.length)];
                heart.style.fontSize = `${16 + Math.random() * 10}px`;
                heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                heart.style.fontWeight = 'bold';
                heart.style.animation = `pulse ${2 + Math.random() * 2}s ease-in-out infinite`;
            } else {
                // Rotating heart
                heart.innerHTML = '❤️';
                heart.style.fontSize = `${25 + Math.random() * 25}px`;
                heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                heart.style.animation = `rotateHeart ${4 + Math.random() * 3}s linear infinite`;
            }

            // Random position
            heart.style.position = 'absolute';
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.opacity = '0';
            heart.style.transform = 'translate(-50%, -50%)';
            heart.style.zIndex = '1000';
            heart.style.pointerEvents = 'none';
            heart.style.userSelect = 'none';

            // Random animation delay
            heart.style.animationDelay = `${Math.random() * 2}s`;

            container.appendChild(heart);

            // Fade in
            setTimeout(() => {
                heart.style.opacity = '0.8';
            }, 100);

            // Remove after animation completes
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 10000);
        }, i * 150); // Staggered appearance
    }

    // Add these new keyframes to your CSS:
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translate(-50%, -50%) scale(0.5);
                opacity: 0;
            }
            20% {
                opacity: 0.8;
            }
            100% {
                transform: translate(-50%, -150%) scale(1.2);
                opacity: 0;
            }
        }
        
        @keyframes pulse {
            0% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 0.6;
            }
            50% {
                transform: translate(-50%, -50%) scale(1.2);
                opacity: 0.9;
            }
            100% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 0.6;
            }
        }
        
        @keyframes rotateHeart {
            0% {
                transform: translate(-50%, -50%) rotate(0deg) scale(1);
                opacity: 0.8;
            }
            50% {
                transform: translate(-50%, -50%) rotate(180deg) scale(1.2);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) rotate(360deg) scale(1);
                opacity: 0.8;
            }
        }
        
        @keyframes heartBeat {
            0% {
                transform: translate(-50%, -50%) scale(1);
            }
            14% {
                transform: translate(-50%, -50%) scale(1.3);
            }
            28% {
                transform: translate(-50%, -50%) scale(1);
            }
            42% {
                transform: translate(-50%, -50%) scale(1.3);
            }
            70% {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    `;
    document.head.appendChild(style);
}

// Text hover effect
document.querySelectorAll('.slide span').forEach(span => {
    span.addEventListener('mouseenter', function () {
        this.dataset.original = this.textContent;
        this.textContent = 'Fuck';
    });
    span.addEventListener('mouseleave', function () {
        this.textContent = this.dataset.original;
    });
});