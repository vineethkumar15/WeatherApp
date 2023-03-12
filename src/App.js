import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5c858641810f4566d4ba00e7f2223881&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <h2>Weather App</h2>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter a Location"
          onKeyDown={searchLocation}
        ></input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name != undefined && (
          <div className="bottom">
            <div className="feels">
              <p className="bottomFont">Feels Like</p>
              {data.main ? <p>{data.main.feels_like}°c</p> : null}
            </div>
            <div className="humidity">
              <p className="bottomFont">Humidity</p>
              {data.main ? <p>{data.main.humidity}%</p> : null}
            </div>
            <div className="wind">
              <p className="bottomFont">Wind Speed</p>
              {data.wind ? <p>{data.wind.speed}mph</p> : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
