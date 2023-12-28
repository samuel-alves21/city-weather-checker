import { createContext, useState } from 'react'

export const ErrorContext = createContext()

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState({
    hasError: false,
    errorDescription: '',
  })

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  )
}
