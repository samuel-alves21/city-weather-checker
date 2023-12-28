export const timeConverter = (timeStamp) => {
  const date = new Date(timeStamp * 1000)
  return date.getDay()
}
