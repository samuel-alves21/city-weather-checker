export const getCountryName = (code) => {
  const regionNames = new Intl.DisplayNames(['en'], { type: 'region' })

  return regionNames.of(code)
}
