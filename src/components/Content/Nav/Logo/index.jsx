import { Link } from 'react-router-dom'
import './styles.css'

export const Logo = () => {
  return (
    <Link to='/' className='link-home'>
      <h3 className="logo">Weather App</h3>
    </Link>
  )
}