$(document).ready(function() {
    // Fade in effect on form load
    $(".contact-section").hide().fadeIn(1500);

    // Submit button animation
    $(".submit-btn").hover(
        function() {
            $(this).animate({ opacity: 0.8 }, 200);
        },
        function() {
            $(this).animate({ opacity: 1 }, 200);
        }
    );

    // Input focus animation
    $(".form-control").focus(function() {
        $(this).css("background-color", "#f0f8ff");
    }).blur(function() {
        $(this).css("background-color", "white");
    });
});

