import './CurrentWeatherCard.sass';
import {useEffect, useState} from "react";


function CurrentWeatherCard({location, setFullLocation}) {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        getData();
    }, [location]);

    const getData = async () => {
        try {

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_TOKEN}&units=metric`);
            if (response.ok) {
                const data = await response.json();
                setWeatherData(data);
                const fullLocation = `${data.name}, ${data.sys.country}`;
                setFullLocation(fullLocation);
            } else {
                console.error(`HTTP error! Status: ${response.status}`);
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            {weatherData && (
                <div className="current-weather">
                    <img className='weather-icon' alt='Weather icon' src={require(`../../img/icons/${weatherData.weather[0].icon}.svg`)}/>
                    <ul className='weather-data-list'>
                        <li className='list-item'>
                            <div>Temperature</div>
                            <div>{Math.round(weatherData.main.temp)} °C</div>
                        </li>
                        <li className='list-item'>
                            <div>Real Feel</div>
                            <div>{Math.round(weatherData.main.feels_like)} °C</div>
                        </li>
                        <li className='list-item'>
                            <div>Pressure</div>
                            <div>{weatherData.main.pressure} mm</div>
                        </li>
                        <li className='list-item'>
                            <div>Humidity</div>
                            <div>{weatherData.main.humidity} %</div>
                        </li>
                        <li className='list-item'>
                            <div>Wind</div>
                            <div>{weatherData.wind.speed} m/s</div>
                        </li>
                    </ul>
                </div>
            )}

        </div>
    )
}

export default CurrentWeatherCard;
