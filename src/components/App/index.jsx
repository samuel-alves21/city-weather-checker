import { useEffect, useContext, useState } from 'react'
import { Content } from '../Content'
import { CurrentWeatherProvider } from '../../contexts/CurrentWeatherContext'
const key = 'a6658eef49c27518d779e18d06d94340'

export const App = () => {
  const { currentWeather, setCurrentWeather } = useContext(CurrentWeatherProvider)
  
  const [ position, setPosition ] = useState(null)

  useEffect(() => { 
    const success = (position) => {
      setPosition({
        lat: position.coords.latitude,  
        lon: position.coords.longitude,
      })
    }
    const error = (e) => {
      console.log(e)
    }
    navigator.geolocation.getCurrentPosition(success, error)

  }, [ setPosition ])

  useEffect(() => {
    if (position) {
      const {lat, lon} = position
      const exec = async () => {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
        const resolveData = await data.json()
        setCurrentWeather(resolveData)
      }
      exec()
    }
  }, [position, setCurrentWeather])

  return (
    <section className='main-container'>
      { currentWeather ? <Content /> : <p>Loading...</p>}
    </section>
  )
}