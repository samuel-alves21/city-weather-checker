import { useContext, useState } from 'react'
import { CurrentWeatherContext } from '../../contexts/CurrentWeatherContext'
import { ForecastContext } from '../../contexts/ForecastContext'
import { useFetchData } from '../../hooks/useFetchData'
import { key } from '../../data/apiKey'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFetchQueryPosition } from '../../hooks/useFetchQueryPosition'

import { Title } from '../../components/Title'
import { MainImage } from '../../components/MainImage'
import { Details } from '../../components/Details'
import { Forecast } from '../../components/Forecast'
import { Nav } from  '../../components/Nav'

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
      { !currentWeather && !forecast ? <p>Loading...</p> : 
      <section>
        <Nav />
        <Title />
        <MainImage />
        <Details />
        <Forecast />
      </section> }
    </section>
  )
}
