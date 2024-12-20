import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path:'products',
        element: <Products />
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
