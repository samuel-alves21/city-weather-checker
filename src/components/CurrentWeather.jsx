import { useContext } from 'react'
import styled from 'styled-components'
import { WeatherContext } from '../context/WeatherContext'
import { breakpoints } from '../breakpoints'

export const CurrentWeather = () => {
  const { weather } = useContext(WeatherContext)

  return (
    <WeatherWrapper>
      <Weather>
        {weather.currentWeather.weather[0].main},{' '}
        {weather.currentWeather.weather[0].description}
      </Weather>
      <MainTemp>{`${weather.currentWeather.main.temp}\u2103`}</MainTemp>
      <MinMaxTemp>
        <p>{`${weather.currentWeather.main.temp_max}\u2103`}</p>
        <p>{`${weather.currentWeather.main.temp_min}\u2103`}</p>
      </MinMaxTemp>
    </WeatherWrapper>
  )
}

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > *:not(:first-child) {
    margin-top: 22px;
  }
`

const Weather = styled.h1`
  font-size: calc(24px + var(--std-responsive-param));
  color: var(--color-primary);

  @media (max-width: ${breakpoints.midScreen}) {
    font-size: calc(25px + var(--std-responsive-param));
  }
`

const MainTemp = styled.h3``

const MinMaxTemp = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`
