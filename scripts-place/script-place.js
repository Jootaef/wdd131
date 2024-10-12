
function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
}

document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;


const temperature = 18; 
const windSpeed = 10; 
const condition = "Sunny"; 

document.getElementById('condition').textContent = condition;


if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = `${windChill} °C`;
} else {
    document.getElementById('windChill').textContent = 'N/A';
}
