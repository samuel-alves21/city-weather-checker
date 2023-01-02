import { useContext, useState } from "react"
import { useNavigate,} from "react-router-dom"
import { CurrentWeatherContext } from "../../../contexts/CurrentWeatherContext"
import { ForecastContext } from "../../../contexts/ForecastContext"

export const CitySearch = () => {
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()

  const { setCurrentWeather } = useContext(CurrentWeatherContext)
  const { setForecast } = useContext(ForecastContext)
  

  const handleclick = () => {
    setCurrentWeather(null)
    setForecast(null)

    navigate(`/city/${inputValue}`, {
      state: inputValue
    })
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <section className="input-container">
      <input type="text" onChange={handleChange}/>
      <button type="submit" onClick={handleclick}>submit</button>
    </section>
  )
}
