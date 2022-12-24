import { useContext } from "react"
import { CurrentWeatherContext } from "../../../contexts/CurrentWeatherContext"

export const Title = () => {
  const {currentWeather} = useContext(CurrentWeatherContext)
  const country = new Intl.DisplayNames(['en'], {type: 'region'}).of(currentWeather.sys.country)

  return (
    <h1>{currentWeather.name}, {country}</h1>
  )
}