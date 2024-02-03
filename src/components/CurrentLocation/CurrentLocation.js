import locationIcon from "../../img/location.svg";
import './CurrentLocation.sass';

export default function CurrentLocation ({fullLocation}) {
    return (
        <div className='full-location'>
            <img className="location-icon" alt="location icon" src={locationIcon}/>
            <div>{fullLocation}</div>

        </div>
    )
}