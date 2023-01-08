import { useNavigate } from 'react-router-dom'

import './styles.css'

export const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="error-page">
      <h1>Not Found</h1>
      <div className="button-container">
        <p>Seens like I couldn't find anything<span className="emoji">-(</span></p>
        <button onClick={() => navigate('/')}>back to Home</button>
      </div>
    </div>
  )
}