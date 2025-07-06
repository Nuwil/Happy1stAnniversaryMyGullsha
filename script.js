 // Form Validation and Submission
        document.getElementById('annivForm').addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim().toLowerCase();
            const age = parseInt(document.getElementById("age").value);
            const annivDate = document.getElementById("annivDate").value.trim().toLowerCase();

            const validNames = [
                "gullsha", "gully", "gulle", 
                "gullsha b. muhsin", "gullsha bahzad muhsin",
                "gully b. muhsin", "gully bahzad muhsin",
                "most gorgeous woman in whole existence"
            ];

            const validDates = [
                "july 10 2023", "july 10, 2023", "10 july 2023", "10th july 2023", "july 10th 2023",
                "july 10", "july10", "07-10-23", "7-10-23", "07-10", "7-10", "07 10 23", "7 10 23", "07 10", "7 10",
                "07/10/23", "7/10/23", "07/10", "7/10"
            ];

            if (validNames.some(validName => name.includes(validName)) && 
                (age === 15 || age === 16) && 
                validDates.some(validDate => annivDate.includes(validDate))) {
                
                // Create button heart explosion
                createHearts(50, document.getElementById('submitBtn'));

                // Hide form with transition
                document.querySelector(".form").classList.add("hide-form");

                // Show main content with transition
                const mainContent = document.getElementById("mainContent");
                mainContent.classList.add("visible");

                // Create falling hearts background
                createFallingHearts();

                // Initialize slideshow with navigation buttons
                initSlides();

                // Try to play audio
                const audio = document.getElementById("songPlayer");
                const playPromise = audio.play().catch(error => {
                    audio.controls = true;
                    console.log("Autoplay prevented, showing controls");
                });

            } else {
                // Shake animation for wrong input
                document.getElementById('annivForm').classList.add('shake');
                setTimeout(() => {
                    document.getElementById('annivForm').classList.remove('shake');
                }, 500);
                alert("Access Denied! Please check your details.");
            }
        });

        // Heart explosion effect
        function createHearts(count, element) {
            const btnRect = element.getBoundingClientRect();
            const btnCenterX = btnRect.left + btnRect.width / 2;
            const btnCenterY = btnRect.top + btnRect.height / 2;

            for (let i = 0; i < count; i++) {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.innerHTML = '❤️';
                
                // Random properties
                const angle = Math.random() * Math.PI * 2;
                const distance = 100 + Math.random() * 200;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                const size = 20 + Math.random() * 20;
                const color = `hsl(${Math.random() * 60 + 330}, 100%, ${60 + Math.random() * 30}%)`;
                
                // Apply styles
                heart.style.setProperty('--tx', `${tx}px`);
                heart.style.setProperty('--ty', `${ty}px`);
                heart.style.left = `${btnCenterX}px`;
                heart.style.top = `${btnCenterY}px`;
                heart.style.fontSize = `${size}px`;
                heart.style.color = color;
                heart.style.animationDelay = `${Math.random() * 0.5}s`;
                heart.style.animationDuration = `${1 + Math.random() * 2}s`;
                
                document.body.appendChild(heart);

                // Remove after animation
                setTimeout(() => heart.remove(), 3000);
            }
        }

        // Continuous falling hearts in background
        function createFallingHearts() {
            const container = document.createElement('div');
            container.className = 'falling-hearts-container';
            document.body.appendChild(container);

            function createHeart() {
                const heart = document.createElement('div');
                heart.className = 'falling-heart';
                heart.innerHTML = ['❤️', '💖', '💗', '💓', '💘'][Math.floor(Math.random() * 5)];
                
                // Random properties
                const size = 15 + Math.random() * 25;
                const duration = 5 + Math.random() * 10;
                const delay = Math.random() * 5;
                const xPos = Math.random() * 100;
                const color = `hsla(${Math.random() * 60 + 330}, 100%, 70%, ${0.5 + Math.random() * 0.5})`;
                
                // Apply styles
                heart.style.left = `${xPos}vw`;
                heart.style.fontSize = `${size}px`;
                heart.style.color = color;
                heart.style.animationDuration = `${duration}s`;
                heart.style.animationDelay = `${delay}s`;
                heart.style.setProperty('--random-x', Math.random() > 0.5 ? 1 : -1);
                
                container.appendChild(heart);
                
                // Remove after animation
                setTimeout(() => heart.remove(), duration * 1000);
            }

            // Initial hearts
            for (let i = 0; i < 20; i++) {
                setTimeout(createHeart, i * 300);
            }
            
            // Continuous hearts
            setInterval(createHeart, 500);
        }

        // Slide navigation with buttons
        function initSlides() {
            const slides = document.querySelectorAll('.slide');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const continueBtn = document.getElementById('continueBtn');
            let currentSlide = 0;
            const totalSlides = slides.length;

            function showSlide(index) {
                // Hide all slides
                slides.forEach(slide => slide.classList.remove('active'));
                
                // Show current slide
                slides[index].classList.add('active');
                
                // Update button visibility
                prevBtn.classList.toggle('hidden', index === 0);
                nextBtn.classList.toggle('hidden', index === totalSlides - 1);
                continueBtn.classList.toggle('hidden', index !== totalSlides - 1);

                // Special effects for last slide
                if (index === totalSlides - 1) {
                    createFinalHearts();
                }
            }

            // Button event listeners
            nextBtn.addEventListener('click', () => {
                if (currentSlide < totalSlides - 1) {
                    currentSlide++;
                    showSlide(currentSlide);
                }
            });

            prevBtn.addEventListener('click', () => {
                if (currentSlide > 0) {
                    currentSlide--;
                    showSlide(currentSlide);
                }
            });

            continueBtn.addEventListener('click', () => {
                createHearts(30, continueBtn);
                setTimeout(() => {
                    window.open("./secondPageFolder/secondPage.html", "_blank");
                }, 1000);
            });

            // Initialize first slide
            showSlide(0);
        }

        // Special heart animation for final slide
        function createFinalHearts() {
            const container = document.querySelector('.slide.five');
            const messages = ['❤️', 'I Love You', 'Forever', 'Always', 'My Love', 'You & Me'];
            const colors = ['#ff6b6b', '#ff8e8e', '#ffb3b3', '#ffd8d8', '#ffffff'];

            // Clear existing hearts
            container.querySelectorAll('.final-heart').forEach(heart => heart.remove());

            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.className = 'final-heart';
                    
                    // Random properties
                    const heartType = Math.floor(Math.random() * 3);
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    const size = 20 + Math.random() * 30;
                    const xPos = Math.random() * 100;
                    const yPos = Math.random() * 100;
                    const duration = 3 + Math.random() * 4;
                    const delay = Math.random() * 2;
                    
                    // Style the heart
                    heart.style.left = `${xPos}%`;
                    heart.style.top = `${yPos}%`;
                    heart.style.color = color;
                    heart.style.fontSize = `${size}px`;
                    heart.style.animationDelay = `${delay}s`;
                    
                    // Different heart types
                    if (heartType === 0) {
                        heart.innerHTML = '❤️';
                        heart.style.animation = `floatUp ${duration}s ease-in forwards`;
                    } else if (heartType === 1) {
                        heart.textContent = messages[Math.floor(Math.random() * messages.length)];
                        heart.style.fontWeight = 'bold';
                        heart.style.animation = `pulse ${duration / 2}s ease-in-out infinite`;
                    } else {
                        heart.innerHTML = '❤️';
                        heart.style.animation = `rotateHeart ${duration}s linear infinite`;
                    }
                    
                    container.appendChild(heart);
                    
                    // Remove after animation
                    setTimeout(() => heart.remove(), duration * 1000);
                }, i * 150);
            }
        }

        // Text hover effect
        document.querySelectorAll('.slide span').forEach(span => {
            const originalText = span.textContent;
            
            span.addEventListener('mouseenter', () => {
                span.dataset.original = originalText;
                span.textContent = 'Fuck';
            });
            
            span.addEventListener('mouseleave', () => {
                span.textContent = span.dataset.original || originalText;
            });
        });

        // Add shake animation to CSS
        const shakeStyle = document.createElement('style');
        shakeStyle.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                20% { transform: translateX(-10px); }
                40% { transform: translateX(10px); }
                60% { transform: translateX(-10px); }
                80% { transform: translateX(10px); }
            }
            .shake {
                animation: shake 0.5s ease-in-out;
            }
        `;
        document.head.appendChild(shakeStyle);