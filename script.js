// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form Handling
const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);

        // Example handling of form data
        console.log('Form submitted!', Object.fromEntries(formData));

        // You can add your AJAX or fetch logic here to send data to the server.
    });
}