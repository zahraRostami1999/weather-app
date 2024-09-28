import { getCurrentWeather } from "./API.js";
import "./App.css";

const cities = [
  {
    name: "Tehran",
    lat: "35.7219",
    lon: "51.3347",
  },
  {
    name: "Ardbil",
    lat: "38.2432",
    lon: "48.2976",
  },
  {
    name: "Tokyo",
    lat: "35.6764",
    lon: "139.6500",
  },
];

function App() {

  const handleChange = (e) => {
    const cityValue = e.target.value; // cityValue Type = string
    const setCity = JSON.parse(cityValue); // setCity Type = object
    
    getCurrentWeather(setCity.lat, setCity.lon).then((weather) => {
      console.log(weather); 
    });

    
  };
  return (
    <div className="App">
      <h1>Welcome To Weather App</h1>
      <h3>Select your location</h3>
      <select onChange={handleChange}>
        {cities.map((city) => (
          <option key={city.name} value={JSON.stringify(city)}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
