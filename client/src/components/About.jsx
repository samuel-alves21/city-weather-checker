import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { breakpoints } from '../breakpoints'

export const About = () => {
  const isSmallScreen = useMediaQuery({
    query: `(max-width: ${breakpoints.smallScreen})`,
  })

  return (
    <AboutWrapper>
      <a
        href='https://github.com/samuel-alves21'
        target='_blank'
        rel='noreferrer'
      >
        <i className='bi bi-github'></i>
      </a>
      <a
        href='https://www.linkedin.com/in/samuel-theodoro'
        target='_blank'
        rel='noreferrer'
      >
        <i className='bi bi-linkedin'></i>
      </a>
      {isSmallScreen || (
        <a href='https://openweathermap.org/' target='_blank' rel='noreferrer'>
          Open Weather API
        </a>
      )}
    </AboutWrapper>
  )
}

const AboutWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  text-align: center;
  justify-content: end;
  width: 270px;
  font-size: calc(15px + var(--std-responsive-param));

  & * {
    transition: color 0.5s;
  }

  & .bi-github:hover,
  & .bi-instagram:hover,
  & a:hover {
    color: var(--color-secundary-lighter);
    cursor: pointer;
  }

  & a {
    font-size: calc(12px + var(--std-responsive-param));
  }

  @media (max-width: ${breakpoints.smallScreen}) {
    justify-content: initial;
    width: auto;
  }
`
