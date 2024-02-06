import './RecentLocations.sass';
import {useEffect, useState} from "react";
import * as React from "react";

export default function RecentLocations({location, setLocation, setSearchBar}) {
    const [locationList, setLocationList] = useState([]);

    useEffect(() => {
        const response = localStorage.getItem('list');

        if (response) {
            const responseList = response.split(",");
            setLocationList(responseList);
        }

    }, []);

    useEffect(() => {

        if (location && !locationList.includes(location.toLowerCase())) {
            if (locationList.length >= 5) {
                setLocationList(prevState => [...prevState.slice(1), location.toLowerCase()]);
            } else {
                setLocationList(prevState => [...prevState, location.toLowerCase()]);
            }
        }
    }, [location]);

    useEffect(() => {
        localStorage.setItem('list', locationList.join(','));
    }, [locationList]);

    return (
        <div className='locations-list'>
            {locationList.map((item, index) => (
                <React.Fragment key={`${item}`}>
                    <p onClick={() => {
                        setLocation(item);
                        setSearchBar(item);
                    }}
                       className='locations-list-item'
                    >{item}</p>
                    {index !== locationList.length - 1 && <p> | </p>}
                </React.Fragment>
            ))}
        </div>
    )

}