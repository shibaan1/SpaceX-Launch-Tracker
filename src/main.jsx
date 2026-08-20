import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import Home from './pages/Home.jsx'
import LaunchDetails from './pages/LaunchDetail.jsx'
import Statistics from './pages/Statistics.jsx'
import NotFound from './pages/NotFound.jsx'
import { RouterProvider } from 'react-router/dom'

const router = createBrowserRouter(

  [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/launch/:id',
      element: <LaunchDetails />
    },
    {
      path: '/statistics',
      element: <Statistics />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
