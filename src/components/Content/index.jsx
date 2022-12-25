import { Details } from "./Details"
import { Forecast } from "./Forecast"
import { Title } from "./Title"
import { MainImage } from "./MainImage"

import './styles.css'

export const Content = () => { 

  return (
    <div className="content-container">
      <Title />
      <MainImage />
      <Details />
      <Forecast />
    </div>
  )
}