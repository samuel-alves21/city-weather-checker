export const getForecastDays = (forecast) => {
  const daysAdded = []
  const forecastDays = []

  forecast.list.forEach((day) => {
    const date = new Date()
    const currentDay = String(date.getDate())
    const dateDay = `${day.dt_txt[8]}${day.dt_txt[9]}`
    if (!daysAdded.includes(dateDay) && dateDay !== currentDay) {
      daysAdded.push(dateDay)
      forecastDays.push(day)
    }
  })

  return forecastDays
}