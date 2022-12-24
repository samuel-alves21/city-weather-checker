import { getDate } from "../../../functions/getDate"
import { useContext } from "react"
import { CurrentWeatherContext } from "../../../contexts/CurrentWeatherContext"

export const Details = () => {

  const [day, month, dayOfMonth, year] = getDate()
  const { currentWeather } = useContext(CurrentWeatherContext)
  const { main, description } = currentWeather.weather[0]
  const { temp_max, temp_min } = currentWeather.main

  return (
    <>
    <p>Details here...  {day}, {month} {dayOfMonth}, {year}</p>
    <p>{main}, {description}</p>
    <div style={{'display': 'flex', 'width': '300px', 'justifyContent': 'space-between'}}>
      <p>Max: {temp_max}℃</p>
      <p>Min: {temp_min}℃</p>
    </div>
    </>
  )
}