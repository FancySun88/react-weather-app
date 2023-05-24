import "./App.css";

function App() {
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
                autocomplete="off"
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
        <h1>Kyiv, UA</h1>
        <ul>
          <li>Sunday {""}17:20</li>
          <li>
            May{""} 24{""}2023
          </li>
          <li>Overcast clouds</li>
        </ul>
      </div>
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <div className="clearfix Weather-temperature">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="Clear"
                id="icon"
                className="float-left"
              />
              <div className="float-left">
                <strong>12</strong>
                <span className="units">
                  <a href="/"> °C</a>| <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul className="Weather-description">
              <li>Humidity: 39%</li>
              <li>Wind: 1 m/s</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="Footer">
        <a href="https://github.com/FancySun88/react-weather-app">
          Open-source code
        </a>{" "}
        by Iryna Zhelezniak, 2023
      </footer>
    </div>
  );
}

export default App;
