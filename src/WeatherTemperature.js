import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function fahrenheit() {
    return (props.celcius * 9) / 5 + 32;
  }

  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <div className="row">
          <div className="col-5">
            <div className="clearfix">
              <div className="float-left">
                <span className="temperature">{Math.round(props.celcius)}</span>
                <span className="units">
                  {" "}
                  °C ⎮{" "}
                  <a href="/" onClick={showFahrenheit}>
                    °F
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div className="row">
          <div className="col-5">
            <div className="clearfix">
              <div className="float-left">
                <span className="temperature">{Math.round(fahrenheit())}</span>
                <span className="units">
                  {" "}
                  <a href="/" onClick={showCelcius}>
                    °C{" "}
                  </a>
                  ⎮ °F
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
