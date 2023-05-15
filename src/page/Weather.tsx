import React, { useEffect, useState, useContext } from 'react'
import WeatherContext from '../WeatherContext';

const Weather = () => {
    // const apiKey = process.env.REACT_APP_API_KEY
    const { setTemps, setHum, cityName } = useContext(WeatherContext);
    const [weatherData, setWeatherData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(cityName){
            setLoading(true)
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName || "London"}&appid=893fa2b117647bf475a44758b62349ff&units=metric`)
                .then(res => res.json())
                .then( data => {
                    setWeatherData(data)
                    setHum(data.main?.humidity)
                    setTemps(data.main?.temp)
                    setLoading(false)
                    console.log(data)
                })
                .catch(err => {
                    console.log(err)
                    setLoading(false)
                })
        }
    }, [cityName, setHum, setTemps])

    if(!weatherData){
        return <div>No weather available</div>
    }

}

export default Weather