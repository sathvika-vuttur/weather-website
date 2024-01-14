document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'edb1e89e682527a574a9f272a44a490b'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const location = data.name;
            const temperature = Math.round(data.main.temp);
            const description = data.weather[0].description;

            document.getElementById('location').textContent = location;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('description').textContent = `Description: ${description}`;
        })
        .catch(error => {
            console.log('Error fetching data:', error);
        });
});
  