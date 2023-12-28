import { key } from '../data/apiKey'

export const getWeather = async (position, setWeather, setError) => {
  const { lat, lon } = position
  try {
    const currentWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
    ).then((resolve) => resolve.json())

    const forecast = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
    ).then((resolve) => resolve.json())

    setError({
      hasError: false,
      errorDescription: '',
    })
    setWeather({ currentWeather, forecast })
  } catch (e) {
    console.log(e)
    setError({
      hasError: true,
      errorDescription: 'weather error',
    })
  }
}
