import { getDate } from '../functions/getDate'

export const Date = () => {
  const [day, month, dayOfMonth, year] = getDate()
  return (
    <p>{day}, {month} {dayOfMonth}, {year}</p>
  )
}
