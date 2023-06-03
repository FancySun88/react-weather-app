import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function ConvertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function ConvertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheitTemperature() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div>
        <strong> {Math.round(props.celsius)}</strong>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={ConvertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <strong>{Math.round(fahrenheitTemperature())}</strong>
        <span className="units">
          <a href="/" onClick={ConvertToCelsius}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
