import { useState } from "react"
import { createContext } from 'react'

export const CurrentWeatherProvider = createContext()

export const CurrentWeatherContext = ({children}) => {

  const [currentWeather, setCurrentWeather] = useState(null)

  return (
    <CurrentWeatherProvider.Provider value={{ currentWeather, setCurrentWeather, }}>
      {children}
    </CurrentWeatherProvider.Provider>
  )
}