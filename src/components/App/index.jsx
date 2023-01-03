import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../../Pages/Home"
import { CitySearchPage } from "../../Pages/CitySearchPage"
import { Nav } from "../Content/Nav"
import { Error } from "../../Pages/Error"


export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/city/:cityName" element={<CitySearchPage />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
