import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Themes from "../pages/Themes"
import Nav from '../widgets/ui/Nav/Nav'
import Questions from '../pages/Questions/Questions'

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
      {
        path: '/question/:topicId',
        element: <Questions />
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
