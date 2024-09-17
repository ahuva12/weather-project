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
          setError(null); 
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
    <h1 className="title">תחזית מסביב לעולם</h1>
    <div className="weather-container">
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

    // <>
    //  <h1 className="title">תחזית מסביב לעולם</h1>
    //  <div className="weather-container">
    //  <WeatherCard
    //        key={1}
    //        city={"אילת"}
    //        weather={{
    //          description: "חם מאוד",
    //          temp: 30,
    //          feels_like: 35,
    //          humidity: 56,
    //        }}
    //      />
    //   <WeatherCard
    //     key={2}
    //     city={"לומדון"}
    //     weather={{
    //       description: "חם בצורה סבירה",
    //       temp: 24,
    //       feels_like: 25,
    //       humidity: 30,
    //     }}
    //   />
    //   <WeatherCard
    //     key={3}
    //     city={"ניו יורק"}
    //     weather={{
    //       description: "נורמלי עד קריר",
    //       temp: 20,
    //       feels_like: 20,
    //       humidity: 22,
    //     }}
    //   />
    //   <WeatherCard
    //     key={4}
    //     city={"אלסקה"}
    //     weather={{
    //       description: "קפוא ביותר",
    //       temp: 1,
    //       feels_like: 2,
    //       humidity: 10,
    //     }}
    //   />
    //  </div>
    // </>
  );
}

export default App;