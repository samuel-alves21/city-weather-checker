import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { About } from './About'
import { Logo } from './Logo'
import { SearchField } from './SearchField'
import { breakpoints } from '../breakpoints'

export const NavBar = () => {
  const isMidScreen = useMediaQuery({
    query: `(max-width: ${breakpoints.midScreen})`,
  })
  return (
    <NavBarWrapper>
      {isMidScreen || <Logo />}
      <SearchField />
      <About />
    </NavBarWrapper>
  )
}

const NavBarWrapper = styled.nav`
  height: var(--headlines-size);
  background-color: var(--color-primary);
  padding: var(--headline-padding);

  display: flex;
  align-items: center;
  gap: calc(20px + var(--std-responsive-param));
  justify-content: space-between;

  color: white;

  @media (max-width: ${breakpoints.midScreen}) {
    padding: 0 2.5vw;
  }
`