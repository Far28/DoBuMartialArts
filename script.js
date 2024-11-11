console.log("JavaScript is working!");

// Example interactive function
function showAlert() {
    alert("Welcome to DoBu Martial Arts!");
}

// Toggle mobile menu
document.getElementById('menu-toggle').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});
document.getElementById('menu-toggle').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});
// Toggle mobile menu
document.getElementById('menu-toggle').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});
<script>
$(document).ready(function() {
    // Toggle mobile menu
    $('#menu-toggle').click(function() {
        $('#mobile-menu').toggleClass('hidden');
    });

    // Smooth scroll for navigation links (optional but helpful for single-page navigation)
    $('a').click(function(event) {
        // Check if the link is pointing to an anchor
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            // Smooth scrolling animation
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // Join Now button animation (for desktop and mobile)
    $('.join-now-button').click(function() {
        $(this).animate({
            opacity: 0.5
        }, 200, function() {
            // After animation is complete, redirect (or any other action)
            window.location.href = "contact.html";
        });
    });
});
</script>
