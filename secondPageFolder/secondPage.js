   // secondPage.js
   document.addEventListener('DOMContentLoaded', function() {
    // Home page image slider
    const homeImages = [
        "./secondPageImageFolder/image1.jpg",
        "./secondPageImageFolder/image2.jpg",
        "./secondPageImageFolder/image3.jpg",
        "./secondPageImageFolder/image4.png"
    ];

    const slideImages = document.getElementById('slideImages');
    homeImages.forEach((url, index) => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = `Memory ${index + 1}`;
        slideImages.appendChild(img);
    });

    const homeSlides = document.querySelectorAll('#slideImages img');
    let currentHomeSlide = 0;

    function showHomeSlide(index) {
        homeSlides.forEach(slide => slide.classList.remove('show'));
        currentHomeSlide = index;
        homeSlides[currentHomeSlide].classList.add('show');
    }

    function nextHomeSlide() {
        let nextIndex = (currentHomeSlide + 1) % homeSlides.length;
        showHomeSlide(nextIndex);
    }

    // Initialize first slide
    showHomeSlide(0);
    setInterval(nextHomeSlide, 3000);

    // Picture page image containers
    const imageSets = [
        [
            "./secondPageImageFolder/image1.jpg",
            "./secondPageImageFolder/image2.jpg",
            "./secondPageImageFolder/image3.jpg"
        ],
        [
            "./secondPageImageFolder/image1.jpg",
            "./secondPageImageFolder/image2.jpg",
            "./secondPageImageFolder/image3.jpg"
        ],
        [
            "./secondPageImageFolder/image1.jpg",
            "./secondPageImageFolder/image2.jpg",
            "./secondPageImageFolder/image3.jpg"
        ],
        [
            "./secondPageImageFolder/image1.jpg",
            "./secondPageImageFolder/image2.jpg",
            "./secondPageImageFolder/image3.jpg"
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
        imageSets[index].forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            container.appendChild(img);
        });

        const slides = container.querySelectorAll('img');
        let currentSlide = 0;

        function showSlide() {
            slides.forEach(slide => slide.classList.remove('show'));
            slides[currentSlide].classList.add('show');
            currentSlide = (currentSlide + 1) % slides.length;
        }

        // Start each container with different intervals
        showSlide();
        setInterval(showSlide, 2000 + (index * 1000)); // 2s, 3s, 4s, 5s intervals
    });
});