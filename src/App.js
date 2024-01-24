import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer className="text-center footer">
          <small>
            This project was created by Rayan and is{" "}
            <a
              href="https://github.com/rae8108/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://glittering-froyo-25c68f.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
