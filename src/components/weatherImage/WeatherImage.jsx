import styled from "./weatherImage.module.css";
import clear from "../../assets/image/1.webp";
import fewClouds from "../../assets/image/2.webp";
import brokenClouds from "../../assets/image/4.webp";
import showerRain from "../../assets/image/9.webp";
import thunderstorm from "../../assets/image/11.webp";
import snow from "../../assets/image/13.webp";
import mist from "../../assets/image/50.webp";

function WeatherImage(props) {
  const image = {
    "01d": clear,
    "01n": clear,
    "02d": fewClouds,
    "02n": fewClouds,
    "03d": brokenClouds,
    "03n": brokenClouds,
    "04d": brokenClouds,
    "04n": brokenClouds,
    "09d": showerRain,
    "09n": showerRain,
    "10d": showerRain,
    "10n": showerRain,
    "11d": thunderstorm,
    "11n": thunderstorm,
    "13d": snow,
    "13n": snow,
    "50d": mist,
    "50n": mist
  };

  const iconSrc = image[props.weatherIcon];
  
  return <div className={styled.image}><img src={iconSrc} alt={props.weatherIcon} /></div>;
}


export default WeatherImage;
