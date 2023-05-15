import React, {useState, useEffect, useContext} from 'react'
import Maps from './Map';
import Weather from './Weather';
import WeatherContext from '../WeatherContext';
import { cities } from '../cities';


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

          <div className='flex flex-col lg:max-h-[74vh] max-h-[22vh] pt-2 overflow-y-scroll'>
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
