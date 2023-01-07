import { getDate } from "../../functions/getDate"
import { useContext } from "react"
import { CurrentWeatherContext } from "../../contexts/CurrentWeatherContext"

import './styles.css'

export const Details = () => {

  const [day, month, dayOfMonth, year] = getDate()
  const { currentWeather } = useContext(CurrentWeatherContext)
  const { main, description } = currentWeather.weather[0]
  const { temp_max, temp_min, temp } = currentWeather.main

  return (
    <section className="section-details">
      <p className="date">{day}, {month} {dayOfMonth}, {year}</p>
      <h2 className="title-description">{main}, {description}</h2>
      <h2 className="main-temp">{temp}&#x2103;</h2>
      <section className="temp-section">
        <h4 className="min-max-temp">{temp_min}&#x2103;</h4>
        <h4 className="min-max-temp">{temp_max}&#x2103;</h4>
      </section>
    </section>

    
  )
}