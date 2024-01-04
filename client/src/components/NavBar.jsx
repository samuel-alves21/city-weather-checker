import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { About } from './About'
import { Logo } from './Logo'
import { SearchField } from './SearchField'
import { breakpoints } from '../breakpoints'

export const NavBar = ({ citySearched }) => {
  const islargeScreen = useMediaQuery({
    query: `(max-width: ${breakpoints.largeScreen})`,
  })
  return (
    <NavBarWrapper $islargeScreen={islargeScreen}>
      {islargeScreen || <Logo />}
      <SearchField citySearched={citySearched} />
      <About />
    </NavBarWrapper>
  )
}

const NavBarWrapper = styled.nav`
  min-height: var(--headlines-size);
  background-color: var(--color-primary);
  padding: var(--headline-padding);
  width: 100%;
  display: flex;
  align-items: center;
  gap: calc(20px + var(--std-responsive-param));
  justify-content: space-between;

  color: white;

  & > :first-child, & > :last-child {
    ${({$islargeScreen}) => !$islargeScreen && 'width: 400px !important'};
  }

  @media (max-width: ${breakpoints.largeScreen}) {
    padding: 0 2.5vw;
  }
`
