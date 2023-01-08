import { useEffect } from "react"

export const useFetchData = (position, setCurrentWeather, setForecast, setError, key) => {
  useEffect(() => {
    if (position && position !== 'not found') {
      const {lat, lon} = position
      const exec = async () => {
        try {
          const currentWeatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)

          const forecastData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
  
          const resolveCurrentWeatherData = await currentWeatherData.json()
          const resolveForecastData = await forecastData.json()
  
          setCurrentWeather(resolveCurrentWeatherData)
          setForecast(resolveForecastData)
        }
        catch(e) {
          console.log(e)
          setError(true)
        }
      }
      exec()
    }
  }, [position, setCurrentWeather, setError, setForecast, key])
}