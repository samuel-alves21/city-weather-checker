import styled from 'styled-components'
import { breakpoints } from '../breakpoints'

export const Line = () => {
  return <OrangeLine> </OrangeLine>
}

const OrangeLine = styled.div`
  width: 50%;
  height: 2px;
  background-color: var(--color-primary);

  @media (max-width: ${breakpoints.midScreen}) {
    width: 80%;
  }
`
