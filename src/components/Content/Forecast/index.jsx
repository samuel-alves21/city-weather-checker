import { useContext } from "react"
import { ForecastContext } from "../../../contexts/ForecastContext"
import { getForecastDays } from "../../../functions/getForecastDays"
import { Days } from "./Days"

import './styles.css'

export const Forecast = () => {

  const { forecast } = useContext(ForecastContext)
  const forecastDays = getForecastDays(forecast)

  return (
    <section className="forecast-section">
      {forecastDays.map((day, index) => <Days key={index} day={day} />)}
    </section>
  )
}
