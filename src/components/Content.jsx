import styled from 'styled-components'
import { Location, LocationName } from './Location'
import { Date } from './Date'
import { CurrentWeather } from './CurrentWeather'
import { Forecast } from './Forecast'
import { Line } from './Line'
import { breakpoints } from '../breakpoints'

export const Content = () => {
  return (
    <ContentWrapper>
      <Location />
      <Date />
      <CurrentWeather />
      <Line />
      <Forecast />
    </ContentWrapper>
  )
}

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;

  & > *:not(:last-child),
  & ${LocationName} > *:not(:first-child) {
    margin-top: 22px;
  }

  @media (max-width: ${breakpoints.midScreen}) {
    padding: 0 10px;
  }
`
