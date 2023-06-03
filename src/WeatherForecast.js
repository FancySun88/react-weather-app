import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = `e2ea1399166955bf4ca430b68fc06cd5`;
  let longitude = 40;
  let latitude = 40;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Weather-Forecast">
      <div className="row">
        <div className="col">
          <div className="Weather-Forecast-Day">Sun</div>
          <div className="Weather-Forecast-Icon"></div>
          <div className="Weather-Forecast-temperatures">
            <span className="Temp-max">25°</span>|
            <span className="Temp-min">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
