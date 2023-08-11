$(document).ready(function() {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn) {
        // User is logged in, show logout button
        $('#logout-link').css('display', 'block');
    }

    // Logout functionality
    $('#logout-button').on('click', function(event) {
        event.preventDefault();
        localStorage.removeItem('isLoggedIn');
        alert('Logged out successfully.');
        window.location.href = 'landing.html'; // take the user to the login page
    });
});