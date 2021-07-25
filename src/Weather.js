import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      precipitation: 1,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `https://ssl.gstatic.com/onebox/weather/64/sunny.png`,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Weather-wrapper">
          <div className="background">
            <div className="Weather-app">
              <form id="search-form" className="mb-3">
                <div className="row">
                  <div className="col-6 mb-3 mb-sm-0">
                    <input
                      type="search"
                      placeholder="Check your city"
                      className="form-control"
                      id="city-input"
                      autoComplete="off"
                      autoFocus="on"
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

              <div className="row flex-column-reverse flex-sm-row">
                <div className="col-12 col-sm-6 mini-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="overview">
                        <h1 id="city">{weatherData.city}</h1>
                        <ul>
                          <li>
                            <FormattedDate date={weatherData.date} />
                          </li>
                          {weatherData.description}
                        </ul>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="clearfix weather-temperature">
                            <div className="float-left">
                              <span className="temperature">
                                {Math.round(weatherData.temperature)}
                              </span>
                              <span className="units"> °C</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <ul>
                            <li>Precipitation: {weatherData.precipitation}%</li>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind} km/h</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="todays-icon col-12 col-sm-4"
                src={weatherData.iconUrl}
                id="icon"
                alt={weatherData.descripttion}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "164d437e2d00bd82847b8e871b123f28";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
