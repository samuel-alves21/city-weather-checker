import { useContext } from "react"
import { CurrentWeatherContext } from "../../contexts/CurrentWeatherContext"

import './styles.css'

export const MainImage = () => {

  const { currentWeather } = useContext(CurrentWeatherContext)

  return (
    <div className="div-img">
      <img src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt="Main Icon" />
    </div>
  )
}
