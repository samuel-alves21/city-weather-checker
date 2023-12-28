import { useContext } from 'react'
import styled from 'styled-components'
import { WeatherContext } from '../context/WeatherContext'
import { getCountryName } from '../functions/getCountryName'
import { Img } from './Img'
import { breakpoints } from '../breakpoints'

export const Location = () => {
  const { weather } = useContext(WeatherContext)
  const icon = `https://openweathermap.org/img/wn/${weather.currentWeather.weather[0].icon}.png`
  return (
    <LocationName>
      <Title
        href={`https://www.google.com.br/maps/place/${weather.currentWeather.name}`}
        target='_blank'
      >
        {weather.currentWeather.name},{' '}
        {getCountryName(weather.currentWeather.sys.country)}
      </Title>
      <ImgWrapper>
        <Img src={icon} alt='weather icon' />
      </ImgWrapper>
    </LocationName>
  )
}

export const LocationName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.a`
  font-size: calc(28px + var(--std-responsive-param));
  color: var(--color-secundary);
  font-weight: bolder;
  transition: color 0.5s;

  &:hover {
    cursor: pointer;
    color: var(--color-primary);
  }
`
const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  width: calc(1.5vw + 100px);

  @media (max-width: ${breakpoints.midScreen}) {
    width: calc(0.5vw + 50px);
  }
`
