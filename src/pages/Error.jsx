import styled from 'styled-components'
import { Button } from '../components/Button'
import { useContext } from 'react'
import { ErrorContext } from '../context/ErrorContext'

export const Error = () => {
  const {
    error: { errorDescription },
  } = useContext(ErrorContext)
  return (
    <PageWrapper>
      <h1>Sorry, Something went wrong...</h1>
      {errorDescription === 'city not found' ? (
        <p>We cannot find this city, be sure you typed correctly...</p>
      ) : (
        <p>
          be sure if the the location is on, or if you have internet access...
        </p>
      )}
      <Button as='a' href="https://samuel-alves21.github.io/weather-app/">try again</Button>
    </PageWrapper>
  )
}

const PageWrapper = styled.section`
  height: var(--height-full);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  & h1,
  & p {
    margin-bottom: 20px;
  }
`
