import styled from "./weather.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";
import WeatherImage from '../weatherImage/WeatherImage.jsx';

function Weather() {
    const inputRef = useRef()
  const API = "05086f9c1b192c3ea544760f9f7c73d2";
  const [weatherData, setWeatherData] = useState(false);
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data); // Display the weather data in the console for testing purposes
      setWeatherData({
        tempurature: Math.floor(data.main.temp),
        icon: data.weather[0].icon
      });
      console.log(weatherData); 
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    search("Germi");
  }, []);

  return (
    <div className={styled.container}>
      <div className={styled.weatherWrapper}>
        <div className={styled.title}>
          <h1>Weather App</h1>
        </div>
        <div className={styled.search}>
          <input ref={inputRef} type="text" placeholder="City:" />
          <button onClick={() => search(inputRef.current.value)}>
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              style={{ color: "black" }}
            />
          </button>
        </div>
        <div className={styled.weatherIcon}>
          <WeatherImage weatherIcon={weatherData.icon} />
        </div>
        <div className={styled.weatherTemp}>
          <h3>{weatherData.tempurature}°C</h3>
        </div>
      </div>
    </div>
  );
}

export default Weather;
