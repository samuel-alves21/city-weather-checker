import { baseUrl } from '../utils/api'

export const getWeather = async (position, setWeather, setError) => {
  const { lat, lon } = position
  try {
    const currentWeatherResponse = await fetch(`${baseUrl}/weather/current/${lat}/${lon}`)
    const forecastResponse = await fetch(`${baseUrl}/weather/forecast/${lat}/${lon}`)
    if (!currentWeatherResponse.ok || !forecastResponse.ok) {
      setError({
        hasError: true,
        errorDescription: 'weather error',
      })
    } else {
      const currentWeather = await currentWeatherResponse.json()
      const forecast = await forecastResponse.json()
  
      setError({
        hasError: false,
        errorDescription: '',
      })
      setWeather({ currentWeather, forecast })
    }
  } catch (e) {
    console.log(e)
    setError({
      hasError: true,
      errorDescription: 'server error',
    })
  }
}
