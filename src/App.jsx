import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainStyle } from './MainStyle.jsx'
import { Home } from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

export const App = () => {
  return (
    <>
      <MainStyle />
      <RouterProvider router={router} />
    </>
  )
}
