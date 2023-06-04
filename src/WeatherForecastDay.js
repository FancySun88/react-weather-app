import React from "react";
export default function WeatherForecastDay(props) {
  let iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function ForecastDay() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }
  return (
    <div>
      <div className="Weather-Forecast-Day">{ForecastDay()}</div>
      <div className="Weather-Forecast-Icon">
        <img
          src={iconUrl}
          alt={props.data.weather[0].description}
          id="icon"
          className="float-left"
        />
      </div>
      <div className="Weather-Forecast-temperatures">
        <span className="Temp-max">{maxTemperature()}</span>|
        <span className="Temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
