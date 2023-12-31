import { useContext, useEffect } from "react"
import { WeatherContext } from "../context/WeatherContext"
import { ErrorContext } from "../context/ErrorContext"
import { useNavigate } from "react-router-dom"
import { getCurrentPosition } from "../functions/getCurrentPosition"
import { getWeather } from "../functions/getWeather"

export const useHomeWeather = () => {
  const { setWeather } = useContext(WeatherContext)
  const { error, setError } = useContext(ErrorContext)
  const navigate = useNavigate()

  useEffect(() => {
    const asyncFn = async () => {
      if (error.hasError) {
        navigate('/error')
      } else {
        try {
          const position = await getCurrentPosition()
          await getWeather(position, setWeather, setError)
        } catch (error) {
          setError({
            hasError: true,
            errorDescription: 'position error',
          })
        }
      }
    }
    asyncFn()
  }, [setWeather, navigate, setError, error.hasError])
}