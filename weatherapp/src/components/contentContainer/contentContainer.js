import React, {useState} from "react";
import "./contentContainer.css";

import Content from '../content/content.js';
import Card from '../content/card/card.js';

export default function ContentContainer() {

    const [weatherData, setWeatherData] = useState(null);
    
    const handleWeatherData = (data) => {
        setWeatherData(data);
    }

    const weatherDataName = weatherData[2]

    return (
        <div className="contentContainer">
        <Content onWeatherData={handleWeatherData}/>
        <Card data={weatherDataName}/>
        </div>
    );
}