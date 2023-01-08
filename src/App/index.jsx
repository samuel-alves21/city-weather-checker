import { HashRouter, Route, Routes } from "react-router-dom"

import { Home } from "../Pages/Home"
import { CitySearchPage } from "../Pages/CitySearchPage"
import { Error } from "../Pages/Error"

export const App = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/city/:cityName" element={<CitySearchPage />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </HashRouter>
  )
}
