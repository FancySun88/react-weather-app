import React from "react";
import FormattedDate from "./FormattedDate";

export default function DefaultWeatherInfo(props) {
  return (
    <div>
      <div className="Users-data-weather">
        <h1>
          {props.data.city}, {props.data.country}
        </h1>
        <ul>
          <li className="Current-Date">
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <div className="clearfix Weather-temperature">
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                id="icon"
                className="float-left"
              />
              <div className="float-left">
                <strong>{props.data.temperature}</strong>
                <span className="units">
                  <a href="/">°C</a>| <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul className="Weather-description">
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} m/s</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
