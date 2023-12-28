import { createHashRouter, RouterProvider } from 'react-router-dom'
import { MainStyle } from './MainStyle.jsx'
import { Home } from './pages/Home.jsx'
import { WeatherProvider } from './context/WeatherContext.jsx'
import { NotExists } from './pages/NotExists.jsx'
import { Error } from './pages/Error.jsx'
import { ErrorProvider } from './context/ErrorContext.jsx'
import { City } from './pages/City.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotExists />,
  },
  {
    path: '/error',
    element: <Error />,
  },
  {
    path: '/city/:name',
    element: <City />,
  },
])

export const App = () => {
  return (
    <WeatherProvider>
      <ErrorProvider>
        <MainStyle />
        <RouterProvider router={router} />
      </ErrorProvider>
    </WeatherProvider>
  )
}
