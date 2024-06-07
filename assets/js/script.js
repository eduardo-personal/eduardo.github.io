document.addEventListener('DOMContentLoaded', function() {
    // Load the footer dynamically
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });

    // Add event listener for the home button
    var homeButton = document.getElementById('homeButton');
    if (homeButton) {
        homeButton.addEventListener('click', function() {
            alert('Button Clicked!');
        });
    }
});
