import { key } from '../data/apiKey'

export const getCityLocation = async (cityName, setError) => {
  try {
    const cityLocation = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${key}`
    ).then((response) => response.json())

    return { lat: cityLocation[0].lat, lon: cityLocation[0].lon }
  } catch (e) {
    console.log(e)
    setError({
      hasError: true,
      errorDescription: 'city not found',
    })
  }
}
