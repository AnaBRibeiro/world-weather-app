import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="day">Thursday</div>
          <div>
            <img
              className="weather-forecast-icon"
              src="https://openweathermap.org/img/wn/04d@2x.png"
              alt="weather forecast icon"
            />
          </div>
          <div>
            <span className="value-temperature-forecast-max">10º</span>
            <span className="value-temperature-forecast-min">5º</span>
          </div>
        </div>
        <div className="col">
          <div className="day">Friday</div>
          <div>
            <img
              className="weather-forecast-icon"
              src="https://openweathermap.org/img/wn/09d@2x.png"
              alt="weather forecast icon"
            />
          </div>
          <div>
            <span className="value-temperature-forecast-max">11º</span>
            <span className="value-temperature-forecast-min">5º</span>
          </div>
        </div>
        <div className="col">
          <div className="day">Saturday</div>
          <div>
            <img
              className="weather-forecast-icon"
              src="https://openweathermap.org/img/wn/03d@2x.png"
              alt="weather forecast icon"
            />
          </div>
          <div>
            <span className="value-temperature-forecast-max">10º</span>
            <span className="value-temperature-forecast-min">4º</span>
          </div>
        </div>
        <div className="col">
          <div className="day">Sunday</div>
          <div>
            <img
              className="weather-forecast-icon"
              src="https://openweathermap.org/img/wn/02d@2x.png"
              alt="weather forecast icon"
            />
          </div>
          <div>
            <span className="value-temperature-forecast-max">12º</span>
            <span className="value-temperature-forecast-min">6º</span>
          </div>
        </div>
        <div className="col">
          <div className="day">Monday</div>
          <div>
            <img
              className="weather-forecast-icon"
              src="https://openweathermap.org/img/wn/03d@2x.png"
              alt="weather forecast icon"
            />
          </div>
          <div>
            <span className="value-temperature-forecast-max">10º</span>
            <span className="value-temperature-forecast-min">5º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
