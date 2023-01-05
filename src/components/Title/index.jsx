import { useContext } from "react"
import { CurrentWeatherContext } from "../../contexts/CurrentWeatherContext"

import './styles.css'

export const Title = () => {
  const {currentWeather} = useContext(CurrentWeatherContext)
  const country = new Intl.DisplayNames(['en'], {type: 'region'}).of(currentWeather.sys.country)

  return (
    <h2 className="title">{currentWeather.name}, {country}</h2>
  )
}