import './Main.sass'
import CurrentLocation from "../CurrentLocation/CurrentLocation";
import CurrentWeatherCard from "../CurrentWeatherCard/CurrentWeatherCard";
import DaysWeather from "../DaysWeather/DaysWeather";
export default function Main ({location, fullLocation, setFullLocation}) {
    return (
        <div>
            { fullLocation && (
                <CurrentLocation fullLocation={fullLocation} />
            )}
            <div className='forecast'>
                <CurrentWeatherCard location={location} setFullLocation={setFullLocation} />
                <DaysWeather location={location} />
            </div>
        </div>
    )
}