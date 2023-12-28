import styled from 'styled-components'
import { useContext } from 'react'
import { ErrorContext } from '../context/ErrorContext'
import { NavBar } from '../components/NavBar'

import stormIcon from '../img/storm.png'
import { breakpoints } from '../breakpoints'

export const Error = () => {
  const {
    error: { errorDescription },
  } = useContext(ErrorContext)
  return (
    <PageWrapper>
      <NavBar />
      <ContentWrapper>
        <img src={stormIcon} alt="storm icon" />
        <h1>Sorry, Something went wrong...</h1>
        {errorDescription === 'city not found' ? (
          <p>We cannot find this city, be sure you typed correctly...</p>
        ) : (
          <p>
            be sure if the the location is on, or if you have internet access...
          </p>
        )}
      </ContentWrapper>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ContentWrapper = styled.section`
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  & img {
    width: 200px;
    margin-bottom: 20px;

    @media (max-width: ${breakpoints.smallScreen}) {
      width: 80px;
    }
  }

  & h1 {
    font-size: 2.5rem;
  }

  & p {
    font-size: 1.2rem;
  }

  & h1,
  & p {
    margin-bottom: 20px;
  }
`
