import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      precipitation: 1,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function currentPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "164d437e2d00bd82847b8e871b123f28";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function currentPositionEx() {
    navigator.geolocation.getCurrentPosition(currentPosition);
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
                      type="text"
                      value="position"
                      className="btn btn-outline-secondary w-100"
                      onClick={currentPositionEx}
                    >
                      Current
                    </button>
                  </div>
                </div>
              </form>
              <WeatherInfo data={weatherData} />
              <WeatherForecast coordinates={weatherData.coordinates} />
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
