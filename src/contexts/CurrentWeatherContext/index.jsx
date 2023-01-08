import { useState, createContext } from "react"

export const CurrentWeatherContext = createContext()

export const CurrentWeatherProvider = ({children}) => {

  const [currentWeather, setCurrentWeather] = useState(null)

  return (
    <CurrentWeatherContext.Provider value={{ currentWeather, setCurrentWeather, }}>
      {children}
    </CurrentWeatherContext.Provider>
  )
}