import { useMediaQuery } from "react-responsive"

import { TextInput } from "./TextInput"
import { Logo } from "./Logo"
import { Links } from "./Links"

import './styles.css'

export const Nav = () => {
  const midScreen = useMediaQuery({ query: '(max-width: 750px)' })
  const smallScreen = useMediaQuery({ query: '(max-width: 450px)' })

  return (
    <nav className="nav">
      {!smallScreen && <Logo />}
      <TextInput />
      {!midScreen && <Links />}
    </nav>
  )
}