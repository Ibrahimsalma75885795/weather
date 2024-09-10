// Mock weather data for 10 cities
const weatherData = {
    alexandria: {
        description: "Sunny with clear skies",
        temp: "28°C"
    },
    cairo: {
        description: "Partly cloudy",
        temp: "35°C"
    },
    luxor: {
        description: "Hot and dry",
        temp: "42°C"
    },
    mecca: {
        description: "Scorching heat",
        temp: "45°C"
    },
    london: {
        description: "Rainy with strong winds",
        temp: "15°C"
    },
    paris: {
        description: "Cloudy with light showers",
        temp: "18°C"
    },
    tokyo: {
        description: "Humid with clear skies",
        temp: "30°C"
    },
    newyork: {
        description: "Cool with light breeze",
        temp: "20°C"
    },
    sydney: {
        description: "Warm and sunny",
        temp: "25°C"
    },
    dubai: {
        description: "Extremely hot and sunny",
        temp: "40°C"
    }
};

const getWeatherBtn = document.getElementById('getWeather');
const citySelector = document.getElementById('citySelector');

getWeatherBtn.addEventListener('click', () => {
    const selectedCity = citySelector.value;
    displayWeather(selectedCity);
});

function displayWeather(city) {
    const weather = weatherData[city];
    document.getElementById('weatherDescription').innerText = weather.description;
    document.getElementById('temperature').innerText = `Temp: ${weather.temp}`;
}
