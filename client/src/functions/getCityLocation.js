import { baseUrl } from '../utils/api'

export const getCityLocation = async (cityName, setError) => {
  try {
    const response = await fetch(`${baseUrl}/position/${cityName}`)
    if (!response.ok) {
      setError({
        hasError: true,
        errorDescription: 'city not found',
      })
      return false
    } else {
      const cityLocation = await response.json()
      return { lat: cityLocation[0].lat, lon: cityLocation[0].lon }
    }
  } catch (e) {
    console.log(e)
    setError({
      hasError: true,
      errorDescription: 'city not found',
    })
    return false
  }
}
