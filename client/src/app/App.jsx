import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Themes from "../pages/Themes"
import Nav from '../widgets/ui/Nav/Nav'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        path: '/',
        // element: <HomePage />
      },
      {
        path: '/themes',
        element: <Themes />
      },
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
