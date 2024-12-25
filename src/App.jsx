import React from 'react';
import Weather from './components/weather/Weather.jsx';

function App() {
  document.title = "Weather";
  return (
    <div className='App'>
      <Weather />
    </div>
  )
}

export default App
