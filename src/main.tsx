// src/main.tsx
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Body from './components/Body.tsx';
import Product from './components/Product.tsx';
import About from './components/About.tsx';
import Signup from './components/SIgnup.tsx'; // Fixed typo
import Login from './components/Login.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContextProvider from './strore/FirebaseContext.tsx'; // Correct import
import { auth } from './firebase/config.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/body", element: <Body /> },
      { path: "/product/:id", element: <Product /> },
    ],
  },
  { path: "/about", element: <About /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
]);

const root = createRoot(document.getElementById('root')!);

root.render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);
