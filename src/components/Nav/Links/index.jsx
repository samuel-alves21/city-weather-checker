import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'

import './styles.css'

export const Links = () => {
  return (
    <div className='div-links'>
      <ul>
        <li><a target='_blank' rel='noreferrer' href="https://github.com/samuel-alves21"><GitHubIcon className='icon'/></a></li>
        <li><a target='_blank' rel='noreferrer' href="https://www.instagram.com/samuel_alves.21/"><InstagramIcon className='icon'/></a></li>
        <li><a className='api-link' target='_blank' rel='noreferrer' href="https://openweathermap.org/">Open Weather API</a></li>
      </ul>
    </div>

  )
}