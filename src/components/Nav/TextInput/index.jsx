import { useContext, useRef, useState } from "react"
import { useNavigate,} from "react-router-dom"
import { CurrentWeatherContext } from "../../../contexts/CurrentWeatherContext"
import { ForecastContext } from "../../../contexts/ForecastContext"

import SearchIcon from '@material-ui/icons/Search';

import './styles.css'

export const TextInput = () => {
  const [ inputValue, setInputValue ] = useState('')
  const [ inputClass, setInputClass ] = useState('')

  const navigate = useNavigate()
  
  const input = useRef(null)

  const { setCurrentWeather } = useContext(CurrentWeatherContext)
  const { setForecast } = useContext(ForecastContext)
  

  const handleclick = () => {
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

  const handleFocus = () => {
    setInputClass('input-container--focus')
  }

  const handleBlur = () => {
    setInputClass('')
  }

  return (
    <section className={`input-container ${inputClass}`}>
      <input
        ref={input} 
        type="text" 
        onChange={handleChange} 
        onKeyDown={handleKeyDown} 
        placeholder="city search"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <span onClick={cleanInput} className="remove-text">X</span>
      <button type="submit" onClick={handleclick}><SearchIcon className="search-icon" /></button>
    </section>
  )
}
