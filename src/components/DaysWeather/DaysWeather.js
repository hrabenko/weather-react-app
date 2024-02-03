import './DaysWeather.sass';
import DayWeatherCard from "../DayWeatherCard/DayWeatherCard";
import config from "../../config";
import {useEffect, useState} from "react";
import {getGeneralData} from "../../utils";
import DetailedDayForecast from "../DetailedDayForecast/DetailedDayForecast";

export default function DaysWeather({location}) {
    const [weatherData, setWeatherData] = useState(null);
    const [activeCard, setActiveCard] = useState(0);


    useEffect(() => {
        getData();
    }, [location]);

    const getData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${config.apiToken}&units=metric`);
            if (response.ok) {
                const data = await response.json();
                setWeatherData(getGeneralData(data));
                console.log(getGeneralData(data))
            } else {
                console.error(`HTTP error! Status: ${response.status}`);
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <div className='weather-cards-container'>
                {weatherData && weatherData.map((item, index) => {
                    return <DayWeatherCard key={`card${item.date}`}
                                           date={item.date}
                                           icon={item.icon}
                                           minTemp={item.minTemp}
                                           maxTemp={item.maxTemp}
                                           isActive={index === activeCard ? true : false}
                                           index={index}
                                           setActiveCard={setActiveCard}
                    />
                })}
            </div>
            <div>
                {weatherData && <DetailedDayForecast  data={weatherData[activeCard]} />}
            </div>
        </div>

    )
}