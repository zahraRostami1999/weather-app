import styled from "./weather.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import background from "../../assets/image/background.jpg";
import { useState, useRef } from "react";
import WeatherImage from "../weatherImage/WeatherImage.jsx";

function Weather() {
  const inputRef = useRef();
  const API = "05086f9c1b192c3ea544760f9f7c73d2";
  const [weatherData, setWeatherData] = useState(false);
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData({
        tempurature: Math.floor(data.main.temp) + 1,
        icon: data.weather[0].icon,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  return (
      <div
        className={styled.container}
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className={styled.weatherWrapper}>
          <div className={styled.title}>
            <h2>How is the weather in your city?</h2>
          </div>
          <div className={styled.search}>
            <input ref={inputRef} type="text" placeholder="City:" />
            <button onClick={() => search(inputRef.current.value)}>
              <FontAwesomeIcon
                icon={faSearch}
                size="lg"
                style={{ color: "#333" }}
              />
            </button>
          </div>
          <div className={styled.weatherIcon}>
            <WeatherImage weatherIcon={weatherData.icon} />
          </div>
          <div className={styled.weatherTemp}>
            <h5>{weatherData.tempurature}°C</h5>
          </div>
        </div>
      </div>
  );
}

export default Weather;
