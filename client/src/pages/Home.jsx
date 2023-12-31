import styled from 'styled-components'
import { useContext } from 'react'
import { NavBar } from '../components/NavBar'
import { WeatherContext } from '../context/WeatherContext'
import { Loader } from '../components/Loader'
import { Content } from '../components/Content'
import { useHomeWeather } from '../hooks/useHomeWeather'

export const Home = () => {
  const { weather } = useContext(WeatherContext)

  useHomeWeather()

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
