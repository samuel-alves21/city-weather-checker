import { TailSpin } from 'react-loader-spinner'
import styled from 'styled-components'

export const Loader = () => {
  return (
    <LoaderWrapper>
      <TailSpin color='#e05514' />
    </LoaderWrapper>
  )
}

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`
