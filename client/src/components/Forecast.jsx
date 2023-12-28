import { useContext } from 'react'
import { getForecastDays } from '../functions/getForecastDays'
import { WeatherContext } from '../context/WeatherContext'
import { ForecastDays } from './ForecastDays'
import styled from 'styled-components'
import { breakpoints } from '../breakpoints'

export const Forecast = () => {
  const { weather } = useContext(WeatherContext)
  const forecastDays = getForecastDays(weather.forecast)

  return (
    <ForecastWrapper className='forecast-section'>
      {forecastDays.map((day, index) => (
        <ForecastDays key={index} day={day} />
      ))}
    </ForecastWrapper>
  )
}

const ForecastWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: calc(20px + var(--std-responsive-param));
  margin-top: calc(30px + var(--std-responsive-param));

  @media (max-width: ${breakpoints.midScreen}) {
    flex-direction: column;
    gap: 5px;
  }
`
