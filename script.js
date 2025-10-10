// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Enhanced navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(16, 7, 43, 0.95)';
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
    } else {
        navbar.style.background = 'rgba(14, 15, 43, 0.85)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    }
});

// Advanced element animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';

            // Special animation for skill categories
            if (entry.target.classList.contains('skill-category')) {
                animateSkillBars(entry.target);
                entry.target.style.transform = 'translateY(0) scale(1)';
            }

            // Stagger animation for cards
            if (entry.target.classList.contains('overview-card')) {
                const cards = document.querySelectorAll('.overview-card');
                const index = Array.from(cards).indexOf(entry.target);
                entry.target.style.animationDelay = `${index * 0.2}s`;
                entry.target.classList.add('animate-in');
            }
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.overview-card, .about-card, .skill-category, .project-card, .timeline-item, .stat-item, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// Enhanced skill bar animation with glow effects
function animateSkillBars(container) {
    const skillBars = container.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;

            // Add pulsing glow effect
            setTimeout(() => {
                bar.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.6)';
                setTimeout(() => {
                    bar.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.3)';
                }, 300);
            }, 1500);
        }, index * 300);
    });
}

// Enhanced hover effects with 3D transforms
document.querySelectorAll('.overview-card, .about-card, .project-card, .info-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-12px) scale(1.02) rotateX(5deg)';
        this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
    });
});

// Floating animation enhancement for profile image
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
    profileImage.addEventListener('mouseenter', () => {
        profileImage.style.animationPlayState = 'paused';
        profileImage.style.transform = 'translateY(-10px) scale(1.08) rotateY(10deg)';
        profileImage.style.boxShadow = '0 0 100px rgba(0, 255, 255, 0.5)';
    });

    profileImage.addEventListener('mouseleave', () => {
        profileImage.style.animationPlayState = 'running';
        profileImage.style.transform = '';
        profileImage.style.boxShadow = '0 0 50px rgba(0, 255, 255, 0.1)';
    });
}

// Add dynamic typing effect to hero title
const heroName = document.querySelector('.hero-title .name');
if (heroName) {
    const text = heroName.textContent;
    heroName.textContent = '';
    heroName.style.opacity = '1';

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            heroName.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    setTimeout(typeWriter, 1500);
}

// Enhanced contact form interactions
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');

    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.style.borderColor = 'rgba(0, 255, 255, 0.6)';
            this.style.background = 'rgba(0, 255, 255, 0.1)';
            this.style.transform = 'translateY(-2px)';
        });

        input.addEventListener('blur', function () {
            this.style.borderColor = 'rgba(0, 255, 255, 0.2)';
            this.style.background = 'rgba(0, 255, 255, 0.05)';
            this.style.transform = 'translateY(0)';
        });
    });
}

