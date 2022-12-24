import { useContext } from "react"
import { ForecastContext } from "../../../contexts/ForecastContext"
import { getForecastDays } from "../../../functions/getForecastDays"
import { Days } from "../Days"

export const Forecast = () => {

  const { forecast } = useContext(ForecastContext)
  const forecastDays = getForecastDays(forecast)

  console.log(forecastDays)

  return (
    <div style={{'display': 'flex', 'justifyContent':  'space-evenly', 'textAlign': 'center'}}>
      {forecastDays.map((day, index) => <Days key={index} day={day} />)}
    </div>
  )
}
