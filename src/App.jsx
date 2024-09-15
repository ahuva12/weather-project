import React, { useState, useEffect } from "react";
import WeatherCard from './componnets/WeahterCard'
import { fetchWeatherData } from './logic/weatherService'
import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeatherData();
        if (data) {
          setWeatherData(data);
          console.log(data)
        } else {
          console.log('Failed to fetch weather data.')
          setError('Failed to fetch weather data.');
        }
      } catch (error) {
        console.log('Error fetching weather data: ' + error.message)
        setError(error.message); 
      }
    };

    getWeather();
  }, []);

  if (error) return (
    <div className="error-message">
      <div>:אנחנו מצטערים, התרחשה תקלה בבקשה שלך. זאת השגיאה</div>
      <div>{error}</div>
    </div>
  );
  

  if (!weatherData) return <div>טוען נתונים...</div>;

  return (
    <>
    <h1>תחזית מסביב לעולם</h1>
    <div className="app">
      {weatherData.map((cityWeather) => (
        <WeatherCard
          key={cityWeather.id}
          city={cityWeather.name}
          weather={{
            description: cityWeather.weather[0].description,
            temp: cityWeather.main.temp,
            feels_like: cityWeather.main.feels_like,
            humidity: cityWeather.main.humidity,
          }}
        />
      ))}
    </div>
    </>
  );
}

export default App;