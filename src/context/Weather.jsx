import React, { createContext, useContext, useState, useEffect } from 'react';
import { getWeatherDataForCity , getWeatherDataForLocation } from '../Api/GetData';

// Create a Weather Context
const WeatherContext = createContext();

// Custom hook to use the Weather Context
export const useWeather = () => {
    return useContext(WeatherContext);
};

function WeatherProvider(props) {
    const [data, setData] = useState(null);
    const [searchcity, setSearchcity] = useState('');

    // Fetch weather data based on `searchcity`
    const fetchData = async () => {
        if (!searchcity) return; // Do nothing if searchcity is empty
        try {
            const response = await getWeatherDataForCity(searchcity);
            setData(response);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };
const fetchCurrentUserLocationData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        getWeatherDataForLocation(position.coords.latitude, position.coords.longitude)
        .then((response) => {
            setData(response);
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
        });
    })
}
    // Trigger `fetchData` when `searchcity` changes
    useEffect(() => {
        fetchData();
    }, [searchcity]);

    return (
        <WeatherContext.Provider value={{ data, searchcity, setSearchcity,fetchCurrentUserLocationData, fetchData }}>
            {props.children}
        </WeatherContext.Provider>
    );
}

export default WeatherProvider;
