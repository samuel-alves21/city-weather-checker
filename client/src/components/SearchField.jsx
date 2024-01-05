import { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { WeatherContext } from '../context/WeatherContext'
import { breakpoints } from '../breakpoints'
import { useMediaQuery } from 'react-responsive'
import { ErrorContext } from '../context/ErrorContext'

export const SearchField = ({ citySearched }) => {
  const input = useRef()
  const navigate = useNavigate()
  const { setWeather } = useContext(WeatherContext)
  const { setError } = useContext(ErrorContext)

  const isMidScreen = useMediaQuery({
    query: `(max-width: ${breakpoints.midScreen})`,
  })

  const search = () => {
    if (input.current.value !== '' && input.current.value !== citySearched) {
      setWeather('')
      setError({
        hasError: false,
        errorDescription: '',
      })
      navigate(`/city/${input.current.value}`)
    }
  }

  const clearText = () => {
    input.current.value = ''
  }
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      search()
    }
  }
  
  return (
    <SearchFieldWraper $isMidScreen={isMidScreen}>
      <Input type='text' placeholder='type the city name' ref={input} onKeyDown={(e) => handleKeyDown(e)}/>
      <ClearText onClick={() => clearText(input)}>
        <i className='bi bi-x'></i>
      </ClearText>
      <Search>
        <i className='bi bi-search'onClick={search}></i>
      </Search>
    </SearchFieldWraper>
  )
}

const SearchFieldWraper = styled.div`
  height: calc(22px + var(--std-responsive-param));
  width: ${({$isMidScreen}) => $isMidScreen ? '100%' : '40%'};
  margin: 0 auto;
  display: flex;

  & > * {
    height: 100%;
  }
`

const Input = styled.input`
  width: 100%;
  border-radius: 1.5px 0 0 1.5px;
  border: none;
  outline: none;
  padding: 2px 15px;
  font-size: calc(12px + var(--std-responsive-param));
  font-weight: lighter;
  color: #000;
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
  transition: background-color 0.5s;
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
