import { useNavigate } from "react-router-dom"

import './styles.css'

export const Error = () => {
  const navigate = useNavigate()
  return (
    <div className="error-page">
      <h1>Error 404</h1>
      <div className="button-container">
        <p>Something went wrong <span className="emoji">-(</span></p>
        <button onClick={() => navigate('/')}>back to Home</button>
      </div>
    </div>
  )
}