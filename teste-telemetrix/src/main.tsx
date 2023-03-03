import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Page
import ProductView from './pages/productView';
import CategoryView from './pages/CategoryView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductView/>,
  },
  {
    path: '/category',
    element: <CategoryView />,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
