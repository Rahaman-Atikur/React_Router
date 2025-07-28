import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Component/Home/Home.jsx'
import Laptop from './Component/Laptop/Laptop.jsx'
import Mobile from './Component/Mobile/Mobile.jsx'
import Root from './Component/Root/Root.jsx'
const router = createBrowserRouter([
  {
    path: "/", 
    Component: Root,
    children: [
      { index: true, Component: Laptop },
      { path: "mobile", Component: Mobile },
      {path: "laptop", Component: Laptop}
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>
)
