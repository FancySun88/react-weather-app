import React, { useState } from "react";
import DefaultWeatherInfo from "./DefaultWeatherInfo";
import axios from "axios";
import "./App.css";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
    });
  }
  function Search() {
    const apiKey = `6b45fead1f572a2847620f61855bb862`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.loaded) {
    return (
      <div className="App">
        <div className="Search">
          <form className="form-field" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Please, type a city..."
                  className="form-control input-field"
                  autoComplete="off"
                  onChange={handleCityChange}
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

        <DefaultWeatherInfo data={weatherData} />

        <footer className="Footer">
          <a href="https://github.com/FancySun88/WeatherGuide-app">
            Open-source code
          </a>{" "}
          by Iryna Zhelezniak, 2023
        </footer>
      </div>
    );
  } else {
    Search();
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
