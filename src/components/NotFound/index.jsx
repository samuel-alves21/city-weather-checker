import './styles.css'

export const NotFound = () => {
  return (
    <div className="error-page">
      <h1>Not Found</h1>
      <div className="button-container">
        <p>Seens like I couldn't find anything<span className="emoji">-(</span></p>
      </div>
    </div>
  )
}