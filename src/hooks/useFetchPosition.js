import { useEffect } from "react"

export const useFetchPosition = (setPosition, setError) => {
  useEffect(() => { 
    const success = (position) => {
      setPosition({
        lat: position.coords.latitude,  
        lon: position.coords.longitude,
      })
    }
    const error = (e) => {
      console.log(e)
      setError(true)
    }

    navigator.geolocation.watchPosition(success, error)
  }, [ setPosition, setError ])
}