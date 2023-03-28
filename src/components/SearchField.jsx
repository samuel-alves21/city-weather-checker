import { useRef } from 'react'
import styled from 'styled-components'

const clearText = (input) => {
  input.current.value = ''
}

export const SearchField = () => {
  const input = useRef()

  return (
    <SearchFieldWraper>
      <Input type='text' placeholder='type the city name' ref={input} />
      <ClearText onClick={() => clearText(input)}>
        <i className='bi bi-x-lg'></i>
      </ClearText>
      <Search>
        <i className='bi bi-search'></i>
      </Search>
    </SearchFieldWraper>
  )
}

const SearchFieldWraper = styled.div`
  height: calc(25px + var(--std-responsive-param));
  flex-grow: 1;

  display: flex;

  & > * {
    height: 100%;
  }
`

const Input = styled.input`
  border-radius: 3px 0 0 3px;
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 0.5px 15px;
  font-size: calc(16px + var(--std-responsive-param));
  font-weight: lighter;
  color: var(--color-secundary);
`

const ClearText = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;

  background-color: white;
  color: var(--color-primary);
  transition: color 0.5s;

  &:hover {
    cursor: pointer;
    color: var(--color-secundary);
  }
`

const Search = styled(ClearText)`
  border-radius: 0 3px 3px 0;
  background-color: var(--color-secundary-light);
  color: white;
   &:hover {
    cursor: pointer;
    background-color: var(--color-secundary-lighter);
    color: white;
  }
`
