import React, { useState } from 'react';
import WeatherContext from './WeatherContext';

const WeatherProvider = ({ children }) => {
  const [cityName, setCityName] = useState("");
  const [temps, setTemps] = useState(null);
  const [hum, setHum] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  return (
    <WeatherContext.Provider value={{
      cityName, setCityName, 
      temps, setTemps, 
      hum, setHum, 
      latitude, setLatitude, 
      longitude, setLongitude
    }}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;
