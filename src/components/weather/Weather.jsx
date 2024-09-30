import styled from "./weather.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

function Weather() {

    const weather = () => {
        const search = async (city) => {
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.API_ID}`
            const response = await fetch(url);
            const data = await response.json();
            console.log(data); // Display the weather data in the console for testing purposes
        }
        catch(error){
            console.error("Error fetching weather data:", error);
        }
    }
}

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
