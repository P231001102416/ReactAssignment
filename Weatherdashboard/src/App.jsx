import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Kolkata'); // Default baseline starting dashboard city

  // Safe approach for fetching data from OpenWeather API endpoints via async/await
  const fetchWeather = async (targetCity) => {
    // Paste or substitute your authentic individual API Key inside this string constraint
    const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY_HERE"; 
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(URL);
      
      // Handle non-200 standard response structures (e.g. 404 City Not Found)
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`The location "${targetCity}" could not be identified. Please verify the spelling.`);
        } else if (response.status === 401) {
          throw new Error("API Authentication failed. Please insert a valid OpenWeatherMap API Key in App.jsx.");
        } else {
          throw new Error("A network error occurred while reaching the weather servers.");
        }
      }

      const jsonResult = await response.json();
      setWeatherData(jsonResult);
    } catch (err) {
      setWeatherData(null);
      setError(err.message || "An unexpected error took place.");
    } finally {
      setLoading(false);
    }
  };

  // side-effect tracking engine hook to populate default dashboard data on mount
  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <div className="dashboard-app">
      <header className="dashboard-header">
        <h1>🌤️ Live Weather Observation Dashboard</h1>
        <p>Real-Time Global Weather Metrics Engine</p>
      </header>

      <main className="dashboard-main">
        {/* Pass down trigger updates via callback triggers */}
        <SearchBar onSearch={(chosenCity) => setCity(chosenCity)} />

        {/* Conditional Layout Rendering Engine Pipeline */}
        {loading && <LoadingSpinner />}
        
        {error && !loading && <ErrorMessage message={error} />}
        
        {weatherData && !loading && !error && <WeatherCard data={weatherData} />}
      </main>

      <footer className="dashboard-footer">
        <p>Data served via open channels from the [OpenWeatherMap API](https://openweathermap.org/api "Official Portal").</p>
      </footer>
    </div>
  );
}

export default App;
