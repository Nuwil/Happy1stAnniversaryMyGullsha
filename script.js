document.getElementById('annivForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim().toLowerCase();
    let age = parseInt(document.getElementById("age").value);
    let annivDate = document.getElementById("annivDate").value.trim().toLowerCase();

    const validDates = [
        "july 10 2023",
        "july 10, 2023",
        "10 july 2023",
        "10th july 2023",
        "july 10th 2023"
    ];

    if ((name === "gullsha" || name === "gully") && age === 15 && validDates.includes(annivDate)) {
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
        
        // Initialize slideshow
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

// Slide animation functionality
// Replace your existing initSlides() function with this:
function initSlides() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Show first slide immediately
    slides[currentSlide].classList.add('active');
    
    // Click handler for advancing slides
    function advanceSlide() {
        // Fade out current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % totalSlides;
        
        // Fade in next slide
        slides[currentSlide].classList.add('active');
        
        // Special animation for last slide
        if (currentSlide === totalSlides - 1) {
            createFinalHearts();
            
            // Redirect after 5 seconds on last slide
            setTimeout(() => {
                window.location.href = "./secondPageFolder/secondPage.html"; // Change to your desired file
            }, 5000);
        }
    }
    
    document.addEventListener('click', advanceSlide);
    
    // Cleanup function
    return function() {
        document.removeEventListener('click', advanceSlide);
    };
}

document.querySelectorAll('.slide span').forEach(span => {
    span.addEventListener('mouseenter', function() {
        this.dataset.original = this.textContent;
        this.textContent = 'Fuck';
    });
    span.addEventListener('mouseleave', function() {
        this.textContent = this.dataset.original;
    });
});

// Update your form submission handler to remove the interval timing:
document.getElementById('annivForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // [Your existing validation code...]

    if (valid) {
        // [Your existing success code...]
        initSlides(); // Initialize the click-based slideshow
    }
});

// Special heart animation for final slide
function createFinalHearts() {
    const container = document.querySelector('.slide.five');
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.fontSize = `${20 + Math.random() * 20}px`;
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.opacity = '0.7';
            heart.style.animation = `floatUp ${2 + Math.random() * 3}s ease-in forwards`;
            container.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 5000);
        }, i * 200);
    }
}

