import styled from "./weather.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

function Weather() {
  return (
    <div className={styled.container}>
      <div className={styled.weatherWrapper}>
        <div className={styled.title}>
          <h1>Weather App</h1>
        </div>
        <div className={styled.search}>
          <input type="text" placeholder="Enter City:" />
          <button>
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              style={{ color: "black" }}
            />
          </button>
        </div>
        <div className={styled.weatherIcon}>
          <FontAwesomeIcon icon={faSun} size="9x" color="orange" />
        </div>
        <div className={styled.weatherTemp}>
            <h3>20°C</h3>
        </div>
      </div>
    </div>
  );
}

export default Weather;
