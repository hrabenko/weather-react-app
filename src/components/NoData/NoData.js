import noData from '../../img/no-data.png';
import './NoData.sass';
export default function NoData () {
    return (
        <div className='no-data-container'>
            <h1 className='no-data-title'>Let's find out the weather in your city</h1>
            <img className='no-data-image' src={noData} alt='No Data'/>
        </div>
    )
}