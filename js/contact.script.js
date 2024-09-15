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
    
    document.getElementById('contact-form').reset();  // Clear form
});




// Form validation
function validateContactForm() {
    let isValid = true;

    // Clear error messages
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('subject-error').textContent = '';
    document.getElementById('message-error').textContent = '';

    // Name validation
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Enter a valid email address';
        isValid = false;
    }

    // Subject validation
    const subject = document.getElementById('subject').value.trim();
    if (subject === '') {
        document.getElementById('subject-error').textContent = 'Subject is required';
        isValid = false;
    }

    // Message validation
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('message-error').textContent = 'Message is required';
        isValid = false;
    }

    if (isValid) {
        alert('Thank you for your message! We will get back to you soon.');
        document.getElementById('contact-form').reset();
    }

    return false; 
}
