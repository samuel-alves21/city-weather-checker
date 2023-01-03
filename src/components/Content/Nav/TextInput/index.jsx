import { useContext, useRef, useState } from "react"
import { useNavigate,} from "react-router-dom"
import { CurrentWeatherContext } from "../../../../contexts/CurrentWeatherContext"
import { ForecastContext } from "../../../../contexts/ForecastContext"

import './styles.css'

export const TextInput = () => {
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()
  const input = useRef(null)

  const { currentWeather ,setCurrentWeather } = useContext(CurrentWeatherContext)
  const { setForecast } = useContext(ForecastContext)
  

  const handleclick = () => {
    if (currentWeather.name.toLowerCase() === inputValue.toLowerCase()) return
    if (!inputValue) return
    setCurrentWeather(null)
    setForecast(null)

    navigate(`/city/${inputValue}`, { state: inputValue })
    input.current.blur()
    
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (!inputValue) return
    if (e.key === 'Enter') handleclick()
  }

  const cleanInput = () => {
    input.current.value = ''
  }

  return (
    <section className="input-container">
      <input ref={input} type="text" onChange={handleChange} onKeyDown={handleKeyDown} placeholder="city search"/>
      <span onClick={cleanInput} className="remove-text">X</span>
      <button type="submit" onClick={handleclick}>search</button>
    </section>
  )
}
