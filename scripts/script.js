// Function to calculate wind chill based on temperature and wind speed
function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
}

// Get current year and last modified date of the document
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Static values for temperature, wind speed, and weather condition
const temperature = 18; // °C
const windSpeed = 10; // km/h
const condition = "Sunny"; // Condición del clima

// Display weather condition
document.getElementById('condition').textContent = condition;

// Check if conditions are viable for calculating wind chill
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = `${windChill} °C`;
} else {
    document.getElementById('windChill').textContent = 'N/A';
}
