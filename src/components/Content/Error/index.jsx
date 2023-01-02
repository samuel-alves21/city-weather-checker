import { useNavigate } from "react-router-dom"

export const Error = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Error 404</h1>
      <p>Something went wrong -(</p>
      <button onClick={() => navigate('/')}>back to Home</button>
    </div>
  )
}