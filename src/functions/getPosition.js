export const getPosition = new Promise((resolve, reject) => {
  const success = (position) => {
    console.log(position.coords.latitude, position.coords.longitude)
    resolve({ lat: position.coords.latitude, lon: position.coords.longitude })
  }
  const error = (e) => {
    reject(e)
  }

  navigator.geolocation.getCurrentPosition(success, error, {
    maximumAge: 300000,
    timeout: 25000,
  })
})
