import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../../Pages/Home"
import { CitySearchPage } from "../../Pages/CitySearchPage"


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/city/:cityName" element={<CitySearchPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
