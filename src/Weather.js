import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      precipitation: 1,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "164d437e2d00bd82847b8e871b123f28";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Weather-wrapper">
          <div className="background">
            <div className="Weather-app">
              <form onSubmit={handleSubmit} className="mb-3">
                <div className="row">
                  <div className="col-6 mb-3 mb-sm-0">
                    <input
                      type="search"
                      placeholder="Check your city"
                      className="form-control"
                      id="city-input"
                      autoComplete="off"
                      autoFocus="on"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-3 col-sm-2">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-outline-secondary w-100"
                    />
                  </div>
                  <div className="col-3 col-sm-2">
                    <button
                      className="btn btn-outline-secondary w-100"
                      id="current-location-button"
                    >
                      Current
                    </button>
                  </div>
                </div>
              </form>
              <WeatherInfo data={weatherData} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
