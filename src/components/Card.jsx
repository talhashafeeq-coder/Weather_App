import React, {useState} from "react";
import { useWeather } from "../context/Weather";
import 'animate.css';

function Card() {
  const { data } = useWeather(); 
  const [showMore, setShowMore] = useState(false);

  const handleMoreData = () => {
    setShowMore(!showMore);
  };

  if (!data) {
    return (
      <div className="alert animate__animated animate__rotateIn alert-warning text-center">
        Enter Correct City... ⏳
      </div>
    );
  }  

  return (
    <>
    <div className="card container text-center mt-4">
      <img
        src={data.current.condition.icon}
        className="card-img-top mx-auto"
        alt="Weather Icon"
        style={{ width: "100px", height: "100px" }}
      />
      <div className="card-body">
        <h5 className="card-temperature">
          {data.current.temp_c}°C, {data.current.condition.text}
        </h5>
        <p className="card-location">
          {data.location.name}, {data.location.region}, {data.location.country}
        </p>
      </div>
    </div>
    <div className="container">
      <button className="btn btnStyle" onClick={handleMoreData}>
        {showMore ? "Hide" : "More"}
      </button>
      {showMore && (
        <table className="table table-hover table-bordered container container_table ">
          <tbody>
            <tr>
              <td>Feels Like:</td>
              <td>{data.current.feelslike_c}°C</td>
            </tr>
            <tr>
              <td>Humidity:</td>
              <td>{data.current.humidity}%</td>
            </tr>
            <tr>
              <td>Wind Speed:</td>
              <td>{data.current.wind_kph} km/h</td>
            </tr>
            <tr>
              <td>Pressure:</td>
              <td>{data.current.pressure_mb} mb</td>
            </tr>
            <tr>
              <td>UV Index:</td>
              <td>{data.current.uv}</td>
            </tr>
            <tr>
              <td>Time & Date:</td>
              <td>{data.location.localtime}</td>
            </tr>
            <tr>
              <td>Visibility:</td>
              <td>{data.current.vis_km} km</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>    
     </>

  );
}

export default Card;
