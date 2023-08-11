$(document).ready(function() {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // Login functionality
    $('#login-form').on('submit', function(event) {
        event.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();

        // Simulating login with two users
        if ((username === 'user1' && password === 'password1') ||
            (username === 'user2' && password === 'password2')) {
            localStorage.setItem('isLoggedIn', 'true');
            alert('Login successful.');
            window.location.href=("http://127.0.0.1:5500/html%20and%20css/home.html")
        } else {
            $('#login-error').text('Invalid login credentials. Please try again.');
        }
    });

    if (isLoggedIn) {
        // User is logged in, show logout and enable home link
        $('#home-link a').attr('href', '../html and css/home.html');
        $('#home-link').show();
        $('#logout-link').show();
        $('.myLogin').hide(); // Hide login form
    } else {
        // User is not logged in, prevent navigation to home and show login form
        $('#home-link a').on('click', function(event) {
            event.preventDefault();
            alert('Please login to access the home page.');
        });
        $('#home-link').show();
        $('#logout-link').hide();
        $('.myLogin').show(); // Show login form
    }

    if (isLoggedIn) {
        // User is logged in, show logout  and enable home link
        $('#courses-link a').attr('href', '../html and css/courses.html');
        $('#courses-link').show();
        $('#logout-link').show();
        $('.myLogin').hide(); // Hide login form
    } else {
        // User is not logged in, prevent navigation to courses and show login form
        $('#courses-link a').on('click', function(event) {
            event.preventDefault();
            alert('Please login to access the courses page.');
        });
        $('#courses-link').show();
        $('#logout-link').hide();
        $('.myLogin').show(); // Show login form
    }

    if (isLoggedIn) {
        // User is logged in, show logout and enable home link
        $('#about-link a').attr('href', '../html and css/about.html');
        $('#about-link').show();
        $('#logout-link').show();
        $('.myLogin').hide(); // Hide login form
    } else {
        // User is not logged in, prevent navigation to about and show login form
        $('#about-link a').on('click', function(event) {
            event.preventDefault();
            alert('Please login to access the about page.');
        });
        $('#about-link').show();
        $('#logout-link').hide();
        $('.myLogin').show(); // Show login form
    }

    // Logout functionality
    $('#logout-link a').on('click', function(event) {
        event.preventDefault();
        localStorage.removeItem('isLoggedIn');
        alert('Logged out successfully.');
        location.reload(); // Refresh the page to show logged-out state
        window.location.href = 'landing.html'
    });
    
});


