// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: this.querySelector('input[type="text"]').value,
            email: this.querySelector('input[type="email"]').value,
            message: this.querySelector('textarea').value
        };
        
        // Here you would typically send the form data to a server
        // For now, we'll just log it and show a success message
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        this.reset();
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'var(--white)';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// Hero Background Image Slider
function initHeroSlider() {
    const heroBackgrounds = document.querySelectorAll('.hero-bg');
    if (heroBackgrounds.length > 0) {
        let currentBg = 0;
        
        // Set the first background as active
        heroBackgrounds[0].classList.add('active');
        
        // Function to change background
        function changeHeroBg() {
            // Remove active class from current background
            heroBackgrounds[currentBg].classList.remove('active');
            
            // Move to next background or back to first
            currentBg = (currentBg + 1) % heroBackgrounds.length;
            
            // Add active class to new background
            heroBackgrounds[currentBg].classList.add('active');
        }
        
        // Change background every 7 seconds
        setInterval(changeHeroBg, 7000);
    }
}

// Slideshow functionality 
let slideIndex = 1;

function initSlideshow() {
    showSlides(slideIndex);
    
    // Auto advance slides every 5 seconds
    setInterval(function() {
        changeSlide(1);
    }, 5000);
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (!slides.length) return;
    
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initHeroSlider();
    initSlideshow();
}); 