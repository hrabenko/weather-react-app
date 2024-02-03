import HourWeather from "../HourWeather/HourWeather";
import './DetailedDayForecast.sass';

export default function DetailedDayForecast({data}) {
    return (
        <div className='detailed-forecast'>
            <div className='icon-container'>
                <img className='weather-icon' alt='Weather icon'
                     src={require(`../../img/icons/${data.icon}.svg`)}/>
            </div>
            <table className='table '>
                <tbody>
                <tr></tr>
                <tr></tr>
                <tr>
                    <th>Temperature, °C</th>
                </tr>
                <tr>
                    <th>Real Feel, °C</th>
                </tr>
                <tr>
                    <th>Pressure, mm</th>
                </tr>
                <tr>
                    <th>Humidity, %</th>
                </tr>
                <tr>
                    <th>Wind, m/s</th>
                </tr>
                </tbody>
            </table>
            {data.data.map((item) => <HourWeather key={`hourWeather${item.time}`} data={item} />)}
        </div>
    )
}