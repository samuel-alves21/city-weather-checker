import { createContext, useState } from "react";

export const ForecastContext = createContext()

export const ForecastProvider = ({ children }) => {
  const [forecast, setForecast ] = useState(null)

  return (
    <ForecastContext.Provider value={{ forecast, setForecast }}>
      { children }
    </ForecastContext.Provider>
  )
}