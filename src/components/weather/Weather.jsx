import styled from "./weather.module.css";

function Weather() {
  return (
    <div className={styled.container}>
      <div className={styled.weatherWrapper}>
        <div className={styled.title}>
          <h1>Weather App</h1>
        </div>
        <div className={styled.search}>
            <input type="text" placeholder="Enter City:"/>
            
        </div>
      </div>
    </div>
  );
}

export default Weather;
