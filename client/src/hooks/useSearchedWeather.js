import { useContext, useEffect } from "react"
import { getCityLocation } from "../functions/getCityLocation"
import { getWeather } from "../functions/getWeather"
import { WeatherContext } from "../context/WeatherContext"
import { ErrorContext } from "../context/ErrorContext"
import { useNavigate, useParams } from "react-router-dom"

export const useSearchedWeather = () => {
  const { setWeather } = useContext(WeatherContext)
  const { error, setError } = useContext(ErrorContext)
  const { name } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const asyncFn = async () => {
      const position = await getCityLocation(name, setError)
      if (position) await getWeather(position, setWeather, setError)
    }

    if (error.hasError) {
      navigate('/error')
    } else {
      asyncFn()
    }
  }, [setWeather, navigate, setError, error.hasError, name])
}