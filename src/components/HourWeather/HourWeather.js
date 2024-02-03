import './HourWeather.sass'
export default function HourWeather({data}) {
    return (
        <table className='table'>
            <tbody>
            <tr>
                <td>{data.time}</td>
            </tr>
            <tr>
                <td className={"weather-icon-row"}><img className='hour-weather-icon' alt='Weather icon'
                         src={require(`../../img/icons/${data.icon}.svg`)}/></td>
            </tr>
            <tr>
                <td>{data.temp > 0 ? `+${data.temp}` : data.temp}</td>
            </tr>
            <tr>
            <td>{data.feelLike}</td>
            </tr>
            <tr>
                <td>{data.pressure}</td>
            </tr>
            <tr>
                <td>{data.humidity}</td>
            </tr>
            <tr>
                <td>{data.wind}</td>
            </tr>
            </tbody>
        </table>
    )
}