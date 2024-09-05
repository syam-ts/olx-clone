import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Body from './components/Body.tsx'
import Product from './components/Product.tsx'
import About from './components/About.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/body",
        element: <Body />
      },
      {
        path: "/product/:id",
        element: <Product />
      }
    ] 
  },
  {
    path: "/about",
    element: <About />
  }
])

createRoot(document.getElementById('root')!).render(  
      <RouterProvider router={router} /> 
)
