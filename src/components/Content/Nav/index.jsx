import { TextInput } from "./TextInput"
import { Logo } from "./Logo"
import { Links } from "./Links"

import './styles.css'

export const Nav = () => {
  return (
    <nav className="nav">
      <Logo />
      <TextInput />
      <Links />
    </nav>
  )
}