// Add CSS for additional animations and simple popup
const additionalStyles = `
    .animate-in {
        animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    .skill-category {
        perspective: 1000px;
    }
    
    .timeline-content:hover {
        perspective: 1000px;
        transform: translateX(10px) rotateY(5deg);
    }

    /* Achievement List Styles */
    .achievement-list {
        list-style: none;
        padding: 0;
        margin: 1rem 0;
    }
    .achievement-list li {
        padding: 0.5rem 0;
        border-left: 3px solid rgba(0, 255, 255, 0.3);
        padding-left: 1rem;
        margin-bottom: 0.5rem;
        transition: all 0.3s ease;
    }
    .achievement-list li:hover {
        border-left-color: #00ffff;
        transform: translateX(5px);
        color: #00ffff;
    }

    /* Simple Popup Styles */
    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }
    
    .popup-overlay.show {
        opacity: 1;
        visibility: visible;
    }
    
    .popup-container {
        background: linear-gradient(135deg, rgba(16, 7, 43, 0.95), rgba(14, 15, 43, 0.98));
        backdrop-filter: blur(20px);
        border: 2px solid rgba(0, 255, 255, 0.3);
        border-radius: 20px;
        padding: 2rem;
        max-width: 400px;
        width: 90%;
        text-align: center;
        color: #e1e5f2;
        transform: scale(0.8);
        transition: all 0.3s ease;
        box-shadow: 0 20px 60px rgba(0, 255, 255, 0.2);
    }
    
    .popup-overlay.show .popup-container {
        transform: scale(1);
    }
    
    .popup-icon {
        font-size: 3rem;
        color: #00ff96;
        margin-bottom: 1rem;
        text-shadow: 0 0 20px rgba(0, 255, 150, 0.6);
    }
    
    .popup-icon.error {
        color: #ff6464;
        text-shadow: 0 0 20px rgba(255, 100, 100, 0.6);
    }
    
    .popup-title {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #ffffff;
    }
    
    .popup-message {
        font-size: 1rem;
        margin-bottom: 1.5rem;
        color: #b8c5d6;
        line-height: 1.5;
    }
    
    .popup-button {
        background: linear-gradient(45deg, rgba(0, 255, 255, 0.2), rgba(64, 224, 208, 0.3));
        color: #ffffff;
        border: 2px solid rgba(0, 255, 255, 0.3);
        padding: 0.7rem 1.5rem;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .popup-button:hover {
        background: linear-gradient(45deg, rgba(0, 255, 255, 0.4), rgba(64, 224, 208, 0.5));
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 255, 255, 0.3);
    }

    @media (max-width: 768px) {
        .popup-container {
            padding: 1.5rem;
        }
        .popup-icon {
            font-size: 2.5rem;
        }
        .popup-title {
            font-size: 1.3rem;
        }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Enhanced Counter animation for stats (supports increment and decrement)
function animateCounter(element, target, startValue = 0, direction = 'up', prefix = '', suffix = '') {
    let current = startValue;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;
    
    let increment;
    if (direction === 'down') {
        increment = (startValue - target) / steps;
    } else {
        increment = (target - startValue) / steps;
    }
    
    element.textContent = prefix + startValue + suffix;
    
    const timer = setInterval(() => {
        if (direction === 'down') {
            current -= increment;
            if (current <= target) {
                current = target;
                clearInterval(timer);
                // Add final glow effect
                element.style.textShadow = '0 0 20px rgba(0, 255, 255, 0.8)';
                setTimeout(() => {
                    element.style.textShadow = '0 0 15px rgba(0, 255, 255, 0.3)';
                }, 500);
            }
        } else {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
                // Add final glow effect
                element.style.textShadow = '0 0 20px rgba(0, 255, 255, 0.8)';
                setTimeout(() => {
                    element.style.textShadow = '0 0 15px rgba(0, 255, 255, 0.3)';
                }, 500);
            }
        }
        
        // Update display with proper formatting
        const displayValue = Math.floor(current);
        if (direction === 'down') {
            element.textContent = prefix + displayValue + suffix;
        } else {
            if (target >= 1000) {
                element.textContent = displayValue + '+';
            } else {
                element.textContent = displayValue + suffix;
            }
        }
    }, stepTime);
}

// Observe stats section for animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number[data-count]');
            statNumbers.forEach((stat, index) => {
                const target = parseInt(stat.getAttribute('data-count'));
                const startValue = parseInt(stat.getAttribute('data-start')) || 0;
                const direction = stat.getAttribute('data-direction') || 'up';
                
                stat.classList.add('counting');
                
                // Stagger the animations
                setTimeout(() => {
                    if (direction === 'down') {
                        animateCounter(stat, target, startValue, 'down', 'Top ', '');
                    } else {
                        animateCounter(stat, target, startValue, 'up', '', '');
                    }
                }, index * 200);
            });
            
            // Only run once
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Photo Gallery - Fixed 3-Photo Display with Fade Animation
document.addEventListener('DOMContentLoaded', function() {
    const photoSlots = {
        left: document.getElementById('photo-left'),
        center: document.getElementById('photo-center'),
        right: document.getElementById('photo-right')
    };
    
    const dots = document.querySelectorAll('.dot');
    
    // Photo array (8 photos)
    const photos = [
        'images/1.jpg',
        'images/2.jpg', 
        'images/3.jpg',
        'images/4.jpg',
        'images/5.jpg',
        'images/6.jpg',
        'images/7.jpg',
        'images/8.jpg'
    ];
    
    let currentIndex = 0;
    let autoRotateInterval;
    
    function updatePhotos() {
        // Check if elements exist
        if (!photoSlots.left || !photoSlots.center || !photoSlots.right) return;

        const leftIndex = (currentIndex - 1 + photos.length) % photos.length;
        const centerIndex = currentIndex;
        const rightIndex = (currentIndex + 1) % photos.length;
        
        // Update images with fade effect
        updatePhotoSlot(photoSlots.left, photos[leftIndex], false);
        updatePhotoSlot(photoSlots.center, photos[centerIndex], true);
        updatePhotoSlot(photoSlots.right, photos[rightIndex], false);
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function updatePhotoSlot(slot, imageSrc, isCenter) {
        if (!slot) return;
        const img = slot.querySelector('.gallery-image');
        if (!img) return;
        
        // Fade out
        slot.classList.add('fade-out');
        
        setTimeout(() => {
            // Change image
            img.src = imageSrc;
            
            // Fade in
            slot.classList.remove('fade-out');
            slot.classList.add('fade-in');
            
            // Update center class
            if (isCenter) {
                slot.classList.add('center');
            } else {
                slot.classList.remove('center');
            }
            
            setTimeout(() => {
                slot.classList.remove('fade-in');
                slot.classList.add('active');
            }, 50);
            
        }, 300);
    }
    
    function nextPhoto() {
        currentIndex = (currentIndex + 1) % photos.length;
        updatePhotos();
    }
    
    function goToPhoto(index) {
        currentIndex = index;
        updatePhotos();
    }
    
    // Auto rotation every 1.5 seconds
    function startAutoRotate() {
        autoRotateInterval = setInterval(nextPhoto, 1500);
    }
    
    function stopAutoRotate() {
        clearInterval(autoRotateInterval);
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoRotate();
            goToPhoto(index);
            setTimeout(startAutoRotate, 3000); // Resume after 3 seconds
        });
    });
    
    // Pause on hover
    const gallery = document.querySelector('.photo-display');
    if (gallery) {
        gallery.addEventListener('mouseenter', stopAutoRotate);
        gallery.addEventListener('mouseleave', startAutoRotate);
    }
    
    // Initialize only if elements exist
    if (photoSlots.left && photoSlots.center && photoSlots.right) {
        updatePhotos();
        startAutoRotate();
    }

    // Contact Form Handler - Works with both HTML forms and ASP.NET forms
    const contactFormElement = document.getElementById('contactForm') || 
                              document.querySelector('form') || 
                              document.querySelector('.contact-form form');
    
    if (contactFormElement) {
        contactFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data - works with both regular forms and ASP.NET forms
            const formData = new FormData(this);
            
            // Get data from FormData or directly from elements
            const messageData = {
                name: formData.get('name') || 
                      document.querySelector('[name="name"]')?.value || 
                      document.querySelector('#txtName')?.value || '',
                email: formData.get('email') || 
                       document.querySelector('[name="email"]')?.value || 
                       document.querySelector('#txtEmail')?.value || '',
                subject: formData.get('subject') || 
                         document.querySelector('[name="subject"]')?.value || 
                         document.querySelector('#txtSubject')?.value || 'No Subject',
                message: formData.get('message') || 
                         document.querySelector('[name="message"]')?.value || 
                         document.querySelector('#txtMessage')?.value || ''
            };
            
            // Simple validation
            if (!messageData.name || !messageData.email || !messageData.message) {
                showPopup('Please fill in all required fields!', 'error');
                return;
            }
            
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"], input[type="submit"], .btn-primary');
            const originalButtonText = submitButton?.innerHTML || submitButton?.value || 'Send Message';
            
            if (submitButton) {
                if (submitButton.tagName === 'BUTTON') {
                    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                } else {
                    submitButton.value = 'Sending...';
                }
                submitButton.disabled = true;
            }
            
            // Send to Google Sheets
            sendToGoogleSheets(messageData)
                .then(() => {
                    // Show success popup
                    showPopup(`Thank you ${messageData.name}! Your message has been sent to Google Sheets. I'll get back to you within 24 hours.`, 'success');
                    
                    // Clear form
                    this.reset();
                })
                .catch(error => {
                    console.error('Error sending message:', error);
                    showPopup('Sorry, there was an error sending your message. Please try again later.', 'error');
                })
                .finally(() => {
                    // Reset button
                    if (submitButton) {
                        if (submitButton.tagName === 'BUTTON') {
                            submitButton.innerHTML = originalButtonText;
                        } else {
                            submitButton.value = originalButtonText;
                        }
                        submitButton.disabled = false;
                    }
                });
        });
    }
});

