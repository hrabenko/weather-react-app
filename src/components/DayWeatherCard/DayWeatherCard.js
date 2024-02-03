import './DayWeatherCard.sass';
export default function DayWeatherCard ({date, icon, minTemp, maxTemp, isActive, setActiveCard, index}) {
    return (
        <div className={`day-card ${isActive ? ' day-card-active' : ''}`} onClick={() => setActiveCard(index)}>
            <h3 className='data'>{date}</h3>
            <img className='weather-icon' alt='Weather icon'
                 src={require(`../../img/icons/${icon}.svg`)}/>
            <div className='minmax-temperature'>
                <div className='temp-data'>
                    <p className='temp-description'>min</p>
                    <p className='temp'>{minTemp > 0 ? `+${minTemp}` : minTemp}°</p>
                </div>
                <div className='temp-data'>
                    <p className='temp-description'>max</p>
                    <p className='temp'>{maxTemp > 0 ? `+${maxTemp}` : maxTemp}°</p>
                </div>
            </div>
        </div>
    )
}