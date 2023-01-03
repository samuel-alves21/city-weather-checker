import { useContext, useState } from 'react'
import { Content } from '../../components/Content'
import { CurrentWeatherContext } from '../../contexts/CurrentWeatherContext'
import { ForecastContext } from '../../contexts/ForecastContext'
import { useFetchData } from '../../hooks/useFetchData'
import { key } from '../../data/apiKey'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFetchQueryPosition } from '../../hooks/useFetchQueryPosition'

export const CitySearchPage = () => {
  const navigate = useNavigate()

  const { currentWeather, setCurrentWeather } = useContext(CurrentWeatherContext)
  const { forecast, setForecast } = useContext(ForecastContext)
  
  const [ position, setPosition ] = useState(null)
  const [ error, setError ] = useState(false)

  const { state } = useLocation()

  useFetchQueryPosition(state, setPosition, key, setError)

  useFetchData(position, setCurrentWeather, setForecast, setError, key)

  if (error) {
    navigate('/error')
  }

  return (
    <section className='main-container'>
      { currentWeather && forecast ? <Content /> : <p>Loading...</p>}
    </section>
  )
}
