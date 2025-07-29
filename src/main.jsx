import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Component/Home/Home.jsx'
import Laptop from './Component/Laptop/Laptop.jsx'
import Mobile from './Component/Mobile/Mobile.jsx'
import Root from './Component/Root/Root.jsx'
import Users from './Component/Users/Users.jsx'
const loadingData = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Laptop },
      { path: "mobile", Component: Mobile },
      { path: "laptop", Component: Laptop },

      {
        path: "Users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users
      },
      {
        path: "UsersTwo",
        element: <Suspense fallback={<span>Loading...</span>}>
          <usersTwo loadingData={loadingData}></usersTwo>
        </Suspense>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>
)
