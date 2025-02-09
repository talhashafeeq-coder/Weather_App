import React, { useState } from 'react';
import { useWeather } from '../context/Weather';

function Input() {
    const weather = useWeather();
    const [tempCity, setTempCity] = useState(""); 
    const handleSearch = () => {
        weather.setSearchcity(tempCity); 
    };

    return (
        <div className="container">
            <input
                placeholder="Search City"
                className="input form-control container"
                value={tempCity} 
                onChange={(e) => setTempCity(e.target.value)} 
            />
            <button className="search-button btn btnStyle" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}

export default Input;
