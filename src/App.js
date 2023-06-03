import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./App.css";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="App">
        <div className="Search">
          <form className="form-field">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Please, type a city..."
                  className="form-control input-field"
                  autoComplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Get a forecast"
                  className="btn btn-primary bottom-submit"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="Users-data-weather">
          <h1>
            {weatherData.city}, {weatherData.country}
          </h1>
          <ul>
            <li className="Current-Date">
              <FormattedDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
        </div>
        <div className="Weather">
          <div className="row">
            <div className="col-6">
              <div className="clearfix Weather-temperature">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  id="icon"
                  className="float-left"
                />
                <div className="float-left">
                  <strong>{weatherData.temperature}</strong>
                  <span className="units">
                    <a href="/">°C</a>| <a href="/">°F</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul className="Weather-description">
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} m/s</li>
              </ul>
            </div>
          </div>
        </div>

        <footer className="Footer">
          <a href="https://github.com/FancySun88/WeatherGuide-app">
            Open-source code
          </a>{" "}
          by Iryna Zhelezniak, 2023
        </footer>
      </div>
    );
  } else {
    const apiKey = `6b45fead1f572a2847620f61855bb862`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return (
      <div>
        <h1>Loading...</h1>
        <footer className="Footer">
          <a href="https://github.com/FancySun88/WeatherGuide-app">
            Open-source code
          </a>{" "}
          by Iryna Zhelezniak, 2023
        </footer>
      </div>
    );
  }
}
