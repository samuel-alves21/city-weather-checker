import { useEffect, useContext, useState } from 'react'
import { Content } from '../Content'
import { CurrentWeatherContext } from '../../contexts/CurrentWeatherContext'
import { ForecastContext } from '../../contexts/ForecastContext'
const key = 'a6658eef49c27518d779e18d06d94340'

export const App = () => {
  const { currentWeather, setCurrentWeather } = useContext(CurrentWeatherContext)
  const { forecast, setForecast } = useContext(ForecastContext)
  
  const [ position, setPosition ] = useState(null)
  const [ error, setError ] = useState(false)
  const [counter, setCounter] = useState(0)


  useEffect(() => { 
    const success = (position) => {
      setPosition({
        lat: position.coords.latitude,  
        lon: position.coords.longitude,
      })
    }
    const error = (e) => {
      console.log(e)
      setError(true)
    }

    navigator.geolocation.getCurrentPosition(success, error)
  }, [ setPosition ])

  useEffect(() => {
    if (position) {
      const {lat, lon} = position

      const exec = async () => {
        try {
          const currentWeatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)

          const forecastData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`)
  
          const resolveCurrentWeatherData = await currentWeatherData.json()
          const resolveForecastData = await forecastData.json()
  
          setCurrentWeather(resolveCurrentWeatherData)
          setForecast(resolveForecastData)
          setCounter((counter) => counter + 1)
        }
        catch(e) {
          console.log(e)
          setError(true)
        }
      }
      exec()
    }
  }, [position, setCurrentWeather, setForecast, setCounter])

  console.log(forecast)
  console.log(currentWeather)

  if (error) {
    return (
      <div>
        <h1>Error 404</h1>
        <p>Parece que não consegui carregar os dados -(</p>
      </div>
    )
  }
  return (
    <section className='main-container'>
      <h1>{counter}</h1>
      { currentWeather && forecast ? <Content /> : <p>Loading...</p>}
    </section>
  )
}