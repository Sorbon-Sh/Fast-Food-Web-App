import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout.tsx'
import MainPage from './pages/MainPage.tsx'
import ProductDetails from './pages/ProductDetails.tsx'
import Junk from './pages/Junk.tsx'
import ErrorPage from './pages/ErrorPage.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {path: "/", element: <MainPage />},
      {path: "/product/:id", element: <ProductDetails/>},
      {path: "/junk", element: <Junk />},
      
    ]
  },
  {path: "*", element: <ErrorPage />}
  
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
