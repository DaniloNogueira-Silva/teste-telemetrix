import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Page
import ProductView from './pages/productView';
import CategoryView from './pages/CategoryView';
import CreateCategory from './pages/CreateCategory';
import CreateProduct from './pages/CreateProduct';

const router = createBrowserRouter([
  //tables
  {
    path: '/product',
    element: <ProductView/>,
  },
  {
    path: '/',
    element: <CategoryView />,
  },

  //forms
  {
    path: '/category/create',
    element: <CreateCategory />,
  },
  {
    path: '/product/create',
    element: <CreateProduct />,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
