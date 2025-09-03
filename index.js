// ---------------------------------------------------------------------------------------------------------------------
// Mobile Menu Dropdown
// ---------------------------------------------------------------------------------------------------------------------
const mobileMenuButton = document.getElementById("mobile-menu-button");
const menuDropdown = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
    const animationDuration = 400;

    const isHidden = menuDropdown.classList.contains("hidden");

    // Search for: Ternary operators instead of 'if else'
    let timeout = isHidden ? 0 : animationDuration;

    setTimeout(() => {
        menuDropdown.classList.toggle("hidden");
    }, timeout)

    // Search for: Ternary operators
    const animation = isHidden
        ? [ { "opacity": "0%" }, { "opacity": "100%" } ]
        : [ { "opacity": "100%" }, { "opacity": "0%" } ];

    menuDropdown.animate(animation, {
            duration: animationDuration
        }
    );
});

// ---------------------------------------------------------------------------------------------------------------------
// SM Menu Dropdown
// ---------------------------------------------------------------------------------------------------------------------
const menuButton = document.getElementById("menu-brain-surgery");
const mainMenuDropdown = document.getElementById("main-menu-dropdown");

menuButton.addEventListener("click", () => {
    const animationDurationM = 400;

    const isHiddenΜ = mainMenuDropdown.classList.contains("hidden");

    // Search for: Ternary operators instead of 'if else'
    let timeout = isHiddenΜ ? 0 : animationDurationM;

    setTimeout(() => {
        mainMenuDropdown.classList.toggle("hidden");
    }, timeout)

    // Search for: Ternary operators
    const animation = isHiddenΜ
        ? [ { "opacity": "0%" }, { "opacity": "100%" } ]
        : [ { "opacity": "100%" }, { "opacity": "0%" } ];

    mainMenuDropdown.animate(animation, {
            duration: animationDurationM
        }
    );
});

// ---------------------------------------------------------------------------------------------------------------------
// Carousel
// ---------------------------------------------------------------------------------------------------------------------
const slider = document.getElementById("slider-services");
const scrollLeftButton = document.getElementById("prev-service");
const scrollRightButton = document.getElementById("next-service");

function scrollCarousel(direction) {
    const scrollAmount = slider.children[0].offsetWidth + 20;

    slider.scrollTo({
        left: slider.scrollLeft + (scrollAmount * direction),
        behavior: "smooth",
    });
}

scrollLeftButton.addEventListener("click", () => {
	scrollCarousel(-1);
});

scrollRightButton.addEventListener("click", () => {
	scrollCarousel(1);
});


// ---------------------------------------------------------------------------------------------------------------------
// Testimonials Carousel 
// ---------------------------------------------------------------------------------------------------------------------


const sliderTestimonials = document.getElementById("slider-testimonials");
const scrollLeftButtonT = document.getElementById("prev-testimonial");
const scrollRightButtonT = document.getElementById("next-testimonial");

function scrollCarouselΤ(direction) {
   const scrollAmount = slider.children[0].offsetWidth+100;
    sliderTestimonials.scrollTo({
        left: sliderTestimonials.scrollLeft + (scrollAmount * direction),
        behavior: "smooth",
    });
}

scrollLeftButtonT.addEventListener("click", () => {
	scrollCarouselΤ(-1);
});

scrollRightButtonT.addEventListener("click", () => {
	scrollCarouselΤ(1);
});


