import React from "react";
import "./Weather.css";

export default function Weather() {
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
                      <h1 id="city">London</h1>
                      <ul>
                        <li>
                          <span id="date">Thursday 17:00</span>
                        </li>
                        <li id="description">Sunny</li>
                      </ul>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="clearfix weather-temperature">
                          <div className="float-left">
                            <span className="temperature">25</span>
                            <span className="units"> °C</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <ul>
                          <li>
                            Precipitation: <span id="precipitation">0</span>%
                          </li>
                          <li>
                            Humidity: <span id="humidity">0</span>%
                          </li>
                          <li>
                            Wind: <span id="wind">3</span> km/h
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="todays-icon col-12 col-sm-4"
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              id="icon"
              alt="weather icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
