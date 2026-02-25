// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    
    // Select the form
    const form = document.getElementById("contact-form");

    // Add an event listener for the 'submit' event
    form.addEventListener("submit", function(event) {
        // Prevent the form from actually submitting (refreshing the page)
        event.preventDefault();

        // Get the user's name
        const nameInput = document.getElementById("name").value;

        // Display a success message (Interactivity)
        alert(`Thanks, ${nameInput}! Your message has been sent successfully.`);
        
        // Clear the form fields
        form.reset();
    });
});

