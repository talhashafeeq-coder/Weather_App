import axios from "axios";
const baseUrl =
  "https://api.weatherapi.com/v1/current.json?key=68c3ea39faef4f1d9ab52122250902";
export const getWeatherDataForCity = async (city) => {
  try {
    const response = await axios.get(`${baseUrl}&q=${city}&aqi=yes`);
    if (!response.data) {
      return null;
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

export const getWeatherDataForLocation = async (lat , lon) => {
    try{
        const response = await axios.get(`${baseUrl}&q=${lat},${lon}&aqi=yes`);        
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
};

