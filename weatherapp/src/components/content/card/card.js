import React, {useState} from 'react';
import './card.css';



export default function Card( props ) {

    return (
        <div className="card">
            <h1>{props.data[0]}</h1>
            <h2>{props.data[1]}</h2>
            <h3>Min: {props.data[2]}°F</h3>
            <h3>Max: {props.data[3]}°F</h3>
            <h3>Humidity: {props.data[4]}%</h3>
            <h3>Wind Speed: {props.data[5]} mph</h3>
            <h3>Clouds: {props.data[6]}%</h3>
            {/* city: data.name,
                temp: data.main.temp, 
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,            
                clouds: data.clouds.all, */}
        </div>
    )
} 