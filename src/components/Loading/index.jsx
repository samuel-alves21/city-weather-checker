import { useState } from 'react'
import { ColorRing } from 'react-loader-spinner'

import { NotFound } from '../NotFound'
import { Nav } from '../Nav'

import './styles.css'

export const Loading = () => {
  const [ counter, setCounter ] = useState(0)

  const myTimer = setTimeout(() => {
    setCounter(counter + 1)
  }, 1000)
<<<<<<< HEAD

=======
>>>>>>> css-landscape
  
  if (counter === 3) {
    clearTimeout(myTimer)
    return (
      <>
        <Nav />
        <NotFound />
      </>
    )
  }
  else {
    return (
      <div className="loading-container">
        < ColorRing  
          colors={['#e05514', '#e05514','#e05514','#e05514','#e05514',]}
        />
      </div>
    )
  }
}