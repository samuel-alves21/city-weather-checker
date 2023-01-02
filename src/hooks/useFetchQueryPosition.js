import { useEffect } from "react"

export const useFetchQueryPosition = (state, setPosition, key, setError) => {
  useEffect(() => {
    const exec = async() => {  
      try {
        const data = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${state}&appid=${key}`)
        const resolvedData = await data.json()
        const { lat, lon } = resolvedData[0]
  
        console.log(resolvedData)
        setPosition({ lat, lon })
      } 
      catch(e) {
        console.log(e)
        setError(true)
      }
  }
    exec()
  }, [state, setError, key, setPosition,])
}