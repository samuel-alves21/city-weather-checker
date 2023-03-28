import { useEffect } from 'react'
import { NavBar } from '../components/NavBar'
import { getCurrentLocationWeather } from '../functions/getCurrentLocationWeather'
import { getPosition } from '../functions/getPosition'

export const Home = () => {
  useEffect(() => {
    getPosition
      .then(async (resolve) => getCurrentLocationWeather(resolve))
      .catch((error) => console.log(error))
  }, [])

  return <NavBar />
}
