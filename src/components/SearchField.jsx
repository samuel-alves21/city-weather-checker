import { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { WeatherContext } from '../context/WeatherContext'

const clearText = (input) => {
  input.current.value = ''
}

const handleKeyDown = (e, navigate, setWeather, citySearched) => {
  if (e.key === 'Enter' && e.target.value !== '' && e.target.value !== citySearched) {
    setWeather('')
    navigate(`/city/${e.target.value}`)
  }
}

const handleClick = (input, navigate, setWeather, citySearched) => {
  if (input.current.value !== '' && input.current.value !== citySearched) {
    setWeather('')
    navigate(`/city/${input.current.value}`)
  }
}

export const SearchField = ({citySearched}) => {
  const input = useRef()
  const navigate = useNavigate()
  const { setWeather } = useContext(WeatherContext)
  return (
    <SearchFieldWraper>
      <Input
        type='text'
        placeholder='type the city name'
        ref={input}
        onKeyDown={(e) => handleKeyDown(e, navigate, setWeather, citySearched)}
      />
      <ClearText onClick={() => clearText(input)}>
        <i className='bi bi-x'></i>
      </ClearText>
      <Search>
        <i className='bi bi-search' onClick={() => handleClick(input, navigate, setWeather, citySearched)}></i>
      </Search>
    </SearchFieldWraper>
  )
}

const SearchFieldWraper = styled.div`
  height: calc(20px + var(--std-responsive-param));
  flex-grow: 1;

  display: flex;

  & > * {
    height: 100%;
  }
`

const Input = styled.input`
  border-radius: 1.5px 0 0 1.5px;
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 2px 15px;
  font-size: calc(12px + var(--std-responsive-param));
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

  & > .bi-x {
    font-size: calc(25px + var(--std-responsive-param));
    margin-top: 2.5px;
  }
`

const Search = styled(ClearText)`
  border-radius: 0 1.5px 1.5px 0;
  background-color: var(--color-secundary-light);
  color: white;
  &:hover {
    cursor: pointer;
    background-color: var(--color-secundary-lighter) !important;
    color: white;
  }

  & > .bi-search {
    font-size: calc(10px + var(--std-responsive-param)) !important;
  }
`
