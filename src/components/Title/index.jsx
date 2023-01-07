import { useContext } from "react"
import { CurrentWeatherContext } from "../../contexts/CurrentWeatherContext"

import './styles.css'

export const Title = () => {
  const {currentWeather} = useContext(CurrentWeatherContext)
  const country = new Intl.DisplayNames(['en'], {type: 'region'}).of(currentWeather.sys.country)

  return (
    <div className="title-container">
      <a
      href={`https://www.google.com.br/maps/place/${currentWeather.name}`} target="_blank" rel="noreferrer"
      className="title-link">
        <h2 className="title">{currentWeather.name}, {country}</h2>
      </a>
    </div>
  )
}