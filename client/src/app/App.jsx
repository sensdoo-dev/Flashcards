import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Themes from '../pages/ThemeList/Themes';
import Questions from '../pages/Questions/Questions';
import HomePage from '../pages/HomePage/HomePage';
import Nav from '../widgets/ui/Nav/Nav';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/themes',
        element: <Themes />,
      },
      {
        path: '/question/:topicId',
        element: <Questions />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
