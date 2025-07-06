// secondPage.js
document.addEventListener('DOMContentLoaded', function () {
    // Home page image slider
    const homeImages = [
        "./secondPageImageFolder/moments1.jpeg",
        "./secondPageImageFolder/moments2.jpeg",
        "./secondPageImageFolder/moments3.jpeg",
        "./secondPageImageFolder/moments4.png",
        "./secondPageImageFolder/moments5.png",
        "./secondPageImageFolder/moments6.png",
        "./secondPageImageFolder/moments7.png",
        "./secondPageImageFolder/moments8.png",
        "./secondPageImageFolder/moments9.jpeg",
        "./secondPageImageFolder/moments0.jpeg"

    ];

    const slideImages = document.getElementById('slideImages');
    homeImages.forEach((url, index) => {
        const img = new Image(); // Better way to create image elements
        img.src = url;
        img.alt = `Memory ${index + 1}`;
        img.onerror = function () {
            console.error("Failed to load image:", url);
            // You could set a placeholder image here if desired
            // this.src = './path/to/placeholder.jpg';
        };
        slideImages.appendChild(img);
    });

    const homeSlides = document.querySelectorAll('#slideImages img');
    let currentHomeSlide = 0;

    function showHomeSlide(index) {
        homeSlides.forEach(slide => slide.classList.remove('show'));
        if (homeSlides.length > 0) {
            currentHomeSlide = index;
            homeSlides[currentHomeSlide].classList.add('show');
        }
    }

    function nextHomeSlide() {
        if (homeSlides.length > 0) {
            let nextIndex = (currentHomeSlide + 1) % homeSlides.length;
            showHomeSlide(nextIndex);
        }
    }

    // Initialize first slide
    showHomeSlide(0);
    const homeInterval = setInterval(nextHomeSlide, 3000);

    // Picture page image containers - USE DIFFERENT IMAGES FOR EACH CONTAINER
    const imageSets = [
        [
            "./secondPageImageFolder/UL1.png",
            "./secondPageImageFolder/UL2.png",
            "./secondPageImageFolder/UL3.png",
            "./secondPageImageFolder/UL4.png",
            "./secondPageImageFolder/UL5.png",
            "./secondPageImageFolder/UL6.png",
            "./secondPageImageFolder/UL7.png",
            "./secondPageImageFolder/UL8.png"

        ],
        [
            "./secondPageImageFolder/UR1.png",
            "./secondPageImageFolder/UR2.png",
            "./secondPageImageFolder/UR3.png",
            "./secondPageImageFolder/UR4.png",
            "./secondPageImageFolder/UR5.png",
            "./secondPageImageFolder/UR6.png",
            "./secondPageImageFolder/UR7.png",
            "./secondPageImageFolder/UR8.png"
        ],
        [
            "./secondPageImageFolder/LL1.png",
            "./secondPageImageFolder/LL2.png",
            "./secondPageImageFolder/LL3.png",
            "./secondPageImageFolder/LL4.png",
            "./secondPageImageFolder/LL5.png",
            "./secondPageImageFolder/LL6.png",
            "./secondPageImageFolder/LL7.png",
            "./secondPageImageFolder/LL8.png"
        ],
        [
            "./secondPageImageFolder/LR1.png",
            "./secondPageImageFolder/LR2.png",
            "./secondPageImageFolder/LR3.png",
            "./secondPageImageFolder/LR4.png",
            "./secondPageImageFolder/LR5.png",
            "./secondPageImageFolder/LR6.png",
            "./secondPageImageFolder/LR7.png",
            "./secondPageImageFolder/LR8.png"
        ]
    ];

    const containers = [
        document.getElementById('container1'),
        document.getElementById('container2'),
        document.getElementById('container3'),
        document.getElementById('container4')
    ];

    // Initialize each container with its images
    containers.forEach((container, index) => {
        // Clear any existing content
        container.innerHTML = '';

        imageSets[index].forEach(url => {
            const img = new Image();
            img.src = url;
            img.onerror = function () {
                console.error("Failed to load container image:", url);
                // this.src = './path/to/placeholder.jpg';
            };
            container.appendChild(img);
        });

        const slides = container.querySelectorAll('img');
        let currentSlide = 0;

        function showSlide() {
            slides.forEach(slide => slide.classList.remove('show'));
            if (slides.length > 0) {
                slides[currentSlide].classList.add('show');
                currentSlide = (currentSlide + 1) % slides.length;
            }
        }

        // Start each container with different intervals
        if (slides.length > 0) {
            showSlide();
            setInterval(showSlide, 2000 + (index * 1000));
        }
    });
});