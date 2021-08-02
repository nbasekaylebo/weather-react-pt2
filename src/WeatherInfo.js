import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <h1 id="city">{props.data.city}</h1>
                  <ul>
                    <li>
                      <FormattedDate date={props.data.date} />
                    </li>
                    {props.data.description}
                  </ul>
                </div>
                <div className="col-6">
                  <div className="wiDetails">
                    <ul>
                      <li>Humidity: {props.data.humidity}%</li>
                      <li>Wind: {props.data.wind} km/h</li>
                    </ul>
                  </div>
                </div>
                <div className="float-left">
                  <WeatherTemperature celcius={props.data.temperature} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 ">
          <WeatherIcon code={props.data.icon} size={200} />
        </div>
      </div>
    </div>
  );
}
