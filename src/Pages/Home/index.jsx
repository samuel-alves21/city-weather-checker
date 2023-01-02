import { useContext, useState } from 'react'
import { Content } from '../../components/Content'
import { CurrentWeatherContext } from '../../contexts/CurrentWeatherContext'
import { ForecastContext } from '../../contexts/ForecastContext'
import { useFetchData } from '../../hooks/useFetchData'
import { key } from '../../data/apiKey'
import { Error } from '../../components/Content/Error'
import { useFetchPosition } from '../../hooks/useFetchPosition'

export const Home = () => {
  const { currentWeather, setCurrentWeather } = useContext(CurrentWeatherContext)
  const { forecast, setForecast } = useContext(ForecastContext)
  
  const [ position, setPosition ] = useState(null)
  const [ error, setError ] = useState(false)

  useFetchPosition(setPosition, setError)

  useFetchData(position, setCurrentWeather, setForecast, setError, key)

  if (error) return <Error />

  return (
    <section className='main-container'>
      { currentWeather && forecast ? <Content /> : <p>Loading...</p>}
    </section>
  )
}