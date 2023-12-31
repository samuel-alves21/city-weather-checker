export const getCurrentPosition = () =>
  new Promise((resolve, reject) => {
    const success = (position) => {
      resolve({ lat: position.coords.latitude, lon: position.coords.longitude })
    }
    const error = (e) => {
      reject(e)
    }

    navigator.geolocation.getCurrentPosition(success, error, {
      maximumAge: 5000000,
      timeout: 20000,
    })
  })
