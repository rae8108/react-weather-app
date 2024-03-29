import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weatherinfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          {" "}
          <FormattedDate date={props.data.date} />{" "}
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row mt-2">
        <div class="col-6 d-flex">
          <div class="float-left">
            <WeatherIcon code={props.data.icon} size={80} />
          </div>
          <div class="float-left">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6 ">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}mp/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
