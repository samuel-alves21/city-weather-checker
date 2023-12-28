import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { NavBar } from '../components/NavBar'
import { getWeather } from '../functions/getWeather'
import { WeatherContext } from '../context/WeatherContext'
import { Loader } from '../components/Loader'
import { Content } from '../components/Content'
import { useNavigate, useParams } from 'react-router-dom'
import { ErrorContext } from '../context/ErrorContext'
import { getCityLocation } from '../functions/getCityLocation'

export const City = () => {
  const { weather, setWeather } = useContext(WeatherContext)
  const { error, setError } = useContext(ErrorContext)
  const { name } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const position = await getCityLocation(name, setError)
      getWeather(position, setWeather, setError)
    }

    if (error.hasError) {
      navigate('/error')
    } else {
      fetchData()
    }
  }, [setWeather, navigate, setError, error.hasError, name])

  return (
    <HomeWrapper>
      <NavBar citySearched={name} />
      {weather ? <Content /> : <Loader />}
    </HomeWrapper>
  )
}

const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`
