import React from "react";
import coldImage from "../assets/cold.jpg";
import moderateImage from "../assets/moderate.jpg";
import hotImage from "../assets/hot.jpg";

function WeatherCard({ city, weather }) {
    const { description, temp, feels_like, humidity } = weather;

    const getIcon = () => {
        if (feels_like <= 20) return <img src={coldImage} alt="Cold" className="weather-icon" />;
        if (feels_like > 20 && feels_like < 30) return <img src={moderateImage} alt="Moderate" className="weather-icon" />;
        return <img src={hotImage} alt="Hot" className="weather-icon" />;
    };

    return (
        <div className="weather-card">
            <h2>{city}</h2>
            <p>תיאור: {description}</p>
            <p>טמפרטורה: {temp}°</p>
            <p>טמפרטורה מורגשת: {feels_like}° {getIcon()}</p>
            <p>לחות: {humidity}%</p>
        </div>
    );
}

export default WeatherCard;
