import React from 'react';

function WeatherCard({ data }) {
  // Extracting data elements based on standard OpenWeatherMap JSON structures
  const { name, sys, main, wind, weather } = data;
  
  // Format Unix timestamps into an easily readable local time
  const formatTime = (unixTimestamp) => {
    const dateObj = new Date(unixTimestamp * 1000);
    return dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Construct standard icon url reference string from OpenWeatherMap CDN
  const iconUrl = `https://openweathermap.org{weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <div className="card-main-info">
        <h2>{name}, <span className="country-code">{sys.country}</span></h2>
        <div className="condition-display">
          <img src={iconUrl} alt={weather[0].description} className="weather-icon" />
          <div className="temp-box">
            <span className="temp-value">{Math.round(main.temp)}°C</span>
            <span className="condition-desc">{weather[0].description}</span>
          </div>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-item">
          <span className="metric-label">Humidity</span>
          <span className="metric-value">{main.humidity}%</span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Wind Speed</span>
          <span className="metric-value">{wind.speed} m/s</span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Sunrise</span>
          <span className="metric-value">{formatTime(sys.sunrise)}</span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Sunset</span>
          <span className="metric-value">{formatTime(sys.sunset)}</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
