document.getElementById('locationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const countryCode = document.getElementById('countryCode').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Here you would typically send the data to your server
    // For demonstration, we'll just log it
    console.log(`Country Code: ${countryCode}, Phone Number: ${phoneNumber}`);

    // Simulate getting location (you would replace this with actual logic)
    getLocation();
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            document.getElementById('locationDisplay').innerText = `Your location: Latitude: ${lat}, Longitude: ${lon}`;
        }, function() {
            document.getElementById('locationDisplay').innerText = "Unable to retrieve your location.";
        });
    } else {
        document.getElementById('locationDisplay').innerText = "Geolocation is not supported by this browser.";
    }
}