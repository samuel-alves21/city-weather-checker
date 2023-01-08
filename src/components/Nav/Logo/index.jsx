import logo from '../../../img/weather-app-logo.png'

import './styles.css'

export const Logo = () => {
  return (
    <div className='div-logo'>
      <a href='/' className='link-home'>
        <img src={logo} alt="logo" />
      </a>
    </div>
  )
}