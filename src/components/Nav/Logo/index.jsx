import logo from '../../../img/weather-app-logo.png'

import './styles.css'

export const Logo = () => {
  return (
    <div className='div-logo'>
      <a href='https://samuel-alves21.github.io/weather-app/' className='link-home'>
        <img src={logo} alt="logo" />
      </a>
    </div>
  )
}