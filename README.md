# Weather App

This is a responsive weather application built with HTML, CSS, and JavaScript. It uses the OpenWeatherMap API to fetch and display current weather data for any city.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API Key](#api-key)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search for weather information by city name
- Display current temperature, humidity, and wind speed
- Show weather description and corresponding icon
- Responsive design for various screen sizes
- Error handling for invalid city names or API issues

## Demo
https://itisaarjan.github.io/weatherapp/

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/itisaarjan/weatherapp.git
   ```
2. Navigate to the project directory:
   ```
   cd weather-app
   ```

## Usage

1. Open `index.html` in your web browser.
2. Enter a city name in the search box.
3. Press the search button or hit Enter to fetch the weather data.
4. View the displayed weather information for the specified city.

## API Key

This app uses the OpenWeatherMap API. To run the app, you'll need to:

1. Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api).
2. Create a file named `config.js` in the project root.
3. Add your API key to `config.js`:
   ```javascript
   const API_KEY = 'your_api_key_here';
   ```
4. Make sure to include `config.js` in your `.gitignore` file to keep your API key private.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- [OpenWeatherMap API](https://openweathermap.org/api)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
