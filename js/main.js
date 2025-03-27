// Utility functions
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to elements
    const elements = document.querySelectorAll('.card');
    elements.forEach(element => {
        element.classList.add('fade-in');
    });

    // Example of event handling
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Button clicked!');
        });
    });
}); 