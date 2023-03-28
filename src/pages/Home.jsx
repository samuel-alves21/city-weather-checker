import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CityWeather } from '../components/CityWeather'
import { NavBar } from '../components/NavBar'
import { getCurrentLocationWeather } from '../functions/getCurrentLocationWeather'
import { getPosition } from '../functions/getPosition'

export const Home = () => {
  const [weather, setWeather] = useState('')

  useEffect(() => {
    getPosition
      .then(async (resolve) => await getCurrentLocationWeather(resolve, setWeather))
      .catch((error) => console.log(error))
  }, [])

  return (
    <HomeWrapper>
      <NavBar />
      {weather ? <CityWeather weatherData={weather}/> : <p>Loading</p>}
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  
`
