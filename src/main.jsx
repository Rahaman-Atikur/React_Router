import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Hello World</p>
  },
  {
    path: "/About",
    element: <p>About</p>
  },
  {
    path: "/Blog",
    element: <p>Hi blogs and Power</p>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>
)
