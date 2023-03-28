import styled from 'styled-components'
import { Img } from './Img'
import logo from '../img/weather-app-logo.png'

export const Logo = () => {
  return (
    <LogoWrapper>
      <Img src={logo} alt="Logo's app" />
    </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
  width: calc(40px + var(--std-responsive-param));
`
