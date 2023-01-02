import { Details } from "./Details"
import { Forecast } from "./Forecast"
import { Title } from "./Title"
import { MainImage } from "./MainImage"

import './styles.css'
import { CitySearch } from "./CitySearch"

export const Content = () => { 

  return (
    <div className="content-container">
      <CitySearch />
      <Title />
      <MainImage />
      <Details />
      <Forecast />
    </div>
  )
}
