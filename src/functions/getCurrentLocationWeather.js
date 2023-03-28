import { key } from '../data/apiKey'

export const getCurrentLocationWeather = async (position) => {
  const { lat, lon } = position
  try {
    const currentWeatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
    )

    const forecastData = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
    )

    const resolveCurrentWeatherData = await currentWeatherData.json()
    const resolveForecastData = await forecastData.json()
    console.log(resolveCurrentWeatherData, resolveForecastData)
  } catch (e) {
    console.log(e)
  }
}
