import styled from 'styled-components'
import { days } from '../utils/date'
import { timeConverter } from '../functions/timeConverter'
import { breakpoints } from '../breakpoints'

export const ForecastDays = ({ day }) => {
  return (
    <ForecastDaysWrapper>
      <h3>{days[timeConverter(day.dt + 30000)].slice(0, 3)}</h3>
      <ImgWrapper>
        <img
          src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          alt='Icon'
        />
      </ImgWrapper>
      <div>
        <WeatherMain>{day.weather[0].main}</WeatherMain>
        <p>{day.weather[0].description}</p>
      </div>
    </ForecastDaysWrapper>
  )
}

const ForecastDaysWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & > :first-child, & > :last-child {
    width: 80px;
  }

  @media (max-width: ${breakpoints.midScreen}) {
    flex-direction: row;
    min-width: 80vw;
  }
`

const WeatherMain = styled.h4`
  color: var(--color-primary);
`

const ImgWrapper = styled.div`

  width: 80px;

  @media (max-width: ${breakpoints.midScreen}) {
    & img {
      width: 60px;
    }
  }

  flex-grow: 1;
`