// Simple Popup Function
function showPopup(message, type = 'success') {
    // Remove existing popup if any
    const existingPopup = document.querySelector('.popup-overlay');
    if (existingPopup) {
        existingPopup.remove();
    }
    
    const icon = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-triangle';
    const title = type === 'success' ? 'Message Sent!' : 'Error!';
    
    const popupHTML = `
        <div class="popup-overlay">
            <div class="popup-container">
                <div class="popup-icon ${type}">
                    <i class="${icon}"></i>
                </div>
                <h3 class="popup-title">${title}</h3>
                <p class="popup-message">${message}</p>
                <button class="popup-button" onclick="hidePopup()">
                    <i class="fas fa-thumbs-up"></i> Got it!
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', popupHTML);
    
    const popup = document.querySelector('.popup-overlay');
    setTimeout(() => {
        popup.classList.add('show');
    }, 10);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hidePopup();
    }, 5000);
}

function hidePopup() {
    const popup = document.querySelector('.popup-overlay');
    if (popup) {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.remove();
        }, 300);
    }
}

// Google Sheets Integration with your deployment URL
function sendToGoogleSheets(data) {
    // Your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzgrAtFprHBxdK0FyGmOWvGhvBq5ujkYGw-4E2a04k2fuBPoreDfBJL8nDMzjeT4o0f2A/exec';
    
    return new Promise((resolve, reject) => {
        fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message,
                timestamp: new Date().toISOString()
            }),
            mode: 'no-cors' // Required for Google Apps Script
        })
        .then(() => {
            // Since we're using no-cors mode, we can't read the response
            // But if we get here, the request was sent successfully
            console.log('Message sent to Google Sheets:', data);
            
            // Also save to localStorage as backup
            saveToLocalStorage(data);
            
            resolve();
        })
        .catch(error => {
            console.error('Error sending to Google Sheets:', error);
            
            // Still save to localStorage as fallback
            saveToLocalStorage(data);
            
            reject(error);
        });
    });
}

// Save to localStorage as backup
function saveToLocalStorage(messageData) {
    const timestamp = new Date().toISOString();
    const messageWithTimestamp = {
        ...messageData,
        timestamp,
        id: Date.now()
    };
    
    // Get existing messages
    let messages = JSON.parse(localStorage.getItem('portfolioMessages') || '[]');
    
    // Add new message
    messages.push(messageWithTimestamp);
    
    // Save back to localStorage
    localStorage.setItem('portfolioMessages', JSON.stringify(messages));
    
    console.log('Message saved to localStorage:', messageWithTimestamp);
}

// Function to view saved messages in localStorage (for your reference)
function viewSavedMessages() {
    const messages = JSON.parse(localStorage.getItem('portfolioMessages') || '[]');
    console.table(messages);
    return messages;
}

// Function to test Google Sheets connection
function testGoogleSheets() {
    const testData = {
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test Message',
        message: 'This is a test message to verify the Google Sheets integration is working.'
    };
    
    console.log('Testing Google Sheets connection...');
    sendToGoogleSheets(testData)
        .then(() => {
            console.log('✅ Test successful! Check your Google Sheet for the test message.');
        })
        .catch(error => {
            console.error('❌ Test failed:', error);
        });
}

// Global functions
window.hidePopup = hidePopup;
window.viewSavedMessages = viewSavedMessages;
window.testGoogleSheets = testGoogleSheets;