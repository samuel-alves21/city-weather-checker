import { timeConverter } from "../../../functions/timeConverter"
import { days } from "../../../data"

export const Days = ({day}) => {
  return (
    <div>
      <h3>{days[timeConverter(day.dt + 100000)]}</h3>
      <div>
        <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="Icon" />
      </div>
      <h4>{day.weather[0].main}</h4>
      <p>{day.weather[0].description}</p>
    </div>
  )
}