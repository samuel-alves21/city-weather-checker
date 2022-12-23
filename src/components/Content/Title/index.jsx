import { useContext } from "react"
import { CurrentWeatherProvider } from "../../../contexts/CurrentWeatherContext"

export const Title = () => {
  const {currentWeather} = useContext(CurrentWeatherProvider)
  const country = new Intl.DisplayNames(['en'], {type: 'region'}).of(currentWeather.sys.country)

  console.log(currentWeather)

  return (
    <h1>{currentWeather.name}, {country}</h1>
  )
}