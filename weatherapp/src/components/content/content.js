import react, {useState} from 'react';
import './content.css';
import Card from './card/card.js'

export default function Content({ onWeatherData }) { 
    const [city, setCity] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setCity(value);
        console.log(city);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(city)

        const apiKey = '20667418638774cf5af9135791e28d78';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

        fetch(url)
        .then((res) => {
            if(!res.ok) {
                throw new Error('City not found')
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            // HANDLE FUTURE WEATHER DATA HERE.

            const weatherData = {
                city: data.name,
                // Convert from Kelvin to Celsius
                temp: data.main.temp, 
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,            
                clouds: data.clouds.all,
            }

            const weatherDataArray = [weatherData.city, weatherData.temp, weatherData.tempMin, weatherData.tempMax, weatherData.humidity, weatherData.windSpeed, weatherData.clouds]

            onWeatherData(weatherDataArray);
        })
        .catch((err) => {
            console.log(err.message)
            if (err.message === 'City not found'){
                alert('City not found')
            }
        })

        if (city === '') {
            alert('Please enter a city')
        };
    }




    return ( 
        <div className="content">
            <h1>Content</h1>
            <form>
                <input type="text" placeholder="Enter City" onChange={handleInputChange}/>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}