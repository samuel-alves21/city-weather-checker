import GitHubIcon from '@material-ui/icons/GitHub';

import './styles.css'

export const Links = () => {
  return (
    <div className='div-links'>
      <ul>
        <li><a target='_blank' rel='noreferrer' href="https://github.com/samuel-alves21"><GitHubIcon /></a></li>
        <li><a target='_blank' rel='noreferrer' href="https://openweathermap.org/">Open Weather</a></li>
      </ul>
    </div>

  )
}