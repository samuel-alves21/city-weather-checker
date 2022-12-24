import { Details } from "./Details"
import { Forecast } from "./Forecast"
import { Title } from "./Title"

export const Content = () => { 

  return (
    <div className="content-container">
      <Title />
      <Details />
      <Forecast />
    </div>
  )
}