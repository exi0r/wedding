document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const rsvpForm = document.querySelector('.rsvp-form');
    const rsvpConfirmation = document.getElementById('rsvp-confirmation');

    // Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Close nav when a link is clicked (for mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navLinks.forEach(item => {
                item.style.animation = ''; // Reset animation
            });
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // RSVP Form Submission (Frontend only for this example)
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // In a real application, you would send this data to a backend server.
        // For demonstration, we'll just show a confirmation message.

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const guests = document.getElementById('guests').value;
        const dietary = document.getElementById('dietary').value;
        const message = document.getElementById('message').value;

        console.log({
            name,
            email,
            guests,
            dietary,
            message
        });

        // Simulate a successful submission
        rsvpForm.style.display = 'none'; // Hide the form
        rsvpConfirmation.style.display = 'block'; // Show the confirmation message

        // Optionally, reset the form after a delay or on a "Go Back" button
        // rsvpForm.reset();
    });
});
