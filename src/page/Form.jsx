import React, {useState, useEffect, useContext} from 'react'
import Maps from './Map';
import Weather from './Weather';
import WeatherContext from '../WeatherContext';

const cities = [
    {
      name: "London",
      latitude: 51.500152,
      longitude: -0.126236,
    },
    {
      name: "Paris",
      latitude: 48.853410,
      longitude: 2.348806,
    },
    {
      name: "New York",
      latitude: 40.712783,
      longitude: -74.005941,
    },
    {
      name: "Los Angeles",
      latitude: 34.052234,
      longitude: -118.243685,
    },
    {
      name: "Tokyo",
      latitude: 35.689501,
      longitude: 139.691711,
    },
    {
      name: "Beijing",
      latitude: 39.907501,
      longitude: 116.397222,
    },
    {
      name: "Shanghai",
      latitude: 31.222222,
      longitude: 121.458333,
    },
    {
      name: "Seoul",
      latitude: 37.566667,
      longitude: 126.977778,
    },
    {
      name: "Mumbai",
      latitude: 19.076091,
      longitude: 72.877500,
    },
    {
      name: "Delhi",
      latitude: 28.613944,
      longitude: 77.209444,
    },
    {
      name: "São Paulo",
      latitude: -23.550556,
      longitude: -46.633333,
    },
    {
      name: "Mexico City",
      latitude: 19.432611,
      longitude: -99.133333,
    },
    {
      name: "Buenos Aires",
      latitude: -34.603611,
      longitude: -58.381944,
    },
    {
      name: "Cairo",
      latitude: 30.062500,
      longitude: 31.239444,
    },
    {
      name: "Lagos",
      latitude: 6.463611,
      longitude: 3.379444,
    },
    {
      name: "Kinshasa",
      latitude: -4.329722,
      longitude: 15.329444,
    },
    {
      name: "Rio de Janeiro",
      latitude: -22.902778,
      longitude: -43.207222,
    },
    {
      name: "Sydney",
      latitude: -33.868889,
      longitude: 151.207222,
    },
    {
      name: "Melbourne",
      latitude: -37.813889,
      longitude: 144.963889,
    },
    {
      name: "Toronto",
      latitude: 43.653056,
      longitude: -79.383333,
    },
  ];

export default function Form() {
    const { setLatitude, setLongitude, setCityName } = useContext(WeatherContext)
    const [searchInput, setSearchInput] = useState("")

    const filterSearch = cities.filter((city) => {
        const cityLower = city.name.toLocaleLowerCase()
        const searchLower = searchInput.toLocaleLowerCase()
        return cityLower.includes(searchLower)
    })

    const handleFormSubmit = (e) => {
      e.preventDefault()
    }

    const handleClick = (currentCity) => {
      setLatitude(currentCity.latitude)
      setLongitude(currentCity.longitude)
      setCityName(currentCity.name)
      setSearchInput("")
    }

  return (
    <div>
      <div>
          <form className='w-full' onSubmit={handleFormSubmit}>
              <input 
                  placeholder='Input location'
                  className='w-[80%] h-12 border p-3'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}    
              />
              <button className='h-12 bg-green-500 rounded hover:bg-green-700 w-[20%]' type='submit' >Search</button>
          </form>

          <div className='flex flex-col lg:max-h-[74vh] max-h-[22vh] pt-2 overflow-scroll'>
              {filterSearch.map((currentCity, i) => {
                  return (
                      <div key={i} onClick={() => handleClick(currentCity)} className='bg-yellow-600 hover:bg-yellow-800 w-[70%] h-20 rounded  mx-auto my-3 cursor-pointer'>
                          <h3 className='flex justify-center items-center text-white'>{currentCity.name}</h3>
                      </div>
                  )
              })}
          </div>
      </div>

      <div className='hidden'>
        <Weather />
      </div>
    </div>
  )
}
