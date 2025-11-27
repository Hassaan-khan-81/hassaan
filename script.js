// This script handles the "Scroll Reveal" animation
// It waits for elements to enter the screen, then adds the "show" class

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            // Add the 'show' class when the element is visible
            entry.target.classList.add('show');
        } else {
            // Optional: Remove 'show' if you want them to fade out again when scrolling up
            // entry.target.classList.remove('show'); 
        }
    });
});

// Select all elements that have the 'hidden' class
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Add a cool console message for developers
console.log("Hassaan's Portfolio Loaded - Automation Ready 🚀");
