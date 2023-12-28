import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { NavBar } from '../components/NavBar'
import { getWeather } from '../functions/getWeather'
import { getPosition } from '../functions/getPosition'
import { WeatherContext } from '../context/WeatherContext'
import { Loader } from '../components/Loader'
import { Content } from '../components/Content'
import { useNavigate } from 'react-router-dom'
import { ErrorContext } from '../context/ErrorContext'

export const Home = () => {
  const { weather, setWeather } = useContext(WeatherContext)
  const { error, setError } = useContext(ErrorContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (error.hasError) {
      navigate('/error')
    } else {
      getPosition()
        .then(
          async (resolve) => await getWeather(resolve, setWeather, setError)
        )
        .catch((error) => {
          console.log(error)
          setError({
            hasError: true,
            errorDescription: 'position error',
          })
        })
    }
  }, [setWeather, navigate, setError, error.hasError])

  return (
    <HomeWrapper>
      <NavBar />
      {weather ? <Content /> : <Loader />}
    </HomeWrapper>
  )
}

const HomeWrapper = styled.section`
  display: flex;  
  flex-direction: column;
  padding-bottom: 20px;
`
