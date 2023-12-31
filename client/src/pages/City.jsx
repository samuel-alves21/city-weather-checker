import styled from 'styled-components'
import { useContext } from 'react'
import { NavBar } from '../components/NavBar'
import { WeatherContext } from '../context/WeatherContext'
import { Loader } from '../components/Loader'
import { Content } from '../components/Content'
import { useParams } from 'react-router-dom'
import { useSearchedWeather } from '../hooks/useSearchedWeather'

export const City = () => {
  const { weather } = useContext(WeatherContext)
  const { name } = useParams()

  useSearchedWeather()

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
