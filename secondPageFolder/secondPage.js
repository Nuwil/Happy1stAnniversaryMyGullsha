        document.addEventListener('DOMContentLoaded', function () {
            // Navbar scroll effect
            const navbar = document.querySelector('.navbar');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });

            // Preload images function
            function preloadImages(urls) {
                urls.forEach(url => {
                    const img = new Image();
                    img.src = url;
                });
            }

            // Main slider images
            const mainSliderImages = [
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

            // Initialize main slider
            const mainSlider = document.getElementById('mainSlider');
            let currentMainSlide = 0;
            
            // Create image elements and preload
            mainSliderImages.forEach((url, index) => {
                const img = document.createElement('img');
                img.src = url;
                img.alt = `Our memory ${index + 1}`;
                img.classList.add('slider-image');
                img.onerror = () => img.src = 'https://via.placeholder.com/600x400?text=Memory+Not+Found';
                mainSlider.appendChild(img);
            });

            const allMainSlides = document.querySelectorAll('.slider-image');
            
            function showMainSlide(index) {
                allMainSlides.forEach(slide => slide.classList.remove('show'));
                if (allMainSlides.length > 0) {
                    currentMainSlide = index % allMainSlides.length;
                    allMainSlides[currentMainSlide].classList.add('show');
                }
            }

            // Initialize first slide
            showMainSlide(0);
            
            // Start slideshow
            const mainInterval = setInterval(() => {
                showMainSlide(currentMainSlide + 1);
            }, 3000);

            // Grid items images - now only 4 sets for 4 grid items
            const gridImages = [
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

            // Initialize grid sliders - now only 4 items
            const gridItems = [
                document.getElementById('gridItem1'),
                document.getElementById('gridItem2'),
                document.getElementById('gridItem3'),
                document.getElementById('gridItem4')
            ];

            gridItems.forEach((item, index) => {
                // Clear any existing content
                item.innerHTML = '';

                // Create and append images
                gridImages[index].forEach(url => {
                    const img = document.createElement('img');
                    img.src = url;
                    img.classList.add('grid-image');
                    img.onerror = () => img.src = 'https://via.placeholder.com/300?text=Photo+Not+Found';
                    item.appendChild(img);
                });

                const slides = item.querySelectorAll('.grid-image');
                let currentSlide = 0;

                function showSlide() {
                    slides.forEach(slide => slide.classList.remove('show'));
                    if (slides.length > 0) {
                        currentSlide = (currentSlide + 1) % slides.length;
                        slides[currentSlide].classList.add('show');
                    }
                }

                // Start each grid item with different intervals
                if (slides.length > 0) {
                    showSlide();
                    setInterval(showSlide, 2000 + (index * 800));
                }
            });

            // Preload all images for better performance
            const allImages = [...mainSliderImages, ...gridImages.flat()];
            preloadImages(allImages);
        });