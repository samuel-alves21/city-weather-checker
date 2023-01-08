import { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { CurrentWeatherContext } from '../../contexts/CurrentWeatherContext'
import { ForecastContext } from '../../contexts/ForecastContext'

import { useFetchData } from '../../hooks/useFetchData'
import { useFetchQueryPosition } from '../../hooks/useFetchQueryPosition'

import { key } from '../../data/apiKey'

import { Title } from '../../components/Title'
import { MainImage } from '../../components/MainImage'
import { Details } from '../../components/Details'
import { Forecast } from '../../components/Forecast'
import { Nav } from  '../../components/Nav'
import { NotFound } from '../../components/NotFound'
import { Loading } from '../../components/Loading'

import './style.css'

export const CitySearchPage = () => {
  const navigate = useNavigate()

  const { currentWeather, setCurrentWeather } = useContext(CurrentWeatherContext)
  const { forecast, setForecast } = useContext(ForecastContext)
  
  const [ position, setPosition ] = useState(null)
  const [ error, setError ] = useState(false)
  const [ notFound, setNotFound ] = useState(false)

  const { state } = useLocation()

  useFetchQueryPosition(state, setPosition, key, setError, setNotFound)

  useFetchData(position, setCurrentWeather, setForecast, setError, key)

  if (error) {
    navigate('/error')
  }

  return (
    <section className='main-container'>
      { !currentWeather && !forecast ? <Loading /> : 
      <section>
        { notFound ? 
        <>
          <Nav />
          <NotFound />
        </> :
        <section className="city-search-container">
          <Nav />
          <section className="content-container">
            <section className='current-weather-section'>
              <Title />
              <MainImage />
              <Details />
          </section>
          <Forecast className='forecast-component'/>
          </section>
        </section> }
      </section> }
    </section>
  )
}
