import { useContext, useState } from 'react'
import { CurrentWeatherContext } from '../../contexts/CurrentWeatherContext'
import { ForecastContext } from '../../contexts/ForecastContext'
import { useFetchData } from '../../hooks/useFetchData'
import { key } from '../../data/apiKey'
import { useFetchPosition } from '../../hooks/useFetchPosition'
import { useNavigate } from 'react-router-dom'

import { Title } from '../../components/Title'
import { MainImage } from '../../components/MainImage'
import { Details } from '../../components/Details'
import { Forecast } from '../../components/Forecast'
import { Nav } from  '../../components/Nav'
import { Loading } from '../../components/Loading'
import { useMediaQuery } from 'react-responsive'

import './style.css'

export const Home = () => {
  const navigate = useNavigate()

  const minDeviceWidth = useMediaQuery({query: '(min-device-width: 480px)'})
  const maxDeviceWidth = useMediaQuery({query: '(min-device-width: 640px)'})
  const middlewidth = useMediaQuery({query: '(max-width: 768px)'})

  const { currentWeather, setCurrentWeather } = useContext(CurrentWeatherContext)
  const { forecast, setForecast } = useContext(ForecastContext)
  
  const [ position, setPosition ] = useState(null)
  const [ error, setError ] = useState(false)

  useFetchPosition(setPosition, setError)

  useFetchData(position, setCurrentWeather, setForecast, setError, key)

  if (error) {
    navigate('/error')
  }

  console.log(minDeviceWidth)
  console.log(maxDeviceWidth)

  if (minDeviceWidth && maxDeviceWidth && middlewidth) {
    return (
      <section className='home'>
      { !currentWeather && !forecast ? 
      <Loading /> :
      <section className='home-content'>
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
    </section>
    )
  }

  return (
    <section className='home'>
      { !currentWeather && !forecast ? 
      <Loading /> :
      <section className='home-content'>
        <Nav />
        <Title />
        <MainImage />
        <Details />
        <Forecast />
      </section> }
    </section>
  )
}