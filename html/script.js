function scrollToDestinations() {
    document.querySelector('#destinations').scrollIntoView({
        behavior: 'smooth'
    });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});