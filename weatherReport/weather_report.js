const apiKey = 'b290a0eca6deb396698f2fa1cdaf7edc'; // Replace with your actual API key

function showWeatherByCity(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetchWeather(apiUrl);
}

function showWeatherByCoordinates(event) {
    event.preventDefault();

    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;

    if (!latitude || !longitude) {
        displayError('Please provide both latitude and longitude values.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetchWeather(apiUrl);
}

function fetchWeather(apiUrl) {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            displayError('Failed to fetch weather. Please ensure the input is correct and try again.');
        });
}

function displayError(message) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>${message}</p>`;
}

document.getElementById('weatherForm').addEventListener('submit', showWeatherByCity);
document.getElementById('latLonForm').addEventListener('submit', showWeatherByCoordinates);
