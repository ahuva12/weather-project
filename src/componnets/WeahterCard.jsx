import React from "react";
import coldImage from "../assets/cold.jpg";
import moderateImage from "../assets/moderate.jpg";
import hotImage from "../assets/hot.jpg";

function WeatherCard({ city, weather }) {
    const { description, temp, feels_like, humidity } = weather;

    const getIcon = () => {
        if (feels_like <= 20) return <img src={coldImage} alt="Cold" />;
        if (feels_like > 20 && feels_like <= 30) return <img src={moderateImage} alt="Moderate" />;
        return <img src={hotImage} alt="Hot" />;
    };

    return (
        <div className="weather-card">
            <h2>{city}</h2>
            <p>תיאור: {description}</p>
            <p>טמפרטורה: {temp}°C</p>
            <p>טמפרטורה מורגשת: {feels_like}°C {getIcon()}</p>
            <p>לחות: {humidity}%</p>
        </div>
    );
}

export default WeatherCard;
