import styled from 'styled-components'
import logo from '../img/weather-app-logo.png'

export const Logo = () => {
  return (
    <a href='/'>
      <LogoWrapper onClick={() => window.location = '/'}>
        <img src={logo} alt="Logo's app" />
      </LogoWrapper>
    </a>
  )
}

const LogoWrapper = styled.div`

  transition: transform 0.05s;

  & img {
    width: 30px !important;
  }

  &:hover {
    transform: scale(1.005);
    cursor: pointer;
  }
`
