import styled from 'styled-components'
import { Img } from './Img'
import logo from '../img/weather-app-logo.png'

export const Logo = () => {
  return (
    <a href="https://samuel-alves21.github.io/weather-app/">
      <LogoWrapper onClick={() => (window.location = '/')}>
        <Img src={logo} alt="Logo's app" />
      </LogoWrapper>
    </a>
  )
}

const LogoWrapper = styled.div`
  width: calc(40px + var(--std-responsive-param));
  transition: transform 0.05s;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`
