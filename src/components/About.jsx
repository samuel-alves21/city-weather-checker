import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { breakpoints } from '../breakpoints'

export const About = () => {
  const isSmallScreen = useMediaQuery({
    query: `(max-width: ${breakpoints.smallScreen})`,
  })
  return (
    <AboutWrapper>
      <i className='bi bi-github'></i>
      <i className='bi bi-instagram'></i>
      {isSmallScreen || (
        <a href='https://openweathermap.org/'>Open Weather API</a>
      )}
    </AboutWrapper>
  )
}

const AboutWrapper = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  & > *:not(:last-child) {
    margin-right: 10px;
  }

  & .bi-github,
  & .bi-instagram {
    font-size: calc(20px + var(--std-responsive-param));
  }

  @media (max-width: ${breakpoints.smallScreen}) {
    justify-content: initial;
    width: auto;
  }
`
