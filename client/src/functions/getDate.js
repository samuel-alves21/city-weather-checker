import { days, months } from '../data/date'

export const getDate = () => {
  const date = new Date()

  const day = days[date.getDay()]
  const month = months[date.getMonth()]
  const dayOfMonth = date.getDate()
  const year = date.getFullYear()

  return [day, month, dayOfMonth, year]
}
