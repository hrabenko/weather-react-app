import locationIcon from '../../img/location.svg';
import './SearchBar.sass';
import {useState} from "react";

function SearchBar({searchBarText, setSearchBar, setLocation}) {
    // const [searchBarText, setSearchBar] = useState('');

    return (
        <div className="searchbar">
            <img className="location-icon" alt="location icon" src={locationIcon}/>
            <input value={searchBarText}
                   onChange={(event) => setSearchBar(event.target.value)}
                   placeholder='Location'
                   className="location-input"/>
            <button onClick={() => setLocation(searchBarText)} className="search-button">Search</button>
        </div>
    )
}

export default SearchBar;