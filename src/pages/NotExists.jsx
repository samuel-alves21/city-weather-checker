import styled from 'styled-components'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom'

export const NotExists = () => {
  const navigate = useNavigate()

  return (
    <PageWrapper>
      <h1>Seens like this page does'nt exists...</h1>
      <Button onClick={() => navigate('/')}>Go back to Home</Button>
    </PageWrapper>
  )
}

const PageWrapper = styled.section`
  height: var(--height-full);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  & h1 {
    margin-bottom: 20px;
  }
`
