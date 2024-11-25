const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '3b942d109bmsha32a6c63e88f36fp130496jsn15c281f5343d',
        'x-rapidapi-host': 'weather-api138.p.rapidapi.com',
    },
};

// Function to fetch and display weather data
const getWeather = (city_name) => {
    // Update city name in the UI
    document.getElementById('cityName').textContent = city_name;

    // Create the dynamic URL using the city name
    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city_name}`;

    async function fetchWeather() {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('API Response:', JSON.stringify(data, null, 2));

            // Update DOM elements with API data
            const temp = data.main?.temp || 'N/A';
            const temp_min = data.main?.temp_min || 'N/A';
            const temp_max = data.main?.temp_max || 'N/A';
            const feels_like = data.main?.feels_like || 'N/A';
            const pressure = data.main?.pressure || 'N/A';
            const humidity = data.main?.humidity || 'N/A';
            const sea_level = data.main?.sea_level || 'N/A';
            const grnd_level = data.main?.grnd_level || 'N/A';

            // Update extra fields (temp2, humidity2, sea_level2)
            document.getElementById('temp2').textContent = temp;
            document.getElementById('humidity2').textContent = humidity;
            document.getElementById('sea_level2').textContent = sea_level;

            // Update main fields
            document.getElementById('temp').textContent = temp;
            document.getElementById('temp_min').textContent = temp_min;
            document.getElementById('temp_max').textContent = temp_max;
            document.getElementById('feels_like').textContent = feels_like;
            document.getElementById('pressure').textContent = pressure;
            document.getElementById('humidity').textContent = humidity;
            document.getElementById('sea_level').textContent = sea_level;
            document.getElementById('grnd_level').textContent = grnd_level;
        } catch (error) {
            console.error('Error fetching weather data:', error.message);
        }
    }

    // Fetch weather data
    fetchWeather();
};

// Event listener for the "submit" button
document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    const city_name = document.getElementById('city_name').value; // Get city name from input
    getWeather(city_name); // Fetch weather for the entered city
});

// Fetch weather for the default city (Delhi) on page load
getWeather('Delhi');
