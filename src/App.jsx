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

  return (
    <div className="App">
      <select onchange={handleChange}>
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
