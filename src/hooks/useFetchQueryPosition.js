import { useEffect } from "react"

export const useFetchQueryPosition = (state, setPosition, key, setError, setNotFound) => {
  useEffect(() => {
    const exec = async() => {  
      try {
        const data = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${state}&appid=${key}`)
        const resolvedData = await data.json()
        console.log(resolvedData)
        console.log(state)
        if (resolvedData[0] === undefined) {
          setNotFound(true)
          setPosition('not found')
        } 
        else {
          const { lat, lon } = resolvedData[0]
          setNotFound(false)
          setPosition({ lat, lon })
        }
      } 
      catch(e) {
        console.log(e)
        setError(true)
      }
    }
    exec()
  }, [state, setError, key, setPosition, setNotFound])
}