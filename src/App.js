import SearchBar from "./components/SearchBar/SearchBar";
import {useState} from "react";
import CurrentWeatherCard from "./components/CurrentWeatherCard/CurrentWeatherCard";
import CurrentLocation from "./components/CurrentLocation/CurrentLocation";
import NoData from "./components/NoData/NoData";
import Main from "./components/Main/Main";

function App() {
    const [location, setLocation] = useState("");
    const [fullLocation, setFullLocation] = useState('')

    return (
        <div className="App">
            <SearchBar setLocation={setLocation}/>


            {location ?
                (
                    <Main
                        location={location}
                        fullLocation={fullLocation}
                        setFullLocation={setFullLocation}
                    />
                ) : (
                    <NoData/>
                )}
        </div>
    )
}

export default App;