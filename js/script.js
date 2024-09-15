
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Clear form
    document.getElementById('contact-form').reset();
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").addEventListener("click", function () {
        window.print();
    });
});


//Blog Script
const themeToggle = document.getElementById('theme-toggle');


themeToggle.addEventListener('click', () => {
  
  document.body.classList.toggle('dark-mode');
});