// Portfolio and Lightbox Functionality
let currentLightboxIndex = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCounter = document.getElementById('lightbox-counter');
const totalImages = document.querySelectorAll('.gallery-item').length;

// Add swipe indicator for mobile
const swipeIndicator = document.createElement('div');
swipeIndicator.className = 'swipe-indicator';
swipeIndicator.innerHTML = 'Swipe left or right to navigate';
lightbox.appendChild(swipeIndicator);

// Image paths array
const imagePaths = [
    'images/1540_6996.jpg',
    'images/1540_6997.jpg',
    'images/1540_6999.jpg',
    'images/1540_7001.jpg',
    'images/1540_7002.jpg',
    'images/1540_7003.jpg',
    'images/1540_7004.jpg',
    'images/1540_7005.jpg',
    'images/1540_7006.jpg',
    'images/1540_7007.jpg',
    'images/33846_0.jpg',
    'images/33846_1.jpg',
    'images/33846_2.jpg',
    'images/36865_0.jpg',
    'images/36865_1.jpg',
    'images/37269_0.jpg',
    'images/52361_0.jpg',
    'images/59120_0.jpg',
    'images/59475_0.jpg',
    'images/59475_1.jpg'
];

// Open lightbox with image index
function openLightbox(index) {
    currentLightboxIndex = index;
    lightboxImage.src = imagePaths[index];
    updateLightboxCounter();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Change lightbox slide
function changeLightboxSlide(n) {
    showLightboxSlide(currentLightboxIndex + n);
}

// Show specific lightbox slide
function showLightboxSlide(index) {
    // Handle index wrapping
    if (index >= totalImages) {
        currentLightboxIndex = 0;
    } else if (index < 0) {
        currentLightboxIndex = totalImages - 1;
    } else {
        currentLightboxIndex = index;
    }
    
    // Update image
    lightboxImage.src = imagePaths[currentLightboxIndex];
    updateLightboxCounter();
}

// Update counter text
function updateLightboxCounter() {
    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${totalImages}`;
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'ArrowRight' || e.key === 'Right') {
        changeLightboxSlide(1);
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        changeLightboxSlide(-1);
    } else if (e.key === 'Escape' || e.key === 'Esc') {
        closeLightbox();
    }
});

// Touch swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

// Setup touch listeners
lightbox.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
}, false);

lightbox.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

// Handle swipe direction
function handleSwipe() {
    const swipeThreshold = 50; // minimum distance for swipe
    
    if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left (next)
        changeLightboxSlide(1);
    }
    
    if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right (previous)
        changeLightboxSlide(-1);
    }
}

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
}); 