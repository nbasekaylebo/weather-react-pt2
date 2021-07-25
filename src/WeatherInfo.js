import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row flex-column-reverse flex-sm-row">
        <div className="col-12 col-sm-6 mini-card">
          <div className="card">
            <div className="card-body">
              <div className="overview">
                <h1 id="city">{props.data.city}</h1>
                <ul>
                  <li>
                    <FormattedDate date={props.data.date} />
                  </li>
                  {props.data.description}
                </ul>
              </div>
              <div className="row">
                <WeatherTemperature celcius={props.data.temperature} />
                <div className="col-6">
                  <ul>
                    <li>Precipitation: {props.data.precipitation}%</li>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {props.data.wind} km/h</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix">
        <div className="float-right">
          <WeatherIcon code={props.data.icon} />
        </div>
      </div>
    </div>
  );
}
