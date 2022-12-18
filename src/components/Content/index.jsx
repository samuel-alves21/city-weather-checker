import { useContext } from "react"
import { CurrentWeatherProvider } from "../../contexts/CurrentWeatherContext"

export const Content = () => {
  const {currentWeather} = useContext(CurrentWeatherProvider) 

  return (
    <div>
      {currentWeather.name} 
    </div>
  )
}